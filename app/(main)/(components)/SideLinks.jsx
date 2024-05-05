"use client";
import { Button } from "@/components/ui/button";
import { Code, Compass, Layers, Mail, ShieldEllipsis } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

const SideLinks = () => {
  const navigate = useRouter();
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(0);

  const teacherLinks = [
    {
      label: "Courses",
      icon: <Compass size={18} className="mr-2" />,
      path: "/",
    },
    {
      label: "Analytics",
      icon: <Layers size={18} className="mr-2" />,
      path: "/workshops",
    },
  ];
  const userLinks = [
    {
      label: "Browse",
      icon: <Compass size={18} className="mr-2" />,
      path: "/",
    },
    {
      label: "Workshops",
      icon: <Layers size={18} className="mr-2" />,
      path: "/workshops",
    },
    {
      label: "Problems",
      icon: <Code size={18} className="mr-2" />,
      path: "/problems",
    },
    {
      label: "Leaderboard",
      icon: <ShieldEllipsis size={18} className="mr-2" />,
      path: "/leaderboard",
    },
    {
      label: "Newsletter",
      icon: <Mail size={18} className="mr-2" />,
      path: "/newsletter",
    },
  ];

  return (
    <div className="w-full">
      {pathName === "/teacher" ? (
        <>
          {teacherLinks.map((link, i) => (
            <Link
            key={i}
              href="#"
              onClick={() => setIsActive(i)}
              variant="outline"
              className={`w-full flex items-center justify-start px-4 py-3 border-none shadow-none hover:bg-[#f1f5f9] rounded-md transition-all ${
                isActive === i ? "bg-[--activeLink] text-black" : ""
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </>
      ) : (
        <>
          {userLinks.map((link, i) => (
            <Link
            key={i}
              href="#"
              onClick={() => setIsActive(i)}
              variant="outline"
              className={`w-full flex items-center justify-start px-4 py-3 border-none shadow-none hover:bg-[#f1f5f9] rounded-md transition-all ${
                isActive === i ? "bg-[--activeLink] text-black" : ""
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default SideLinks;
