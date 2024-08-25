"use client"
import ComputeCard from "@/components/search/cards/ComputeCard";
import { SpecsCard } from "@/constants/images/models/specscard.model";
import { useEffect, useState, useTransition } from "react";
import { getAllMachines } from "@/lib/apiCalls";
import { toast } from "sonner";


export default function Deployments() {
    const [select, setSelect] = useState(0)

    const [isPending, startTransition] = useTransition()
    const [data, setData] = useState<SpecsCard[]>([])

    useEffect(() => {
        startTransition(() => {
            getAllMachines()
                .then((data: SpecsCard[]) => {
                    if (!data.length) return
                    setData(data)
                })
                .catch(() => toast.error('Failed fetching machines'))
        })
    }, [])


    return (
        <div>
            <div className="grid grid-cols-4 gap-4 pt-4">
                {data.length === 0
                    ? <h3 className='text-white/45'>No machines available right now</h3>
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
