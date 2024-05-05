import React from "react";
import AdminHeader from "./(components)/AdminHeader";
import AdminSidebar from "./(components)/AdminSidebar";

const layout = ({ children }) => {
  return (
    <div className="pl-[20%]">
      <AdminSidebar />
      <AdminHeader />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
