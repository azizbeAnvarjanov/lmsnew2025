"use client";
import Image from "next/image";
import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { BookOpen, CirclePlay, Github, PlaySquare } from "lucide-react";
import Link from "next/link";
import StartWatchDialog from "@/app/(main)/(components)/StartWatchDialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/(firebase)/config";
import { doc } from "firebase/firestore";
import {
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { Skeleton } from "@/components/ui/skeleton";

const Course = ({ params }) => {
  const courseId = params.courseId;
  const navigate = useRouter();
  const [user] = useAuthState(auth);

  const [course, loading] = useDocumentData(doc(db, "courses", courseId));

  return (
    <div className="p-5 flex gap-5">
      <div className=" w-[60%]">
        <div className="w-full h-[60vh] relative overflow-hidden rounded-md mb-4">
          {loading ? (
            <>
              <Skeleton className="h-[100%] w-[100%] rounded-xl" />
            </>
          ) : (
            <Image fill src={course?.banner} className="object-cover" alt="" />
          )}
        </div>
        <Card className="border-[1px] border-[--border] shadow-none overflow-hidden rounded-lg">
          <CardHeader>
            {loading ? (
              <>
                <Skeleton className="h-[15px] w-[150px] rounded-xl" />
                <Skeleton className="h-[15px] w-[250px] rounded-xl" />
                <Skeleton className="h-[150px] w-[100%] rounded-xl" />
                <div className="flex gap-3">
                  <Skeleton className="h-[30px] w-[100px] rounded-md" />
                  <Skeleton className="h-[30px] w-[100px] rounded-md" />
                  <Skeleton className="h-[30px] w-[100px] rounded-md" />
                </div>
              </>
            ) : (
              <>
                <p className="py-1 px-3 bg-[#e6f6fd] text-[12px] rounded-md text-[#075985] font-[600] flex items-center w-[150px]">
                  {" "}
                  <BookOpen size={15} className="mr-1" />{" "}
                  {course?.chapters.length} chapters
                </p>
                <div>
                  <h1 className="text-2xl font-[600] my-2">
                    {course?.courseName}
                  </h1>
                  <p className="text-sm text-gray-600 my-3">
                    {course?.description}
                  </p>
                  <div className="flex gap-2">
                    {course?.tags?.map((tag) => (
                      <p
                        key={tag.id}
                        className="py-1 px-3 border-[1px] border-[--border] text-[12px] rounded-md  font-[600] flex items-center "
                      >
                        {tag?.tagName}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardHeader>
        </Card>
      </div>
      <div className="w-[40%]">
        <Card className="border-[1px] border-[--border] shadow-none overflow-hidden rounded-lg bg-gray-800 text-white">
          <CardHeader>
            {loading ? (
              <>
                <Skeleton className="h-[20px] w-[70%] bg-white rounded-md" />
                <Skeleton className="h-[20px] w-[95%] bg-white rounded-md" />
                <Skeleton className="h-[30px] w-[100%] bg-white rounded-md" />
              </>
            ) : (
              <>
                <div>
                  <h1 className="text-2xl font-[600] my-2">
                    Ready to start building?
                  </h1>
                  <p className="text-sm my-3">
                    Track your progress, watch with subtitles, change quality &
                    speed, and more.
                  </p>
                  {user ? (
                    <Button
                      onClick={() => navigate.push(`/player/${courseId}`)}
                      variant="outline"
                      className="w-full text-black"
                    >
                      <CirclePlay size={18} className="mr-2" /> Start watching
                    </Button>
                  ) : (
                    <StartWatchDialog />
                  )}
                </div>
              </>
            )}
          </CardHeader>
        </Card>
        <div className="grid grid-cols-3 gap-3 py-3">
          {loading ? (
            <>
              <Skeleton className="h-[100px] w-[100%] rounded-md" />
              <Skeleton className="h-[100px] w-[100%] rounded-md" />
              <Skeleton className="h-[100px] w-[100%] rounded-md" />
            </>
          ) : (
            <>
              <Link
                href="#"
                className="bg-white border-[1px] border-[--border] shadow-none overflow-hidden rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <Image
                  src="/github.png"
                  width={50}
                  height={50}
                  className="mb-2"
                  alt=""
                />
                <p>Source code</p>
              </Link>
              <Link
                href="#"
                className="bg-white border-[1px] border-[--border] shadow-none overflow-hidden rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <Image
                  src="/discord.png"
                  width={50}
                  height={50}
                  className="mb-2"
                  alt=""
                />
                <p>Discord</p>
              </Link>
              <Link
                href="#"
                className="bg-white border-[1px] border-[--border] shadow-none overflow-hidden rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <Image
                  src="/youtube.png"
                  width={50}
                  height={50}
                  className="mb-2"
                  alt=""
                />
                <p>YouTube</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
