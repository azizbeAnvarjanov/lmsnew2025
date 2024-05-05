"use client";
import { Button } from "@/components/ui/button";
import { CirclePause, CirclePlay } from "lucide-react";
import React, { useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";

const PlayerVideoItems = ({
  chapters,
  loading,
  setChapterIndex,
  chapterIndex,
}) => {
  const [isActive, setIsActive] = useState(0);

  const handel = (i) => {
    setChapterIndex(i);
    setIsActive(i);
  };

  return (
    <div className="overflow-y-scroll h-[80vh] flex flex-col">
      {loading ? (
        <>
          <div className="flex flex-col py-3 space-y-2">
            <Skeleton className="h-[50px] w-[95%] mx-auto rounded-md" />
            <Skeleton className="h-[50px] w-[95%] mx-auto rounded-md" />
            <Skeleton className="h-[50px] w-[95%] mx-auto rounded-md" />
            <Skeleton className="h-[50px] w-[95%] mx-auto rounded-md" />
          </div>
        </>
      ) : (
        <>
          {chapters.map((chapter, i) => (
            <Button
              key={i}
              onClick={() => handel(i)}
              variant="outline"
              className={`rounded-none w-full flex items-center justify-start py-7 border-[1px] border-t-0 border-x-0 text-[--text] font-[400] gap-2 items-center ${
                isActive === i ? "bg-green-200 text-green-500" : ""
              }`}
            >
              {chapterIndex === i ? (
                <CirclePause size={18} />
              ) : (
                <CirclePlay size={18} />
              )}
              {}
              {chapter.chapterName}
            </Button>
          ))}
        </>
      )}
    </div>
  );
};

export default PlayerVideoItems;
