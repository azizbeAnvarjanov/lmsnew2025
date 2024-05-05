import React from "react";

import { MoreHorizontalIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
const TableBlock = () => {
  const courses = [
    {
      title: "Course title 1",
      instructor: 'John Doe',
      price: "100",
      status: "active"
    },
    {
      title: "Course title 2",
      instructor: 'John Doe',
      price: "10",
      status: "active"
    },
    {
      title: "Course title 3",
      instructor: 'John Doe',
      price: "500",
      status: "active"
    },
    {
      title: "Course title 4",
      instructor: 'John Doe',
      price: "50",
      status: "active"
    },
    {
      title: "Course title 5",
      instructor: 'John Doe',
      price: "70",
      status: "active"
    },
    {
      title: "Course title 6",
      instructor: 'John Doe',
      price: "60",
      status: "active"
    },
    {
      title: "Course title 7",
      instructor: 'John Doe',
      price: "900",
      status: "active"
    },
    {
      title: "Course title 8",
      instructor: 'John Doe',
      price: "200",
      status: "active"
    },
  ];
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course title</TableHead>
            <TableHead className="text-center">Instructor</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* ---------------- */}
          {courses.map((corse) => (
            <TableRow className="transition all">
              <TableCell className="font-medium flex items-center space-x-4">
                <Image
                  alt="Introduction to Web Development"
                  className="rounded-md transition all"
                  height="48"
                  src="/trello.jpg"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width="48"
                />
                <Link href="/course/1" className="transition all">
                  {corse.title}
                </Link>
              </TableCell>
              <TableCell className="transition all text-center">{corse.instructor}</TableCell>
              <TableCell className="transition all text-center">${corse.price}</TableCell>
              <TableCell className="transition all text-center"> <Badge className="bg-green-500">{corse.status}</Badge></TableCell>
              <TableCell className="text-center transition all">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="transition all"
                      size="sm"
                      variant="outline"
                    >
                      <MoreHorizontalIcon className="w-4 h-4 transition all" />
                      <span className="sr-only transition all">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="transition all">
                    <DropdownMenuItem className="transition all">
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600 transition all">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableBlock;
