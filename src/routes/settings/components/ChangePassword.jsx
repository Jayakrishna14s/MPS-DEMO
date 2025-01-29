import React from "react";
import { AwesomeCaptcha } from "react-awesome-captcha";
import { useState } from "react";

const ChangePassword = ({ setPasswordResetConsent }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [passwordData, setPasswordData] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleCaptchaValidation = (isValid) => {
    setIsCaptchaValid(isValid);
  };

  const changepassword = () => {
    // document.getElementById("resetPassword").disabled = true;

    const password = passwordData["currentPassword"] || "";
    const newPassword = passwordData["newPassword"] || "";
    const cNewPassword = passwordData["cNewPassword"] || "";

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      setAlertMessage("Invalid current password");
      //   document.getElementById("resetPassword").disabled = false;

      return;
    }

    if (!passwordRegex.test(newPassword)) {
      setAlertMessage("Choose a strong password");
      //   document.getElementById("resetPassword").disabled = false;

      return;
    }

    if (newPassword != cNewPassword) {
      setAlertMessage("Passwords didn't match");
      //   document.getElementById("resetPassword").disabled = false;

      return;
    }

    if (password == newPassword) {
      setAlertMessage("Use a password different from current one");
      //   document.getElementById("resetPassword").disabled = false;

      return;
    }

    if (!isCaptchaValid) {
      setAlertMessage("invalid captcha");
      //   document.getElementById("resetPassword").disabled = false;

      return;
    }

    // check if currentPassword is correct
    // change password;

    // console.log(password + " " + newPassword + " " + cNewPassword);
    // console.log("Password changed");
    // setAlertMessage("PW reset requested accepted, will be updated shortly.");

    setPasswordResetConsent(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-8 underline text-white bg-black p-2 rounded">
        Change Password
      </h1>
      <div className="font-bold h-6 mt-3 pl-2 text-gray-500 text-sm leading-8 uppercase">
        {""}
        Current Password
      </div>
      <div className="bg-white my-2 flex border border-gray-200 rounded">
        <input
          type="password"
          onChange={handleChange}
          value={passwordData["currentPassword"] || ""}
          name="currentPassword"
          placeholder="Enter your Current Password"
          onFocus={() => {
            setIsFocused(true);
            setAlertMessage("");
          }}
          onBlur={() => setIsFocused(false)}
          className="p-2 px-5 pr-20 appearance-none outline-none w-full text-gray-800 rounded border-2 shadow-lg"
        />
      </div>

      <div className="font-bold h-6 mt-3 pl-2 text-gray-500 text-sm leading-8 uppercase">
        {""}
        Set Password
      </div>
      <div className="bg-white my-2  flex border border-gray-200 rounded">
        <input
          type="password"
          onChange={handleChange}
          value={passwordData["newPassword"] || ""}
          name="newPassword"
          placeholder="Enter your new password"
          onFocus={() => {
            setIsFocused(true);
            setAlertMessage("");
          }}
          onBlur={() => setIsFocused(false)}
          className="p-2 px-5 pr-20 appearance-none outline-none w-full text-gray-800 rounded border-2 shadow-lg"
        />
      </div>
      <div className="font-bold h-6 mt-3 pl-2 text-gray-500 text-sm leading-8 uppercase">
        {""}
        Confirm Password
      </div>
      <div className="bg-white my-2  flex border border-gray-200 rounded">
        <input
          type="password"
          onChange={handleChange}
          value={passwordData["cNewPassword"] || ""}
          name="cNewPassword"
          placeholder="Repeat the Password"
          onFocus={() => {
            setIsFocused(true);
            setAlertMessage("");
          }}
          onBlur={() => setIsFocused(false)}
          className="p-2 px-5 pr-20 appearance-none outline-none w-full text-gray-800 rounded border-2 shadow-lg"
        />
      </div>

      <div
        onFocus={() => {
          setIsFocused(true);
          setAlertMessage("");
        }}
        onBlur={() => setIsFocused(false)}
        className=" mt-4 rounded-lg bg-gray-300 shadow-lg"
      >
        <AwesomeCaptcha
          onValidate={handleCaptchaValidation}
          className={" gap-8 font-medium px-4 "}
        />
      </div>

      <p className="pt-4 pl-2 text-red-500"> {alertMessage}</p>

      <button
        id="resetPassword"
        className="rounded border-2 px-4 py-2 bg-[#3EFFC0] mt-4 ml-1 shadow-lg hover:scale-105 transition duration-500 hover:bg-[#3EFFC099]"
      >
        <span onClick={changepassword}>Reset Password</span>
      </button>
    </div>
  );
};

export default ChangePassword;
