"use client";

import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/constants";

interface iDevice {
  id: number;
  name: string;
  icon: string;
  slug: string;
  type: string;
}

export default function AssetPage() {
  const { slug } = useParams();

  const device: iDevice = data.find((e) => e.slug === slug)!;

  return (
    <div className="mx-4 lg:mx-0">
      <Link href="/assets">
        <Image src="/back-arrow.svg" alt="back" width={50} height={50} />
      </Link>
      <div className="flex justify-center mt-6 items-center gap-8 text-2xl">
        <Image src={device?.icon} alt={device?.name} width={70} height={70} />
        <p>{device?.name}</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 justify-between my-16 text-center bg-secondary lg:px-16 p-6">
        <div className="text-lg flex justify-between w-full lg:flex-col gap-2">
          <p>IP Address</p>
          <p>192.168.100.102</p>
        </div>
        <div className="text-lg flex justify-between w-full items-center lg:flex-col gap-2">
          <p>Status</p>
          <p className="bg-[#438f58] w-[130px] py-1">Close</p>
        </div>
        <div className="text-lg flex justify-between w-full lg:flex-col gap-2">
          <p>Benchmark Date</p>
          <p>2024-1-28</p>
        </div>
      </div>
      <div className="bg-secondary text-center h-[60vh] mb-16 p-4 lg:p-8">
        <h1 className="font-medium mb-10 text-3xl">Details</h1>
        <p className="text-lg">
          The Ring Spotlight Cam Wired is a model of outdoor wired security
          camera that offers HD video, color night vision, two- way talk,
          motion-activated alerts, and built-in spotlights and siren. It comes
          with a hardwired kit and mount that allows you to install it anywhere
          you have a power outlet. It also has a backup battery in case of power
          outage. You can control the camera and its features from the Ring app
          on your phone or tablet2. You can also compare it with other models of
          Ring Cameras on their website3.
        </p>
      </div>
    </div>
  );
}
