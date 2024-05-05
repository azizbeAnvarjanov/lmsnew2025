import React from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="bg-[#f9fafb] h-screen w-full">
      <Navbar />
      <Sidebar />
      <div className="lg:pl-[18%]">{children}</div>
    </div>
  );
};

export default layout;
