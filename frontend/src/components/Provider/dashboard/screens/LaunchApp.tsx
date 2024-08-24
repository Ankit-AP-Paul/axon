import { Button } from "@/components/ui/button";
import { images } from "@/constants/images/images";
import { Download, LucideRocket, RulerIcon } from "lucide-react";
import React from "react";

export default function LaunchApp() {
  return (
    <div className="py-2">
      <div className="flex flex-col py-2 text-white">
        <h2 className="text-2xl font-bold  ">Launch App</h2>
        <span className="text-sm ">
          You need to keep the daemon running in background to keep sharing your
          resources, killing the daemon, is a violation of our terms of use. You
          must let the daemon run until your time slot is there.
        </span>
      </div>


      <div
        style={{
          backgroundImage: `url(${images.daemon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90%",
        }}
        className="w-full bg-yellow-300 my-4 offsetEffect generalBorder flex flex-col gap-4 items-center justify-center text-black">
        <Download size={30} />
        <h2 className="text-3xl font-bold">Download the Axon daemon now!</h2>
        <span className="text-center max-w-[50%]">
          The Axon daemon allows your device to share your resources for the AI
          training. This daemon runs in background and allocates the required
          resources for the processes.
        </span>
        <Button className="offsetstyle flex items-center gap-2 bg-white generalBorder text-black hover:text-white ">
          Download Daemon
          <Download />
        </Button>
      </div>
    </div>
  );
}
