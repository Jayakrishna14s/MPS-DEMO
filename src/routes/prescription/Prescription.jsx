import React from "react";
import Navbar from "/src/Components-Common/Navbar";
import Prescriptions from "/src/routes/prescription/components/Prescriptions";
const Prescription = () => {
  return (
    <div className="flex flex-col  h-screen">
      <Navbar index={1} className="flex-none" />
      <Prescriptions className="flex-1 overflow-scroll" />
    </div>
  );
};

export default Prescription;
