import { data } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function ThreatsPage() {
  const devices = [
    {
      id: 3,
      name: "Ring Device",
      icon: "/ring-icon.svg",
      type: "camera",
      slug: "ring-device",
    },
    {
      id: 4,
      name: "Yale Device",
      icon: "/yale-icon.svg",
      type: "locks",
      slug: "yale-device",
    },
  ];
  return (
    <div className='mx-4 lg:mx-0'>
      <div className="flex bg-secondary h-[80px] items-center px-4 rounded-2xl mb-4 lg:px-16">
        <p className=" lg:text-2xl basis-1/3 text-start ">Asset name</p>
        <p className=" text-center lg:text-2xl basis-1/3 ">Asset type</p>
        <p className=" text-end lg:text-2xl basis-1/3 ">Actions</p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        {devices.map((e, i) => (
          <Link
            key={i}
            href={`/threats/${e.slug}`}
            className="bg-secondary rounded-2xl flex lg:justify-between lg:px-10 pr-4 py-4 items-center"
          >
            <div className="flex w-[300px] -ml-4 lg:ml-0 lg:w-auto gap-2 lg:gap-6 scale-75 lg:scale-100 items-center lg:basis-1/3">
              <Image src={e.icon} alt={e.name} width={70} height={70} />
              <p className="lg:text-lg">{e.name}</p>
            </div>
            <div className="lg:basis-1/3 scale-75 lg:scale-100  lg:mr-0 mr-16 flex justify-center">
              <Image
                src={
                  e.type === "camera"
                    ? "/camera-icon.svg"
                    : e.type === "locks"
                    ? "/locker-icon.svg"
                    : e.type === "lights"
                    ? "/light-icon.svg"
                    : "/thermostat-icon.svg"
                }
                width={100}
                height={100}
                alt={e.type}
              />
            </div>
            <div className="lg:basis-1/3 flex scale-75 lg:scale-100 justify-end">
              <Image src="/view-icon.svg" alt="view" width={100} height={100} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}