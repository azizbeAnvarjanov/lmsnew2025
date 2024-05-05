"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Link2, Pencil } from "lucide-react";

const EditChapterDialog = ({
  thisChapter,
  chapterEditName,
  chapterEditVideo,
  setChapterEditName,
  setChapterEditVideo,
}) => {
  console.log(thisChapter);



  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-start border-none"
          >
            <Pencil className="text-[--text]" size={18} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit chapter</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label className="text-left" htmlFor="name">
                Chapter name
              </Label>
              <Input
                value={chapterEditName}
                onChange={(e) => setChapterEditName(e.target.value)}
                className="col-span-3"
                id="name"
                placeholder=""
              />
            </div>
            <div className="grid items-center gap-4">
              <Label
                className="text-left flex items-center gap-2"
                htmlFor="name"
              >
                Chapter video link <Link2 size={18} />
              </Label>
              <Input
                value={chapterEditVideo}
                onChange={(e) => setChapterEditVideo(e.target.value)}
                className="col-span-3"
                id="name"
                placeholder=""
              />
            </div>
          </form>
          <DialogFooter>
            <Button type="submit">Edit chapter</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditChapterDialog;
