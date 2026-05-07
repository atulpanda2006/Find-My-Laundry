import { useState } from "react";

import shoppingBag from "../assets/icons/shopping-bag.svg";

function Bags(props) {

  const [status, setStatus] = useState(props.status);

  return (

    <div
      className={`
        w-full
        border
        rounded-3xl

        px-3
        py-2

        mb-2

        shadow-sm

        transition-all
        duration-300

        ${props.lightTheme

          ? "bg-white text-black border-zinc-200"

          : "bg-black text-white border-zinc-800"
        }

      `}
    >



      <div className="flex items-start justify-between">



        <div>

          <div
            className={`
              text-[10px]
              sm:text-xs

              ${props.lightTheme

                ? "text-gray-400"

                : "text-zinc-500"
              }
            `}
          >
            Bag ID
          </div>

          <div className="text-xl sm:text-2xl font-bold">
            #{props.id}
          </div>

        </div>



        <select

          value={status}

          onChange={(e) => setStatus(e.target.value)}

          className={`

            px-4
            py-3

            flex 

            items-center

            justify-center

            rounded-lg

            text-xs
            sm:text-sm

            outline-none

            cursor-pointer

            transition-all
            duration-300

           ${status === "Pending"

  ? "bg-[#FEF6E1] text-black"

  : status === "Washed"

  ? "bg-[#EEF3FF] text-black"

  : status === "Collected"

  ? "bg-[#e4ddeb] text-black"

  : "bg-[#EBF5EC] text-black"
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



      <div className="flex items-center mt-3">



        <div
          className={`

            w-14
            h-14

            sm:w-16
            sm:h-16

            rounded-xl

            flex
            items-center
            justify-center

            ${status === "Pending"

              ? "bg-[#FEF6E1]"

              : status === "Washed"

              ? "bg-[#EEF3FF]"

              : status === "Collected"
              ? "bg-[#e4ddeb]"
              : "bg-[#EBF5EC]"

            }

          `}
        >

          <img
            src={shoppingBag}
            className="w-7 h-7 sm:w-8 sm:h-8"
            alt="shopping bag"
          />

        </div>



        <div className="ml-3 space-y-[2px]">

          <div className="text-base sm:text-lg font-semibold">
            {props.name}
          </div>

          <div
            className={`
              text-xs
              sm:text-sm

              ${props.lightTheme

                ? "text-gray-600"

                : "text-zinc-400"
              }
            `}
          >
            {props.phone}
          </div>

          <div
            className={`
              text-xs
              sm:text-sm

              ${props.lightTheme

                ? "text-gray-600"

                : "text-zinc-400"
              }
            `}
          >
            {props.orderId}
          </div>

        </div>

      </div>



      <div className="flex justify-end mt-2">

        <button
          className={`

            text-xs
            sm:text-sm

            cursor-pointer

            transition-all
            duration-300

            hover:scale-105

            ${props.lightTheme

              ? "text-gray-400 hover:text-red-500"

              : "text-zinc-500 hover:text-red-400"
            }

          `}
        >
          🗑 Delete
        </button>

      </div>

    </div>

  );
}

export default Bags;