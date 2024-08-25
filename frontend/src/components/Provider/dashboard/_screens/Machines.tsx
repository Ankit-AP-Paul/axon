"use client"
import ComputeCard from '@/components/search/cards/ComputeCard'
import { SpecsCard } from '@/constants/images/models/specscard.model'
import { getMyMachines } from '@/lib/apiCalls'
import { useEffect, useState, useTransition } from 'react'
import { toast } from 'sonner'

export default function Machines() {

  const [isPending, startTransition] = useTransition()
  const [data, setData] = useState<SpecsCard[]>([])

  useEffect(() => {
    startTransition(() => {
      getMyMachines()
        .then((data: SpecsCard[]) => {
          if (!data.length) return
          setData(data)
        })
        .catch(() => toast.error('Failed fetching machines'))
    })
  }, [])

  return (
    <div className='py-3'>
      <h2 className='py-2 text-xl font-bold'>My Machines</h2>
      <div className='grid grid-cols-3 gap-4'>
        {data.length === 0
          ? <h3 className='text-white/45'>You have provided no machines</h3>
          : data.map((ele) => (
            <ComputeCard
              key={ele.id}
              props={ele}
            />
          ))
        }
      </div>
    </div>
  )
}
