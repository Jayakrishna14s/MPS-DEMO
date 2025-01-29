import React from "react";
import { useContext, useState, useRef, useEffect } from "react";
import { StepperContext } from "./StepperContext";
import Countries from "./Countries";

export default function PersonalInformation({ alertMessage, setAlertMessage }) {
  const { userData, setUserData } = useContext(StepperContext);
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // country code
  const [countryCode, setCountryCode] = useState(userData["countryCode"] || 91);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    setUserData({ ...userData, countryCode: 91 });
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          First Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={userData["firstName"] || ""}
            name="firstName"
            placeholder="Enter your first name"
            onFocus={() => {
              setIsFocused(true);
              setAlertMessage("");
            }}
            onBlur={() => setIsFocused(false)}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Last Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={userData["lastName"] || ""}
            name="lastName"
            placeholder="Enter your Last name"
            onFocus={() => {
              setIsFocused(true);
              setAlertMessage("");
            }}
            onBlur={() => setIsFocused(false)}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Mobile Number
        </div>
        <div className="relative bg-white my-2 flex gap-4 p-1 border border-gray-200 rounded">
          <div
            onClick={toggleDropdown}
            className="w-[15%] flex-none  focus:ring-4  rounded-lg text-center flex items-center pl-2"
            type="button"
          >
            {countryCode != null && (
              // <span
              //   key="flag"
              //   className={`iconify mr-2`}
              //   data-icon={`flag:${selectedCountry.code.toLowerCase()}-4x3`}
              // ></span>
              <span>+{countryCode}</span>
            )}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              id="dropdown"
              ref={dropdownRef}
              className="absolute top-[110%] w-[100px]  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 bg-gray-100 rounded-lg w-[100%] border-2 flex flex-col h-[200px] overflow-scroll"
                aria-labelledby="dropdownDefaultButton"
              >
                {Countries.map((country) => (
                  <li
                    key={country.code}
                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={() => {
                      setCountryCode(country.phone);
                      setUserData({
                        ...userData,
                        countryCode: country.phone,
                      });
                      setIsOpen(false);
                    }}
                  >
                    <span
                      className={`iconify mr-2`}
                      data-icon={`flag:${country.code.toLowerCase()}-4x3`}
                    ></span>
                    <span>+{country.phone}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            type="tel"
            onChange={handleChange}
            value={userData["mobileNumber"] || ""}
            name="mobileNumber"
            placeholder="Enter your Mobile Number"
            onFocus={() => {
              setIsFocused(true);
              setAlertMessage("");
            }}
            onBlur={() => setIsFocused(false)}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800  "
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Email
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="email"
            onChange={handleChange}
            value={userData["email"] || ""}
            name="email"
            placeholder="Enter your Email Address"
            onFocus={() => {
              setIsFocused(true);
              setAlertMessage("");
            }}
            onBlur={() => setIsFocused(false)}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Date of Birth
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="date"
            onChange={handleChange}
            value={userData["birthDate"] || ""}
            name="birthDate"
            placeholder="Enter your Date of Birth"
            onFocus={() => {
              setIsFocused(true);
              setAlertMessage("");
            }}
            onBlur={() => setIsFocused(false)}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

        {!isFocused && alertMessage != "" && (
          <p className="text-sm text-center text-[red] mt-5">{alertMessage}</p>
        )}
      </div>
    </div>
  );
}
