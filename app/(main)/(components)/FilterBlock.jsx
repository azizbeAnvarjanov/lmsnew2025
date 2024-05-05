"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const FilterBlock = () => {
  const [isActive, setIsActive] = useState(0);
  const btnLinks = [
    {
      title: "All",
    },
    {
      title: "Next.js",
    },
    {
      title: "React.js",
    },
    {
      title: "MySQL",
    },
    {
      title: "MongoDB",
    },
    {
      title: "Prisma",
    },
    {
      title: "Tailwind",
    },
    {
      title: "Fiebase",
    },
    {
      title: "Next Auth",
    },
  ];

  return (
    <div className="flex gap-3 pb-4">
      {btnLinks.map((btn, i) => (
        <Button key={i} onClick={() => setIsActive(i)} variant="outline" className={`shadow-none hover:bg-[--activeLink] ${isActive === i ? "bg-[--activeLink]" : ""}`}>
          {btn.title}
        </Button>
      ))}
    </div>
  );
};

export default FilterBlock;
