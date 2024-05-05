"use client";
import React, { useState } from "react";
import {
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/app/(firebase)/config";
import PlayerSidebar from "../../_components/PlayerSidebar";
import Playernavbar from "../../_components/Playernavbar";
import PlayerVideo from "../../_components/PlayerVideo";

const Player = ({ params }) => {
  const courseId = params.id;

  const [course, loading] = useDocumentData(doc(db, "courses", courseId));
  const chapters = course?.chapters;

  const [chapterIndex, setChapterIndex] = useState(0);

  const watchVideo = course?.chapters[chapterIndex];

  return (
    <>
      <PlayerSidebar
        chapters={chapters}
        chapterIndex={chapterIndex}
        loading={loading}
        setChapterIndex={setChapterIndex}
      />
      <Playernavbar />
      <div className="pl-[23%]">
        <PlayerVideo watchVideo={watchVideo} loading={loading} />
      </div>
    </>
  );
};

export default Player;
