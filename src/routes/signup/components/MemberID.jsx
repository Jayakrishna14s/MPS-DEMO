import React from "react";
import { useContext, useState } from "react";
import { StepperContext } from "./StepperContext";
import { AwesomeCaptcha } from "react-awesome-captcha";

export default function MemberID({
  alertMessage,
  setAlertMessage,
  isCaptchaValid,
  setIsCaptchaValid,
}) {
  const { userData, setUserData } = useContext(StepperContext);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCaptchaValidation = (isValid) => {
    setIsCaptchaValid(isValid);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Member ID
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={userData["memberID"] || ""}
            name="memberID"
            onFocus={() => {
              setIsFocused(true);
              setAlertMessage("");
            }}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter your Member ID"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

        <div
          onFocus={() => {
            setIsFocused(true);
            setAlertMessage("");
          }}
          onBlur={() => setIsFocused(false)}
        >
          <AwesomeCaptcha
            onValidate={handleCaptchaValidation}
            className={"flex justify-between w-full font-medium"}
          />
        </div>

        {!isFocused && alertMessage != "" && (
          <p className="text-sm text-center text-[red] mt-5">{alertMessage}</p>
        )}
      </div>
    </div>
  );
}
