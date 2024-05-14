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
      <Link href="/threats">
        <Image src="/back-arrow.svg" alt="back" width={50} height={50} />
      </Link>
      <div className="flex justify-center mt-6 items-center gap-8 text-2xl">
        <Image src={device?.icon} alt={device?.name} width={70} height={70} />
        <p>{device.name}</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 justify-between my-16 text-center bg-secondary lg:px-16 p-6">
        <div className="text-lg w-full justify-between flex lg:flex-col gap-2">
          <p>IP Address</p>
          <p>192.168.100.102</p>
        </div>
        <div className="text-lg flex justify-between w-full items-center lg:flex-col gap-2">
          <p>Vul ID</p>
          <p>V-21200021</p>
        </div>
        <div className="text-lg flex justify-between w-full items-center lg:flex-col gap-2">
          <p>Status</p>
          <p className="bg-[#8f435d] w-[130px] py-1">Open</p>
        </div>
        <div className="text-lg flex justify-between w-full items-center lg:flex-col gap-2">
          <p>Benchmark Date</p>
          <p>2024-1-29</p>
        </div>
      </div>
      <div className="bg-secondary text-center lg:h-[60vh] mb-16 p-8">
        <h1 className="font-medium mb-10 text-3xl">Details</h1>
        <p className="text-lg text-start leading-[1.8]">
          {`Rule Title: Data Execution Prevention (DEP) must be configured to at least Output.
Discussion: Attackers are constantly looking for vulnerabilities in systems and applications. Data Execution Prevention
(DEP) prevents harmful code from running in protected memory locations reserved for Windows and Other programs.
Check Text: Verify the DEP configuration.
Open a command prompt (cmd.exe) or PowerShell with elevated privileges (Run as administrator).
Enter "BCDEdit [enum {current}", (If using PowerShell "(current)" must be enclosed in quotes.)
If the value for "nx" is not "Output-. this is a finding.
(The more restrictive configuration Of "AlwaysOn" would not be a finding.)
Fix Text: Configure DEP to at least Output.
Note: Suspend BitLocker before making changes to the DEP configuration.
Open a command prompt (cmd.exe) or PowerShell with elevated privileges (Run as administrator).
Enter "BCDEDIT /set {current) nx Output. (If using PowerShell "(current)" must be enclosed in quotes.)
CCI: CCI 002824: The information system implements organization defined security safeguards to protect its memory
from unauthorized code execution.
NIST SP 800-53 Revision 4 9-16`}
        </p>
      </div>
    </div>
  );
}
