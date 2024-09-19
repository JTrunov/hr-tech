import React from "react";
import { CardContent } from "./ui/card";
import Image from "next/image";
import { Separator } from "./ui/separator";
import type { TimeOffListType } from "@/types";
import TimeOffLine from "./TimeOffLine";

const TimeOffList = ({ timeOffs }: TimeOffListType) => {
  return (
    <>
      <CardContent className="text-sm font-medium text-blue inline-flex gap-1 items-center pb-3 px-3">
        <Image src="/Clock.svg" alt="Clock" width={16} height={16} />
        <h4>Upcoming Time Off</h4>
      </CardContent>
      <Separator />
      {timeOffs.map((e, i) => (
        <TimeOffLine
          image={e.image}
          alt={e.alt}
          date={e.date}
          reason={e.reason}
          reasonPic={e.reasonPic}
          key={i}
        />
      ))}
    </>
  );
};

export default TimeOffList;
