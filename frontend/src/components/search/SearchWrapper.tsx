"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ComputeCard from './cards/ComputeCard'

export default function SearchWrapper() {
    return (
        <div className='px-[5%]'>
            <div className='w-full generalBorder offsetEffect bg-yellow-300'>
                <h2 className='text-3xl font-bold'>Available compute</h2>
                <span>Here is the compute you have to access from our providers</span>
            </div>
            <div className='py-4'>
                <div className='flex items-center gap-4'>
                    <Input className='generalTabsBorder offsetEffect w-[40%]' placeholder='search for compute' /> <Button className='generalTabsBorder offsetstyle bg-orange-800'>Filter</Button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <ComputeCard props={{ activity: 4, cpu: "4/24GB", gpu: "1/15GB", id: "9iisjkjJHHH98j", name: "tappin.dip98", space: "0.003/24TB" }} />
                <ComputeCard props={{ activity: 2, cpu: "20/32GB", gpu: "2/35GB", id: "9iisjkjJHHH98j", name: "tappin.amit78", space: "0.13/64TB" }} />
            </div>
        </div>
    )
}
