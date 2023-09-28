"use client"
import { cn } from "@/lib/utils";
import { Actuality } from "@/utils/actualities";

const isValidDate = function(date: string | number ) {
    return !(isNaN(new Date(date).getTime()) || new Date(date).getTime() < 0);
}
export const ActualityCard = ({
  title,
  date,
  mediaCollection,
}: Actuality) => {
  return (
    <article className={cn("border border-red-300 rounded-lg min-h-[360px] w-[300px] flex justify-between flex-col")}>
      <h2 className={cn("border-b-2 border-black p-5 text-center w-full")}>{title}</h2>
      <img className="w-full h-auto" src={mediaCollection.items[0]?.url} alt={mediaCollection.items[0]?.title ?? ""} />
      <span className={cn("border-b-2 border-black text-center w-full bg-black text-white rounded-b-lg")}>
      <p>{isValidDate(date??"") ? new Date(date??"")?.toLocaleDateString() : "date pas precis"}</p>
      </span>
    </article>
  );
};
