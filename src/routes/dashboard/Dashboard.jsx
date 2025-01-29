import React from "react";
import Navbar from "/src/components-Common/Navbar";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar index={2} className="flex-none" />
      {/* <Footer /> */}
      <div className="flex flex-col items-center justify-center flex-1 gap-4">
        <h1 className="text-3xl font-bold underline">Admin page</h1>
        <h3>Application Health</h3>
        <h3>Failed messages monitoring </h3>
        <h3>Profile setup messages (100%)</h3>
      </div>
    </div>
  );
};

export default Dashboard;
