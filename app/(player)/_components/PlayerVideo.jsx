"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
import ReactPlayer from "react-player/youtube";

const PlayerVideo = ({ watchVideo, loading }) => {
  return (
    <div className="h-[90vh] overflow-y-scroll">
      <div className="w-full h-[90vh] bg-black relative">
        {loading ? (
          <>...loading</>
        ) : (
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={watchVideo?.chapterVideo}
          />
        )}
      </div>
      <div className="p-5 space-y-6 w-[80%] mx-auto">
        <Card className="border-[1px] px-5 border-[--border] shadow-none">
          <div className="flex p-5 items-center justify-between">
            <h1 className="text-2xl font-medium">Courses Page</h1>
            <Button
              variant="complete"
              className="gap-2 items-center hover:bg-[#37ab87] transition-all"
            >
              Complete and continue <ArrowRight size={18} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlayerVideo;
