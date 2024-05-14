import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function  Home() {

  return (
    <div className="lg:flex mb-16 mx-14 lg:mx-0">
      <div className="lg:w-[80%]">
        <div className="flex flex-col lg:flex-row gap-6">
          <Link
            href="assets"
            className="hover:scale-105 transition-all cursor-pointer"
          >
            <Image
              src="/assets-comp.svg"
              alt="assets"
              width={280}
              height={300}
            />
          </Link>
          <Link
            href="threats"
            className="hover:scale-105 transition-all cursor-pointer"
          >
            <Image
              src="/threats-comp.svg"
              alt="threats"
              width={280}
              height={300}
            />
          </Link>
        </div>
        <div className="h-[3px] w-full lg:w-[85%] bg-white my-16 "></div>
        <div className="grid lg:grid-cols-3 grid-flow-row lg:w-[950px] gap-6">
          <Image
            src="/cves-comp.svg"
            alt="cves"
            width={280}
            height={300}
            className="hover:scale-105 transition-all cursor-pointer"
          />
          <Image
            src="/exploits-comp.svg"
            alt="exploits"
            width={280}
            height={300}
            className="hover:scale-105 transition-all cursor-pointer"
          />
          <Image
            src="/advisories-comp.svg"
            alt="advisories"
            width={280}
            height={300}
            className="hover:scale-105 transition-all cursor-pointer"
          />
          <Image
            src="/patches-comp.svg"
            alt="patches"
            width={280}
            height={300}
            className="hover:scale-105 transition-all cursor-pointer"
          />
          <Image
            src="/informations-comp.svg"
            alt="informations"
            width={280}
            height={300}
            className="hover:scale-105 transition-all cursor-pointer"
          />
          <Image
            src="/misconfig-comp.svg"
            alt="misconfig"
            width={280}
            height={300}
            className="hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      </div>
      <div className="w-[25%] invisible lg:visible  fixed mt-[120px] py-4 right-10 pr-4 overflow-y-scroll h-[calc(100%-150px)] top-0">
        <div className="relative w-[250px] mx-auto h-[300px] scale-150 mb-20">
          <Image
            src="/right-modal.svg"
            alt="modal"
            fill
            className=" absolute w-full"
          />
        </div>
        <div className="relative w-[250px]  mx-auto h-[300px] scale-150">
          <Image
            src="/right-modal1.svg"
            alt="modal"
            fill
            className=" absolute w-full"
          />
        </div>
      </div>
    </div>
  );
}
