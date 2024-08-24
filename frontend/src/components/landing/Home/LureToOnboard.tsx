import Marquee from "@/components/common/Marquee";
import OffsetButton from "@/components/common/OffsetButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LureToOnboard() {
  return (
    <div className="">
      <Marquee
        items={["Axon", "Rent a machine today", "Find amazing use cases", ""]}
      />
      <div className="px-[5%] py-[2%]">
        <div className="p-[2%] rounded-md border border-white bg-purple-950 text-white flex flex-col items-center justify-center gap-2">
          <h2 className="text-center lg:font-3xl font-semibold">
            What are you waiting for, let&apos;s hop in
          </h2>
          <Button asChild className="text-black bg-white">
            <Link href="/onboard"> Log in / Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
