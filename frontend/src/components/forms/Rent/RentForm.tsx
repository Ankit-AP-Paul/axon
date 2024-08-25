"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { contractorProfile, getContractor } from '@/lib/apiCalls'
import { useEffect, useState, useTransition } from 'react'
import { toast } from 'sonner'

export default function RentForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(() => {
            getContractor().then((data) => {
                if (!data) return
                setName(data.name)
                setEmail(data.email)
            })
        })
    }, [])


    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        startTransition(() => {
            contractorProfile(name.trim(), email.trim())
                .then((data) => toast.success(data))
                .catch(() => toast.error("something went wrong"))
        })
    }



    return (
        <div className='py-4'>
            <h2 className='py-2 text-3xl font-semibold'>Rent form</h2>
            <form onSubmit={onSubmit} className='flex flex-col gap-2 max-w-[50%] p-4 border border-white rounded-md text-black'>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-white'>Name</h2>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-white'>Email</h2>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                </div>
                <Button disabled={isPending} type="submit" className='mt-2 bg-white text-black hover:bg-yellow-400'>Submit</Button>
            </form>
        </div>
    )
}
