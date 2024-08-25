"use client"
import DownloadDaemon from "@/components/Rent/dashboard/DownloadDaemon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { createMachine } from "@/lib/apiCalls";
import { SelectTrigger } from "@radix-ui/react-select";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";


const cpuValues = ["2", "4", "8", "16"];
const ramValues = ["4", "8", "16", "32"];
const sizeValues = ["128", "256"];


export default function LaunchApp() {

  const [isPending, startTransition] = useTransition()

  const [cpu, setCPU] = useState(cpuValues[0])
  const [ram, setRAM] = useState(ramValues[0])
  const [size, setSize] = useState(sizeValues[0])
  const [title, setTitle] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    startTransition(() => {
      createMachine(title, Number(cpu), Number(ram), Number(size))
        .then((data) => toast.success(data))
        .catch(() => toast.error('Failed registering a rig'))
    })
  }

  return (
    <div className="py-2">
      <form onSubmit={onSubmit}>
        <div className="py-4 flex flex-col gap-2">
          <h2 className="text-xl">Available CPU</h2>
          <div>
            <Select
              disabled={isPending}
              value={cpu}
              onValueChange={(value) => setCPU(value)}
            >
              <SelectTrigger className="w-[180px] border border-white p-2 rounded-md text-white">
                <SelectValue placeholder="select CPU" />
              </SelectTrigger>
              <SelectContent>
                {cpuValues.map((ele, idx) => <SelectItem key={idx} value={ele}>{ele} Cores</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="py-4 flex flex-col gap-2">
          <h2 className="text-xl">Available RAM</h2>
          <div>
            <Select
              disabled={isPending}
              value={ram}
              onValueChange={(value) => setRAM(value)}
            >
              <SelectTrigger className="w-[180px] border border-white p-2 rounded-md text-white">
                <SelectValue placeholder="Select RAM" />
              </SelectTrigger>
              <SelectContent>
                {ramValues.map((ele, idx) => <SelectItem key={idx} value={ele}>{ele} GB</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="py-4 flex flex-col gap-2">
          <h2 className="text-xl">Available storage</h2>
          <div>
            <Select
              disabled={isPending}
              value={size}
              onValueChange={(value) => setSize(value)}
            >
              <SelectTrigger className="w-[180px] border border-white p-2 rounded-md text-white">
                <SelectValue placeholder="Select Storage" />
              </SelectTrigger>
              <SelectContent>
                {sizeValues.map((ele, idx) => <SelectItem key={idx} value={ele}>{ele} GB</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-1 py-4 w-[40%]">
          <span>Name for your device</span>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="A catchy name maybe..." className="text-black" />
        </div>

        <Button type="submit" disabled={isPending} className="bg-white text-black hover:bg-yellow-400 hover:text-white">Submit</Button>
      </form >

      <DownloadDaemon cpu={cpu} title={title} ram={ram} size={size} />
    </div >
  );
}
