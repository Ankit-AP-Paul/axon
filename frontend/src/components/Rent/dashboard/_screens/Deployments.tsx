import { Button } from "@/components/ui/button";
import { images } from "@/constants/images/images";
import { Download } from "lucide-react";

export default function Deployments() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${images.daemon})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }} className='w-full bg-pink-300 my-4 offsetEffect generalBorder flex flex-col gap-4 items-center justify-center'>
                <Download size={30} />
                <h2 className='text-3xl font-bold'>Download the Axon daemon now!</h2>
                <span className='text-center max-w-[50%]'>
                    The Axon daemon allows your device to share your resources for the AI training. This daemon runs in background and allocates the required resources for the processes.
                </span>
                <Button className='offsetstyle flex items-center gap-2 bg-white generalBorder text-black hover:text-white '>
                    Download Daemon
                    <Download />
                </Button>
            </div>
        </div>
    )
}
