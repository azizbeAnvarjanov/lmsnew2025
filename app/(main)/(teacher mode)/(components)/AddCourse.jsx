"use client";
import { db } from "@/app/(firebase)/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";

const AddCourse = () => {
  const [courseName, setCourseName] = useState();
  const navigate = useRouter();
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [userInfo] = useDocumentData(doc(db, "users", user?.uid));

  const addCourse = () => {
    const courseId = courseName.replaceAll(" ", "-").toLowerCase();
    const data = {
      id: courseId,
      author: userInfo?.fullName,
      courseName,
      description: "",
      chapters: [],
      tags: [],
      free: false,
      banner: "",
    };

    setDoc(doc(db, "courses", courseId), data).then(() => {
      console.log("doc created");
      alert("Course success created");
      navigate.push(`course-details/${courseId}`);
    });
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="w-[40%] mx-auto bg-white p-10 rounded-xl space-y-4">
        <h1 className="text-3xl font-medium">Add new course</h1>
        <div>
          <Label>Course name</Label>
          <Input
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Write course name"
          />
        </div>
        <Button onClick={addCourse}>Add course</Button>
      </div>
    </div>
  );
};

export default AddCourse;
