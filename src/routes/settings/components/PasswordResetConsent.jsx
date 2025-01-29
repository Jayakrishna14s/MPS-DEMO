import React from "react";

const PasswordResetConsent = ({ setPasswordResetConsent }) => {
  return (
    <div className="fixed z-50 h-screen w-full flex items-center justify-center ">
      <div className="w-[30%]  bg-[#035c67aa]  p-4 rounded-lg border-2 border-[#035c67] shadow">
        <div className="flex flex-row-reverse">
          <img
            onClick={() => setPasswordResetConsent(false)}
            className="w-[25px]"
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737997142/Evernorth/wrong.svg"
          />
        </div>

        <h1 className="text-white my-4 font-semibold text-2xl p-4 w-[100%] flex justify-center">
          <span className="w-[80%]">
            Are you sure, you want to reset password?
          </span>
        </h1>

        <div className="text-white px-12 mt-2 font-semibold">Enter OTP</div>
        <input
          type="text"
          name="otp"
          placeholder="Enter OTP "
          className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />

        {/* onclick delete the dependent  */}
        <div className="flex pl-4 w-full my-6 mt-8 flex justify-center">
          <button
            onClick={() => console.log("password changed")}
            className="bg-red-500 p-2 px-4 text-white font-semibold rounded-lg hover:bg-red-200 hover:scale-110 transition duration-1000"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetConsent;
