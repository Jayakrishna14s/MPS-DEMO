import React, { useState, useEffect } from "react";

const Navbar = ({ index, privilege = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // for profile, settings, FAQs, Logout, plans

  const toggleComponent = () => {
    setIsOpen(!isOpen); // Toggle the visibility of the component
  };

  const cartItems = 14;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      {!privilege ? (
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-105">
          <img
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735488122/Evernorth/evernorth.svg"
            className="h-8"
          />
        </a>
      </div>
      ) : (
      
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-105">
          <img
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735488122/Evernorth/evernorth.svg"
            className="h-8"
          />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex w-[100px] justify-between items-center ">
            <button
              type="button"
              onClick={() => (window.location.href = "/cart")}
              className={`${
                index === 4 && "border-b-2 border-b-[#035c67]"
              } relative`}
            >
              {cartItems != 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
              <img
                src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737710965/Evernorth/cart.svg"
                className="w-[35px] "
              />
            </button>

            <button
              type="button"
              // onClick={() => (window.location.href = "/profile")}
              className={`w-[35px] h-[35px] ${
                index === 5 && "border-2 border-[#035c67] rounded-full"
                //  bg-gradient-to-r from-[#035c67] via-purple-500 to-transparent"
              }`}
            >
              <img
                onClick={toggleComponent}
                src="https://res.cloudinary.com/dkezdazmt/image/upload/Evernorth/evernorth_logo"
                className="w-[100%] rounded-full"
              />

              {isOpen && (
                <div className="relative top-[10px] right-[150px] w-[150px] bg-[#035c6788]  text-white shadow-lg rounded-lg z-50 ">
                  <button className="text-white p-2 rounded-lg   w-full flex flex-row-reverse">
                    <img
                      src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737997142/Evernorth/wrong.svg"
                      className="w-[20px] hover:scale-125 transition duration-1000"
                      onClick={toggleComponent}
                    />
                  </button>
                  <ul className="flex flex-col p-2 gap-2">
                    <li
                      className="hover:bg-[#035c67] hover:rounded-lg font-semibold p-1"
                      onClick={() => (window.location.href = "/profile")}
                    >
                      Profile
                    </li>
                    <li
                      className="hover:bg-[#035c67] hover:rounded-lg font-semibold p-1"
                      onClick={() => (window.location.href = "/settings")}
                    >
                      Settings
                    </li>
                    {/* <li
                      className="hover:bg-[#035c67] hover:rounded-lg font-semibold p-1"
                      onClick={() => (window.location.href = "/plans")}
                    >
                      Plans
                    </li> */}
                    <li className="hover:bg-[#035c67] hover:rounded-lg font-semibold p-1">
                      Logout
                    </li>
                  </ul>
                </div>
              )}

              {isOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="text-[#035c67] flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/home"
                className={`
                  ${
                    index === 0 &&
                    "md:border-b-2 border-b-[#035c67] bg-[#035c67] md:bg-transparent text-white md:text-[#035c67] rounded md:rounded-none"
                  }
                   cursor-pointer block py-2 px-3 md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:hover:scale-105 md:dark:hover:scale-105 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                `}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/prescription"
                className={`
                  ${
                    index === 1 &&
                    "md:border-b-2 border-b-[#035c67] bg-[#035c67] md:bg-transparent text-white md:text-[#035c67]"
                  }
                   cursor-pointer block py-2 px-3 md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:hover:scale-105 md:dark:hover:scale-105 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                `}
                // className="cursor-pointer block py-2 px-3 md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:hover:scale-105 md:dark:hover:scale-105 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Prescription
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className={`
                  ${
                    index === 2 &&
                    "md:border-b-2 border-b-[#035c67] bg-[#035c67] md:bg-transparent text-white md:text-[#035c67]"
                  }
                   cursor-pointer block py-2 px-3 md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:hover:scale-105 md:dark:hover:scale-105 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                `}
                // className="cursor-pointer block py-2 px-3 md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:hover:scale-105 md:dark:hover:scale-105 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="/help"
                className={`
                  ${
                    index === 3 &&
                    "md:border-b-2 border-b-[#035c67] bg-[#035c67] md:bg-transparent text-white md:text-[#035c67]"
                  }
                   cursor-pointer block py-2 px-3 md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:hover:scale-105 md:dark:hover:scale-105 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                `}
                // className="cursor-pointer block py-2 px-3 md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:scale-105 md:dark:hover:scale-105 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
      )}
    </nav>
  );
};

export default Navbar;
