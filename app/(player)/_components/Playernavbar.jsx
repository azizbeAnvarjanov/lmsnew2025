import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut, SkipBack } from "lucide-react";

const Playernavbar = () => {
  return (
    <div className="h-[10vh] bg-white flex items-center justify-end px-7 border-b-[1px] border-[--border]">
      <div className="flex items-center">
        <Link className="flex items-center rounded-md py-2 px-5 hover:bg-[--activeLink] mr-2 transition-all" href="/"> <LogOut size={15} className="mr-1"/> Back to courses</Link>
      </div>
    </div>
  );
};

export default Playernavbar;
