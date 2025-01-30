import React from "react";
import Navbar from "/src/Components-Common/Navbar";
import Chatbot from "/src/routes/help/components/Chatbot";

const Help = () => {
  const privilege = false;
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="">
        <Navbar index={3} privilege={privilege}/>
      </div>

      <div className="flex-1 overflow-hidden">
        <Chatbot />
      </div>
    </div>
  );
};

export default Help;
