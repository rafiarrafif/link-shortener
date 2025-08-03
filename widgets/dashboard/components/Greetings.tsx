import React from "react";

const DashboardGreetings = ({ name }: { name?: string }) => {
  return <h1 className="text-2xl mt-12">👋Hello, {name}</h1>;
};

export default DashboardGreetings;
