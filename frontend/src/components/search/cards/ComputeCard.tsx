import { SpecsCard } from '@/constants/images/models/specscard.model'
import { calculateCost } from '@/lib/cost-calculation';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    props: SpecsCard;
    selected?: boolean;
    onChange?: () => void
}
export default function ComputeCard({ props, selected, onChange }: Props) {
    return (
        <div
            onClick={onChange}
            className={twMerge("p-4 border gap-2 rounded-md cursor-pointer", props.in_use ? "bg-slate-50 text-black" : "bg-green-500 text-black")}
        >
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex flex-col '>
                    <span className='text-xs text-gray-600'>Device name</span>
                    <h1 className='text-xl font-medium'>{props.title}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available CPU</span>
                    <h1 className='text-xl font-medium'>{props.cpu}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available RAM</span>
                    <h1 className='text-xl font-medium'>{props.ram}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available space</span>
                    <h1 className='text-xl font-medium'>{props.size}</h1>
                </div>
                <span>
                    Estimated cost {calculateCost({ cpu: props.cpu, ram: props.ram })}
                </span>
            </div>
        </div>
    )
}
