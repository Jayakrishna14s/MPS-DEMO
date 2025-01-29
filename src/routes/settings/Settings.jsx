import React, { useState } from "react";
import Navbar from "/src/Components-Common/Navbar.jsx";
import ChangePassword from "/src/routes/settings/components/ChangePassword";
import DeleteAccount from "/src/routes/settings/components/DeleteAccount";
import PasswordResetConsent from "./components/PasswordResetConsent";
import DeleteAccountConsent from "./components/DeleteAccountConsent";

const Settings = () => {
  const [passwordResetConsent, setPasswordResetConsent] = useState(false);
  const [deleteAccountConsent, setDeleteAccountConsent] = useState(false);

  return (
    <div className="flex flex-col h-screen  ">
      <Navbar className="flex-none" />
      <div className="flex-1 flex justify-center my-8 overflow-scroll">
        <div className="w-[40%]  flex flex-col gap-8 ">
          <ChangePassword setPasswordResetConsent={setPasswordResetConsent} />
          <DeleteAccount setDeleteAccountConsent={setDeleteAccountConsent} />
        </div>
      </div>

      {passwordResetConsent && (
        <PasswordResetConsent
          setPasswordResetConsent={setPasswordResetConsent}
        />
      )}

      {deleteAccountConsent && (
        <DeleteAccountConsent
          setDeleteAccountConsent={setDeleteAccountConsent}
        />
      )}

      {(passwordResetConsent || deleteAccountConsent) && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"></div>
      )}
    </div>
  );
};

export default Settings;
