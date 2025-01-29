import React from "react";
import Navbar from "/src/Components-Common/Navbar";
import Filter from "/src/routes/home/components/Filter";
import Medicines from "/src/routes/home/components/Medicines";

const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar index={0} className="flex-none" />
      <div className="flex gap-2 flex-1 overflow-scroll">
        <Filter />
        <Medicines />
      </div>
    </div>
  );
};

export default Home;
