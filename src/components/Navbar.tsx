"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React, { useEffect, useState } from "react";

export const Navbar = ({ session }: any) => {
  const navLinks = [
    { title: "Home", icon: "/home-icon.svg", path: "/" },
    { title: "Assets", icon: "/assets-icon.svg", path: "/assets" },
    { title: "Threats", icon: "/threats-icon.svg", path: "/threats" },
    { title: "Settings", icon: "/settings-icon.svg", path: "/settings" },
  ];
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={` ${
          isScrolled ? " h-[50px] py-8" : "h-[90px]"
        } max-w-[1700px] fixed top-0 text-white bg-black/75 z-[999999] hidden backdrop-blur-md transition-all duration-500 lg:flex justify-between py-4 px-6 w-full`}
      >
        <Link href="/" className="flex gap-2 items-center basis-1/3">
          <Image src="/main-logo.svg" alt="logo" width={50} height={49} />
          <p>Secure | سكيور</p>
        </Link>
        <div className="text-xs flex justify-evenly items-center basis-1/3">
          {navLinks.map((e, i) => (
            <Link
              key={i}
              href={e.path}
              className={`flex flex-col items-center gap-1 ${
                pathname === e.path ? "opacity-100" : "opacity-55"
              } `}
            >
              <Image
                src={e.icon}
                alt="nav-icon"
                width={30}
                height={30}
                className="text-white"
              />
              <p>{e.title}</p>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 basis-1/3 justify-end">
          <Image
            src="/notifications-icon.svg"
            alt="notifications"
            width={20}
            height={22}
          />
          <div
            className="relative w-[43px] h-[43px] cursor-pointer"
            onClick={() => setModal(!modal)}
          >
            <Image
              src={session.user.image}
              alt="user"
              fill
              className="absolute rounded-full"
            />
            {modal && (
              <div className="absolute mt-16  w-[200px] h-[50px] rounded-lg flex justify-center items-center bg-white/20 right-3">
                <button
                  onClick={() => signOut()}
                  className="bg-gray-600 p-1 px-4 rounded-md"
                >
                  sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={` ${
          isScrolled ? " h-[50px] py-8" : "h-[90px]"
        } fixed top-0 text-white bg-black/75 lg:hidden backdrop-blur-md z-[9999] transition-all duration-500 flex justify-between py-4 px-6 w-full`}
      >
        <Link href="/" className="flex gap-2 items-center ">
          <Image src="/main-logo.svg" alt="logo" width={50} height={49} />
          <p>Secure | سكيور</p>
        </Link>

        <div className="flex items-center gap-3 justify-end">
          <Image
            src="/notifications-icon.svg"
            alt="notifications"
            width={20}
            height={22}
          />
          <div
            className="relative w-[43px] h-[43px] "
            onClick={() => setModal(!modal)}
          >
            <Image
              src={session.user.image}
              alt="user"
              fill
              className="absolute rounded-full"
            />
            {modal && (
              <div className="absolute mt-20  w-[200px] h-[50px] rounded-lg flex justify-center items-center bg-white/20 right-1">
                <button
                  onClick={() => signOut()}
                  className="bg-gray-600 p-1 px-4 rounded-md"
                >
                  sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full  text-white bg-black/75 lg:hidden backdrop-blur-md transition-all duration-500 h-[80px] z-50 py-4">
        <div className="text-xs flex justify-evenly items-center basis-1/3">
          {navLinks.map((e, i) => (
            <Link
              key={i}
              href={e.path}
              className={`flex flex-col items-center gap-1 ${
                pathname === e.path ? "opacity-100" : "opacity-55"
              } `}
            >
              <Image
                src={e.icon}
                alt="nav-icon"
                width={30}
                height={30}
                className="text-white"
              />
              <p>{e.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
