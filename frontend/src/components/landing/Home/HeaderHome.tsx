import Marquee from "@/components/common/Marquee";
import { Button } from "@/components/ui/button";
import { images } from "@/constants/images/images";
import { ChevronRightCircle, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderHome() {
  return (
    <div className="min-h-screen w-full ">
      <h1 className="text-6xl  w-[60%] p-[5%]">
       <span> GOT OR WANT RESOURCES FOR YOUR AI TRAINING?</span> <span className="font-bold"> WE SURELY GOT YOU COVERED. ✨</span>
      </h1>
      <Image src="/assets/train.svg" height={1080} width={1920} alt="image header" />
    </div>
  );
}
