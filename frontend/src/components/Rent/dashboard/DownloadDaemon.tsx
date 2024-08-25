import { Button } from '@/components/ui/button'
import { images } from '@/constants/images/images'
import { Download } from 'lucide-react'

interface Props {
    cpu: string;
    size: string;
    title: string;
    ram: string;
}

export default function DownloadDaemon({ cpu, ram, size, title }: Props) {
    return (
        <div style={{ backgroundImage: `url(${images.daemon})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }} className='w-full bg-pink-300 text-black my-4 offsetEffect generalBorder flex flex-col gap-4 items-center justify-center'>
            <Download size={30} />
            <h2 className='text-3xl font-bold'>Axon daemon will be downloaded when you submit!</h2>
            <span className='text-center max-w-[50%]'>
                The Axon daemon allows your device to share your resources for the AI training. This daemon runs in background and allocates the required resources for the processes.
            </span>

            <span
                className='offsetstyle flex items-center gap-2 bg-white generalBorder text-black'
            >
                The program will consume at most {cpu} CPUs, {ram}GB RAM & {size}GB disk
            </span>
        </div>
    )
}
