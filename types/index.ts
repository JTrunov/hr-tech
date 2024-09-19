type TimeOffLineType = {
  image: string;
  alt: string;
  date: string;
  reason: string;
  reasonPic?: boolean;
};

type TimeOffListType = {
  timeOffs: TimeOffLineType[];
};

export type { TimeOffLineType, TimeOffListType };
