import React from "react";
import BookCard from "./BookCard";
import FilterBlock from "./FilterBlock";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { db } from "@/app/(firebase)/config";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const query = collection(db, "courses");
  const [courses, loadin, error] = useCollectionData(query);

  if (loadin) {
    return (
      <div className="p-5">
        <div className="my-5 flex gap-2">
          <Skeleton className="h-9 w-[100px]" />
          <Skeleton className="h-9 w-[100px]" />
          <Skeleton className="h-9 w-[100px]" />
          <Skeleton className="h-9 w-[100px]" />
          <Skeleton className="h-9 w-[100px]" />
          <Skeleton className="h-9 w-[100px]" />
        </div>
        <div className="grid grid-cols-4 gap-4 scroll-ms">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      {/* <FilterBlock /> */}
      <div className="grid grid-cols-4 gap-4 scroll-ms">
        {courses?.map((course) => (
          <Card key={course.id} className="border-[1px] border-[--border] shadow-none overflow-hidden rounded-lg">
            <Link href={`/course/${course.id}`}>
              <div className="w-full h-[22vh] relative">
                <Image
                  fill
                  className="object-cover"
                  src={course.banner}
                  alt="5"
                />
              </div>
            </Link>
            <CardContent className="p-4">
              <CardTitle className="font-[600]">
                <Link href={`/course/${course.id}`} className="capitalize">
                  {course.courseName}
                </Link>
                <p className="text-sm mt-2 text-gray-600 font-medium"><strong>Author:</strong> {course.author}</p>
              </CardTitle>
            </CardContent>
            <CardFooter className="px-4 flex flex-col justify-start items-start space-y-2">
              <p className="py-1 px-3 bg-[#e6f6fd] text-[12px] rounded-md text-[#075985] font-[600] flex items-center">
                {" "}
                <BookOpen size={15} className="mr-1" /> {course.chapters.length} chapters
              </p>
              <div className="flex flex-wrap gap-2">
                {
                  course?.tags?.map((tag) => (
                    <Badge key={tag.id} variant="outline" className="border-[1px] border-[--border]">{tag?.tagName}</Badge>
                  ))
                }
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
