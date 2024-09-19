import React from "react";
import { CardContent } from "./ui/card";
import Image from "next/image";
import { Separator } from "./ui/separator";
import type { TimeOffLineType } from "@/types";

const TimeOffLine = ({
  image,
  alt,
  date,
  reason,
  reasonPic,
}: TimeOffLineType) => {
  return (
    <>
      <CardContent className="p-4">
        <div className="flex gap-2">
          <Image src={image} alt={alt} width={30} height={30} />
          <div className="text-sm font-medium">
            <p>{date}</p>
            {reasonPic ? (
              <div className="flex gap-2">
                <Image src="/Circle.svg" alt="circle" width={8} height={8} />
                <p>{reason}</p>
              </div>
            ) : (
              <p>{reason}</p>
            )}
          </div>
        </div>
      </CardContent>
      <Separator />
    </>
  );
};

export default TimeOffLine;
