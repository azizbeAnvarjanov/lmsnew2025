"use client";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../(firebase)/config";

const Add = () => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [linkVideo, setLinkVideo] = useState();
  const [banner, setBanner] = useState();
  const [chapterName, setChapterName] = useState();
  const [chapterVideo, setChapterVideo] = useState();

  const [chapters, setChapters] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagName, settagName] = useState([]);

  const [courseData, setCoursedata] = useState({});

  const handle = () => {
    const course = {
      id: name.replaceAll(" ", "").toLowerCase(),
      name,
      desc,
      intro_video: linkVideo,
      banner,
      chapters,
      tags,
    };

    console.log(courseData);

    // setDoc(doc(db, "courses",name.replaceAll(" ", "").toLowerCase()), course);
  };

  const addChapter = () => {
    setChapters([
      ...chapters,
      {
        id: chapterName.replaceAll(" ", "").toLowerCase(),
        chapterName,
        chapterVideo,
        isComplited: false,
      },
    ]);
  };
  const addtag = () => {
    setTags([
      ...tags,
      {
        id: tagName.replaceAll(" ", "").toLowerCase(),
        tagName,
      },
    ]);
  };

  return (
    <div>
      <div>
        Add course
        <div>
          <input
            className="border-2 my-3"
            type="text"
            placeholder="course name"
            onChange={(e) =>
              setCoursedata((prev) => [...prev, { name: e.target.value }])
            }
          />
          <br />
          <input
            className="border-2 my-3"
            type="text"
            placeholder="course desc"
            onChange={(e) =>
              setCoursedata([...courseData, { desc: e.target.value }])
            }
          />
          <br />
          <input
            className="border-2 my-3"
            type="text"
            placeholder="link intro video"
            value={linkVideo}
            onChange={(e) => setLinkVideo(e.target.value)}
          />
          <br />
          <input
            className="border-2 my-3"
            type="text"
            placeholder="link banner img"
            value={banner}
            onChange={(e) => setBanner(e.target.value)}
          />
          <br />
        </div>
        <ul>
          chapters
          <input
            className="border-2 my-3"
            type="text"
            placeholder="chater name"
            value={chapterName}
            onChange={(e) => setChapterName(e.target.value)}
          />
          <input
            className="border-2 my-3"
            type="text"
            placeholder="chapter video link"
            value={chapterVideo}
            onChange={(e) => setChapterVideo(e.target.value)}
          />
          <button onClick={addChapter}>Add chapter</button>
          <br />
          {chapters.map((chapter) => (
            <div>
              <h1>{chapter.chapterName}</h1>
              <p className="ml-3">{chapter.chapterVideo}</p>
            </div>
          ))}
        </ul>
        <br />
        <br />
        <input
          type="text"
          placeholder="add tag"
          onChange={(e) => settagName(e.target.value)}
        />
        <button onClick={addtag}>add tag</button>
        {tags.map((tag) => (
          <h1>{tag.tagName}</h1>
        ))}
        <button className="border-2 p-2 mt-4" onClick={handle}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Add;
