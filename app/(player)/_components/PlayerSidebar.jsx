"use client"
import React from "react";
import PlayerVideoItems from "./PlayerVideoItems";


const PlayerSidebar = ({ chapters, loading, setChapterIndex, chapterIndex }) => {



  return (
    <div className="fixed left-0 bg-white border-r-[1px] border-r-[--border] w-[23%] h-full">
      <div className="h-[20vh] flex justify-start items-center space-y-2 w-full border-b-[1px] border-b-[--border]">
        <div className="py-5 px-10 w-full">
          <h1 className="font-[500] text-2xl">Trello clone</h1>
          <div className="h-2 my-2 rounded-full bg-green-200 relative overflow-hidden">
            <span className="bg-green-600 h-full w-[20%] absolute left-0 top-0"></span>
          </div>
          <p>0% Completed</p>
        </div>
      </div>
      <div>
      <PlayerVideoItems setChapterIndex={setChapterIndex} chapterIndex={chapterIndex} chapters={chapters} loading={loading} />
      </div>
    </div>
  );
};

export default PlayerSidebar;
