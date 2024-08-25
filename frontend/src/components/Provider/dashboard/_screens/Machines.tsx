"use client"
import ComputeCard from '@/components/search/cards/ComputeCard'
import { SpecsCard } from '@/constants/images/models/specscard.model'
import React, { useState } from 'react'

const data:SpecsCard[] = [
    {cpu:"4",ram:"15",size:"512",title:"name",active:false
    },
    {cpu:"4",ram:"15",size:"512",title:"name",active:true
    },
    {cpu:"4",ram:"15",size:"512",title:"name",active:true
    },
]

export default function Machines() {
    const [sel,setSel]=useState()
  return (
    <div className='py-3'>
        <h2 className='py-2 text-xl font-bold'>My Machines</h2>
        <div className='grid grid-cols-3 gap-4'>
            {data.map((ele,idx)=><ComputeCard onChange={()=>{}} props={ele} selected={ele.active!} />)}
        </div>
    </div>
  )
}
