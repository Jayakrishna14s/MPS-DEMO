import React from "react";
import { useContext, useState } from "react";
import { StepperContext } from "./StepperContext";

export default function Verification({ alertMessage, setAlertMessage }) {
  const { userData, setUserData } = useContext(StepperContext);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    // setFinalData([...finalData, userData]);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <p>OTP sent to {userData["email"]}</p>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Enter OTP
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={userData["otp"] || ""}
            name="otp"
            onFocus={() => {
              setIsFocused(true);
              setAlertMessage("");
            }}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter OTP sent to email"
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
