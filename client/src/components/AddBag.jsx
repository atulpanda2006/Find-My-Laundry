import { useState } from "react";

import Search from "../components/Search";
import StaffBags from "../components/StaffBagBox";
import ToggleThemeButton from "../components/ToggleThemeButton";
import NavBar from "../components/Navbar";

function AddBag(props) {

  const [showPopup, setShowPopup] = useState(false);

  const [bags, setBags] = useState([
    {
      id: "1091",
      status: "Pending",
      name: "Atul Panda",
      phone: "+91 76068 31663",
      Enrollment_id: "2501010705"
    },

    {
      id: "723",
      status: "Washed",
      name: "Ishan Chetwani",
      phone: "+91 88171 27466",
      Enrollment_id: "2501010194"
    },

    {
      id: "947",
      status: "Done",
      name: "Ayush Kumar",
      phone: "+91 95965 33065",
      Enrollment_id: "2501010177"
    }
  ]);

  const [newBag, setNewBag] = useState({
    id: "",
    status: "Pending",
    name: "",
    phone: "",
    Enrollment_id: ""
  });

  function handleAddBag() {

    if (
      !newBag.id ||
      !newBag.name ||
      !newBag.phone ||
      !newBag.Enrollment_id
    ) {
      return;
    }

    setBags([...bags, newBag]);

    setNewBag({
      id: "",
      status: "Pending",
      name: "",
      phone: "",
      Enrollment_id: ""
    });

    setShowPopup(false);
  }

  return (

    <div
      className={`
        min-h-screen

        px-4
        pt-6
        pb-24

        transition-colors
        duration-300

        ${props.lightTheme

          ? "bg-[#F8F8F8] text-black"

          : "bg-[#050505] text-zinc-200"
        }

      `}
    >

      

      <div className="flex items-center gap-3 mb-3">

        <div className="flex-1">

          <Search lightTheme={props.lightTheme} />

        </div>

        <ToggleThemeButton
          lightTheme={props.lightTheme}
          setLightTheme={props.setLightTheme}
        />

      </div>


      <div className="flex justify-end mb-4">

        <button

          onClick={() => setShowPopup(true)}

          className={`

            px-4
            py-2

            rounded-2xl

            text-sm

            transition-all
            duration-300

            hover:scale-105

            ${props.lightTheme

              ? "bg-black text-white"

              : "bg-white text-black"
            }

          `}
        >
          + New Bag
        </button>

      </div>


      <div className="space-y-4">

        {bags.map((bag) => (

          <StaffBags
            key={bag.id}

            id={bag.id}
            status={bag.status}
            name={bag.name}
            phone={bag.phone}
            Enrollment_id={bag.Enrollment_id}

            lightTheme={props.lightTheme}
          />

        ))}

      </div>


      <div className="mt-2">

        <NavBar lightTheme={props.lightTheme} />

      </div>


      {
        showPopup && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

            <div
              className={`

                w-full
                max-w-xs

                rounded-2xl

                p-4

                max-h-[90vh]
                overflow-y-auto

                transition-all
                duration-300

                ${props.lightTheme

                  ? "bg-white text-black"

                  : "bg-zinc-900 text-white"
                }

              `}
            >

       

              <div className="flex items-center justify-between mb-4">

                <div className="text-xl font-bold">
                  Add New Bag
                </div>

                <button
                  onClick={() => setShowPopup(false)}
                  className="text-lg"
                >
                  ✕
                </button>

              </div>

  

              <div className="space-y-3">



                <input
                  type="text"
                  placeholder="Bag Number"

                  value={newBag.id}

                  onChange={(e) =>
                    setNewBag({
                      ...newBag,
                      id: e.target.value
                    })
                  }

                  className={`

                    w-full

                    px-3
                    py-2

                    rounded-xl

                    outline-none

                    text-sm

                    ${props.lightTheme

                      ? "bg-gray-100"

                      : "bg-zinc-800"
                    }

                  `}
                />



                <input
                  type="text"
                  placeholder="Student Name"

                  value={newBag.name}

                  onChange={(e) =>
                    setNewBag({
                      ...newBag,
                      name: e.target.value
                    })
                  }

                  className={`

                    w-full

                    px-3
                    py-2

                    rounded-xl

                    outline-none

                    text-sm

                    ${props.lightTheme

                      ? "bg-gray-100"

                      : "bg-zinc-800"
                    }

                  `}
                />



                <input
                  type="text"
                  placeholder="Phone Number"

                  value={newBag.phone}

                  onChange={(e) =>
                    setNewBag({
                      ...newBag,
                      phone: e.target.value
                    })
                  }

                  className={`

                    w-full

                    px-3
                    py-2

                    rounded-xl

                    outline-none

                    text-sm

                    ${props.lightTheme

                      ? "bg-gray-100"

                      : "bg-zinc-800"
                    }

                  `}
                />



                <input
                  type="text"
                  placeholder="Enrollment Number"

                  value={newBag.Enrollment_id}

                  onChange={(e) =>
                    setNewBag({
                      ...newBag,
                      Enrollment_id: e.target.value
                    })
                  }

                  className={`

                    w-full

                    px-3
                    py-2

                    rounded-xl

                    outline-none

                    text-sm

                    ${props.lightTheme

                      ? "bg-gray-100"

                      : "bg-zinc-800"
                    }

                  `}
                />



                <select

                  value={newBag.status}

                  onChange={(e) =>
                    setNewBag({
                      ...newBag,
                      status: e.target.value
                    })
                  }

                  className={`

                    w-full

                    px-3
                    py-2

                    rounded-xl

                    outline-none

                    text-sm

                    ${props.lightTheme

                      ? "bg-gray-100"

                      : "bg-zinc-800"
                    }

                  `}
                >

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Washed">
                    Washed
                  </option>

                  <option value="Done">
                    Done
                  </option>

                  <option value="Collected">
                    Collected
                  </option>

                </select>

              </div>



              <div className="flex justify-end gap-2 mt-5">

                <button

                  onClick={() => setShowPopup(false)}

                  className={`

                    px-3
                    py-2

                    rounded-xl

                    text-sm

                    ${props.lightTheme

                      ? "bg-gray-200"

                      : "bg-zinc-700"
                    }

                  `}
                >
                  Cancel
                </button>

                <button

                  onClick={handleAddBag}

                  className="
                    px-3
                    py-2

                    rounded-xl

                    text-sm

                    bg-green-500
                    text-white
                  "
                >
                  Add Bag
                </button>

              </div>

            </div>

          </div>

        )
      }

    </div>

  );
}

export default AddBag;