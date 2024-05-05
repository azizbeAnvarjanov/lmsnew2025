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

import { Link2 } from "lucide-react";

const AddChapterDialog = ({ setAddChapterOpen, addChapterOpen, chapters, setChapters, chapterName, setChapterName, chapterVideo, setChapterVideo }) => {


  const addChapter = () => {
    setChapters([
      ...chapters,
      {
        id: chapterName.replaceAll(" ", "-").toLowerCase(),
        chapterName,
        chapterVideo,
        isComplited: false,
      },
    ]);
    setAddChapterOpen(false);
    setChapterName('');
    setChapterVideo('');
  };

  return (
    <div>
      <Dialog open={addChapterOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setAddChapterOpen(true)}>Add chapter</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add chapter</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label className="text-left" htmlFor="name">
                Chapter name
              </Label>
              <Input
                onChange={(e) => setChapterName(e.target.value)}
                value={chapterName}
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
                className="col-span-3"
                id="name"
                placeholder=""
                onChange={(e) => setChapterVideo(e.target.value)}
                value={chapterVideo}
              />
            </div>
          </form>
          <DialogFooter>
            <Button type="submit" onClick={addChapter}>
              Add chapter
            </Button>
            <div>
              <Button variant="outline" onClick={() => setAddChapterOpen(false)}>
                Cancel
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddChapterDialog;
