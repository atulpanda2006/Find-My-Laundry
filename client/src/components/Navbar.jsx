import { useState, useEffect } from "react";
import NavBar_Cart from "../assets/icons/Cart_img";
import NavBar_Clock from "../assets/icons/Clock_img";
import NavBar_Done from "../assets/icons/Done_img";
import NavBar_Layout from "../assets/icons/Layout_img";
import NavBar_Water from "../assets/icons/Water_img";

function NavBar() {
  const [lightTheme, setLightTheme] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const navItems = [
    { name: "All", icon: <NavBar_Layout /> },
    { name: "Pending", icon: <NavBar_Clock /> },
    { name: "Washed", icon: <NavBar_Water /> },
    { name: "Done", icon: <NavBar_Done /> },
    { name: "Collected", icon: <NavBar_Cart /> },
  ];

  return (
    <div className={`min-h-screen  ${lightTheme ? "bg-gray-50" : "bg-zinc-950"}`}>
      <div className="max-w-full">
        
        
        {/* <button
          onClick={() => setLightTheme(!lightTheme)}
          className={`mb-8 px-5 py-2 rounded-xl border-2 transition-all duration-300 font-medium ${
            lightTheme 
              ? "bg-white text-black border-black hover:bg-gray-100" 
              : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
          }`}
        >
          {lightTheme ? "Switch to Dark" : "Switch to Light"}
        </button> */}

       
        <div
          className={`
            grid grid-cols-5 w-full border-2 rounded-t-4xl overflow-hidden
            sm:text-xl md:text-2xl lg:text-3xl
            transition-all duration-300
            ${lightTheme ? "bg-white border-black" : "bg-zinc-900 border-zinc-700"}
          `}
        >
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`
                flex flex-col items-center justify-center py-6 gap-2 cursor-pointer transition-all duration-300
                
               
                ${index !== navItems.length - 1 
                  ? (lightTheme ? "border-r-2 border-black" : "border-r-2 border-zinc-700") 
                  : "border-r-0"
                }
                
               
                ${activeTab === item.name
                    ? (lightTheme ? "bg-[#2e2e2c] text-white" : "bg-zinc-700 text-zinc-100")
                    : (lightTheme ? "bg-transparent text-black hover:bg-gray-100" : "bg-transparent text-zinc-400 hover:bg-zinc-800")
                }

                /* Corner rounding Ternary: To ensure active background fits the container curve */
                ${index === 0 ? "rounded-tl-[30px]" : ""}
                ${index === navItems.length - 1 ? "rounded-tr-[30px]" : ""}
              `}
            >
              <div className="scale-75 md:scale-100">{item.icon}</div>
              <span className="text-xs sm:text-sm md:text-base font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;