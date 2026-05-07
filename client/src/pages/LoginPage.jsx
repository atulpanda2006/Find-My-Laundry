import { useState } from "react";
import ToggleThemeButton from '../components/ToggleThemeButton'

function LoginPage(props) {

  const [showPassword, setShowPassword] = useState(false);
  return (

    <div
      className={`
        min-h-screen
        transition-colors
        duration-300
        ${props.lightTheme ? "bg-white text-black" : "bg-black text-white"}
      `}
    >

      <div className="absolute top-8 left-8">
        <ToggleThemeButton lightTheme={props.lightTheme} setLightTheme={props.setLightTheme} />
      </div>


      <div
        className="
          flex items-center justify-center
          pt-40
          font-bold
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          px-4
        "
      >
        Login to your account
      </div>
      <br />


      <div className="mt-12  px-4">

        <div
          className={`
            flex items-center justify-center
            sm:text-2xl md:text-3xl
            w-full max-w-5xl
            h-20
            border
            rounded-full
            px-8
            mx-auto
            shadow-sm

            ${props.lightTheme
              ? "border-gray-300 bg-white"
              : "border-gray-700 bg-gray-900"
            }
          `}
        >

          <div className="flex items-center gap-3 w-full">

            <label
              htmlFor="username"
              className="whitespace-nowrap"
            >
              Username :
            </label>

            <input
              type="text"
              id="username"
              placeholder="John Doe"
              className={`
                outline-none
                bg-transparent
                w-full

                ${props.lightTheme
                  ? "placeholder:text-gray-500"
                  : "placeholder:text-gray-400"
                }
              `}
            />

          </div>


          <div className="text-2xl">
            👤
          </div>

        </div>
        <br />

        <div
          className={`
            flex items-center justify-center
            sm:text-2xl md:text-3xl
            w-full max-w-5xl
            h-20
            border
            rounded-full
            px-8
            mx-auto
            shadow-sm

            ${props.lightTheme
              ? "border-gray-300 bg-white"
              : "border-gray-700 bg-gray-900"
            }
          `}
        >

          <div className="flex items-center gap-3 w-full">

            <label
              htmlFor="password"
              className="whitespace-nowrap"
            >
              Password :
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="**********"
              className={`
                outline-none
                bg-transparent
                w-full

                ${props.lightTheme
                  ? "placeholder:text-gray-500"
                  : "placeholder:text-gray-400"
                }
              `}
            />


            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className={`
                ml-2
                transition-colors

                ${props.lightTheme
                  ? "text-gray-500 hover:text-gray-700"
                  : "text-gray-300 hover:text-white"
                }
              `}
            >

              {
                showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >

                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>

                    <circle cx="12" cy="12" r="3"></circle>

                  </svg>

                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >

                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path>

                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>

                    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path>

                    <line x1="1" y1="1" x2="23" y2="23"></line>

                  </svg>

                )
              }

            </button>

          </div>
          

        </div>

              <br />


        <button
          className={`
            flex items-center justify-center
            font-bold
            sm:text-2xl md:text-3xl
            w-full max-w-5xl
            h-20
            border
            rounded-full
            px-8
            mx-auto
            shadow-sm
            transition-colors

            ${props.lightTheme
              ? "bg-white border-gray-300 hover:bg-gray-50"
              : "bg-gray-800 border-gray-700 hover:bg-gray-700"
            }
          `}
        >
          Login
        </button>

      </div>

    </div>

  );
}

export default LoginPage;