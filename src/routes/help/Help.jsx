import React from "react";
import Navbar from "/src/components-Common/Navbar";
import Chatbot from "/src/routes/help/components/Chatbot";

const Help = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="">
        <Navbar index={3} />
      </div>

      <div className="flex-1 overflow-hidden">
        <Chatbot />
      </div>
    </div>
  );
};

export default Help;
