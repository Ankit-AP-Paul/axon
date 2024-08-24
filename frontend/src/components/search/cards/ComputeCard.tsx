import { Button } from '@/components/ui/button';
import { SpecsCard } from '@/constants/images/models/specscard.model'
import { Rocket } from 'lucide-react';
import React from 'react'

interface Props {
    props: SpecsCard;
}
export default function ComputeCard({ props }: Props) {
    return (
        <div className='offsetstyle p-4 border  gap-2 border-black rounded-md bg-green-300'>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex flex-col '>
                    <span className='text-xs text-gray-600'>Device name</span>
                    <h1 className='text-xl font-medium'>{props.name}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available CPU</span>
                    <h1 className='text-xl font-medium'>{props.cpu}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available GPU</span>
                    <h1 className='text-xl font-medium'>{props.gpu}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available space</span>
                    <h1 className='text-xl font-medium'>{props.space}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Instances</span>
                    <h1 className='text-xl font-medium'>{props.activity}</h1>
                </div>
            </div>
            <div className='pt-2'>
                <Button className='generalBorder flex items-center gap-2 offsetstyle w-full'>Launch <Rocket size={15} /></Button>
            </div>
        </div>
    )
}
