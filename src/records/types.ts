export type Record = {
  id: number;
  name: string;
  artist: string;
  coverUrl: string;
  type: "vinyl" | "digital";
  price: number;
  originalPrice?: number;
  isRecordOfTheMonth: boolean;
};
