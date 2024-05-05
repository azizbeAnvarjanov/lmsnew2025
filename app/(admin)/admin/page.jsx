"use client"
import useStore from "@/app/(store)/store";
import { useRouter } from "next/navigation";
import React from "react";

const AdminPage = () => {
    const navigate = useRouter();
    const userDetails = useStore((state) => state.userDetailsInfo);
    const role = userDetails?.role;

  return (
    <div>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col">
            Admin page dashboard
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
