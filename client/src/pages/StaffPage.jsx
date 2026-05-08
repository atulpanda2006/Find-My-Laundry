import { useState, useEffect } from 'react'
import axios from 'axios'
import ToggleThemeButton from '../components/ToggleThemeButton'
import StaffBagBox from '../components/StaffBagBox'
import Search from '../components/Search'
import { useNavigate } from 'react-router'
import Navbar from '../components/Navbar'

function StaffPage(props) {
    const navigate = useNavigate();
    const [staffSearchResult, setStaffSearchResult] = useState(null) // It stores user's search result's data
    const [loading, setLoading] = useState(false)
    const [searchMessage, setSearchMessage] = useState('')
    const [staffRenderedBags, setStaffRenderedBags] = useState([])
    const [bagsCount, setBagsCount] = useState(0)
    const [allBagsData, setAllBagsData] = useState([])

    useEffect(() => {
        async function loadData() {
            const token = localStorage.getItem('token')
            if(token != null) {
                try {
                    setLoading(true)
                    const res = await axios.get('https://find-my-laundry.vercel.app/laundries', {'headers': {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
                    setStaffRenderedBags(res.data.laundries)
                    setAllBagsData(res.data.laundries)
                    setBagsCount(res.data.laundries.length)
                    setLoading(false)
                }
                catch (err) {
                    navigate('/login')
                }
            }
            else {
                navigate('/login')
            }
        }
        loadData()
    },[])

    async function handleStaffSearch(searchInputId) {
        if(searchInputId) {
            try {
                const token = localStorage.getItem('token')
                setSearchMessage('Searching...')
                const bag = await axios.get(`https://find-my-laundry.vercel.app/laundries/${searchInputId}/details`, null, {'headers': {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
                setSearchMessage('')
                setStaffSearchResult(bag.data.laundry);
            }
            catch (err) {
                setSearchMessage('No bag found')
                console.log(err)
            }
        }
    }

    return (
        <div
        className={`
        min-h-screen
        transition-colors
        duration-300
        pb-20
        ${props.lightTheme ? "bg-white text-black" : "bg-black text-white"}`
        }>

            <div
            className='pt-3 pl-3'>
                <ToggleThemeButton lightTheme={props.lightTheme} setLightTheme={props.setLightTheme} />
            </div>
            <br />

            <div>
                <Search handleSearch={handleStaffSearch} />
            </div>
            <h1 className='font-bold text-2xl m-3'>{searchMessage}</h1>

            {
            staffSearchResult != null && <StaffBagBox id={staffSearchResult.id} status={staffSearchResult.status} name={staffSearchResult.name} phone={staffSearchResult.phone} lightTheme={props.lightTheme} />
            }
            <hr className={`${props.lightTheme ? 'border-gray-600' : 'border-gray-400' }`}/>

            {loading && <h1 className='font-bold text-2xl m-3'>Loading...</h1>}
            <h1 className='font-bold text-2xl m-3'>Bags Count: {bagsCount}</h1>
            <div
            className='flex flex-col gap-5'>
                {
                    staffRenderedBags.map((data,index) => {
                        return <StaffBagBox key={index} id={data.id} status={data.status} name={data.name} phone={data.phone} lightTheme={props.lightTheme} />
                    })
                }
            </div>
        
            <div className='fixed bottom-0 w-full'>
                <Navbar lightTheme={props.lightTheme} setLightTheme={props.setLightTheme} allBagsData={allBagsData} setStaffRenderedBags={setStaffRenderedBags} setBagsCount={setBagsCount} />
            </div>
        </div>
    )
}

export default StaffPage