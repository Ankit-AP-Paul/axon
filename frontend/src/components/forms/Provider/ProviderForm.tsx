"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {  getProvider, providerProfile } from '@/lib/apiCalls';
import React, { useEffect, useState, useTransition } from 'react'
import { toast } from 'sonner';

export default function ProviderForm() {
  const [name, setName]=useState("");
  const [email,setEmail]=useState("");
  const[isPending, startTransition]=useTransition()
  useEffect(()=>{
      startTransition(()=> {
          getProvider().then((data)=>{
                  if(!data) return
                  setName(data.name);
                  setEmail(data.email);
          })
      })
  },[])

  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
      startTransition(()=>{
          providerProfile(name, email).then((ele)=>{
              toast.success(ele);
          }).catch(()=>{
              toast.error("something went wrong");
          })
      });
  }



  return (
    <div className='py-4'>
        <h2 className='py-2 text-3xl font-semibold'>Provider form</h2>
        <form onSubmit={onSubmit} className='flex flex-col gap-2 max-w-[50%] p-4 border border-white rounded-md'>
            <div className='flex flex-col gap-1'>
                <h2>Name</h2>
                <Input value={name} onChange={(e)=>{
                        setName(e.target.value);
                }} placeholder='enter name' />
            </div>
            <div className='flex flex-col gap-1'>
                <h2>Email</h2>
                <Input onChange={(e)=>{
                    setEmail(e.target.value);
                }} value={email} placeholder='enter email' />
            </div>
            <Button disabled={isPending} className='bg-white text-black' type='submit'>Submit</Button>
        </form>
    </div>
  )
}
