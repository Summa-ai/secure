"use client";
import { HomeProps } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Filter({ searchParams }: HomeProps) {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const filters = [
    {
      title: "All Assets",
      query: "",
    },
    {
      title: "Locks",
      query: "locks",
    },
    {
      title: "Cameras",
      query: "camera",
    },
    {
      title: "Lights",
      query: "lights",
    },
    {
      title: "Thermostats",
      query: "thermostats",
    },
  ];
  const handleUpdateParams = (type: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("type", type);
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
 
  
  return (
    <div className="flex w-[600px]  lg:w-full  justify-between lg:justify-evenly text-center p-2 bg-secondary rounded-2xl  ">
      {filters.map((e, i) => (
        <button
        key={i}
          value={selected}
          onClick={() => {
            setSelected(e.query);
            handleUpdateParams(e.query);
          }}
          className={`lg:text-xl font-medium lg:w-[200px] py-4 px-6 lg:px-0 lg:py-4 rounded-2xl transition-all ${
            e.query === searchParams.type || (e.query === '' && Object.keys(searchParams).length ===0) ? "bg-[#11131c]" : "bg-primary "
          } `}
        >
          {e.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
