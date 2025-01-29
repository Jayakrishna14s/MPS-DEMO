import React from "react";

import Navbar from "/src/routes/forgotpassword/components/Navbar";
import UpdatePassword from "/src/routes/forgotpassword/components/UpdatePassword";
import Footer from "/src/Components-Common/Footer.jsx";

const ForgotPassword = () => {
  return (
    <div className="h-screen flex flex-col justify-between gap-24">
      <Navbar />
      <div className="flex flex-col gap-24">
        <UpdatePassword />
        <Footer />
      </div>
    </div>
  );
};

export default ForgotPassword;
