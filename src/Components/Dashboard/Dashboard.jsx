import Hero from "./Hero";
import React from "react";
import Groups from "./Groups";
const Dashboard = () => {
  return (
    <div className="flex h-fit container mx-auto mt-8 flex-col">
      <Hero />
      <Groups />
    </div>
  );
};

export default Dashboard;
