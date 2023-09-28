"use client";
import { Actuality, getAllActualities } from "@/utils/actualities";
import React, { useEffect } from "react";
import { ActualityCard } from "../components/ActualityCard";
import { cn } from "@/lib/utils";

const actuality = () => {
  const [actualities, setActualities] = React.useState<Actuality[]>([]);
  useEffect(() => {
    const fetchData = async () => await getAllActualities();
    fetchData().then(setActualities).catch(console.error);
  }, [actualities]);
  return (
    <div
      className={cn(
        "h-full",
        "w-full", 
        "p-5",
        "grid",
         "grid-flow-col", 
         "grid-cols-3",
          "gap-4",
      )}
    >
      {actualities?.map((actuality, key) => (
        <ActualityCard {...{ key }} {...actuality} />
      ))}
    </div>
  );
};

export default actuality;
