import React from "react";

const DeleteAccount = ({ setDeleteAccountConsent }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl text-white font-bold mb-8 underline bg-black p-2 rounded">
        Delete Account
      </h1>
      <h3 className="font-semibold text-gray-600 m-1">
        Are you sure you want to delete account?
      </h3>
      <button
        onClick={setDeleteAccountConsent}
        id="resetPassword"
        className="rounded border-2 px-4 py-2 bg-red-400 mt-1  shadow-lg hover:scale-105 transition duration-500 hover:bg-red-200"
      >
        <span>Delete Account</span>
      </button>
    </div>
  );
};

export default DeleteAccount;
