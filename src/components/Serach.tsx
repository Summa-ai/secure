"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Serach() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleUpdateParams = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("query", query);
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
  return (
    <form
      onSubmit={handleUpdateParams}
      className="flex justify-between gap-3  lg:gap-6"
    >
      <div className="flex  w-[100%] bg-secondary items-center h-[60px] lg:h-[80px] gap-2 p-4  rounded-2xl lg:w-full">
        <label htmlFor="search" className="text-xl lg:block hidden">
          Asset Name :
        </label>
        <input
          type="text"
          name="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Asset Name ..."
          className="lg:h-full lg:flex-1 bg-primary px-4 placeholder:text-sm lg:placeholder:opacity-0 py-2 w-full rounded-2xl lg:py-8 lg:px-6 text-xl"
        />
      </div>
      <button
        type="submit"
        className=" h-[60px] lg:h-[80px]  lg:text-xl bg-secondary w-[100px] lg:w-[160px] rounded-2xl"
      >
        Search
      </button>
    </form>
  );
}

export default Serach;
