import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const BookCard = () => {
  return (
    <Card className="border-[1px] border-[--border] shadow-none overflow-hidden rounded-lg">
      <Link href="/course/1">
        <div className="w-full h-[22vh] relative">
          <Image fill className="object-cover" src="/trello.jpg" alt="5" />
        </div>
      </Link>
      <CardContent className="p-4">
        <CardTitle className="font-[600]">
          <Link href="/course/1">Trello clone</Link>
        </CardTitle>
      </CardContent>
      <CardFooter className="px-4">
        <p className="py-1 px-3 bg-[#e6f6fd] text-[12px] rounded-md text-[#075985] font-[600] flex items-center">
          {" "}
          <BookOpen size={15} className="mr-1" /> 40 chapters
        </p>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
