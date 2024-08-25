"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { images } from "@/constants/images/images";
import { SelectTrigger } from "@radix-ui/react-select";
import { Download, LucideRocket, RulerIcon } from "lucide-react";
import React from "react";


const cpuValues = ["2","4","8","16","32","64"];
const ramValues = ["4","8","16","32","64"];
const sizeValues = ["128","256","512","1024","2048"];


export default function LaunchApp() {
  return (
    <div className="py-2">
      <form action="">
        <div className="py-4 flex flex-col gap-2">
          <h2 className="text-xl">Available CPU</h2>
          <div>
          <Select>
  <SelectTrigger className="w-[180px] border border-white p-2 rounded-md text-white">
    <SelectValue placeholder="select CPU"/>
  </SelectTrigger>
  <SelectContent>
  {cpuValues.map((ele,ix)=> <SelectItem key={ix} value={ele}>{ele} GB</SelectItem>)}

  </SelectContent>
</Select>
          </div>

        </div>

        <div className="py-4 flex flex-col gap-2">
          <h2 className="text-xl">Available storage</h2>
          <div>
          <Select>
  <SelectTrigger className="w-[180px] border border-white p-2 rounded-md text-white">
    <SelectValue placeholder="Select Storage"/>
  </SelectTrigger>
  <SelectContent>
  {sizeValues.map((ele,ix)=> <SelectItem key={ix} value={ele}>{ele} GB</SelectItem>)}

  </SelectContent>
</Select>

          </div>

        </div>

        <div className="py-4 flex flex-col gap-2">
          <h2 className="text-xl">Available RAM</h2>
          <div>
          <Select>
  <SelectTrigger className="w-[180px] border border-white p-2 rounded-md text-white">
    <SelectValue placeholder="Select RAM"/>
  </SelectTrigger>
  <SelectContent>
  {ramValues.map((ele,ix)=> <SelectItem key={ix} value={ele}>{ele} GB</SelectItem>)}

  </SelectContent>
</Select>


      <div className="flex flex-col gap-1 py-4 w-[40%]">
        <span>a unique name for your device</span>
        <Input placeholder="a uniquename"  />


    </div>

    <Button className="bg-white text-black">Submit</Button>
          </div>

        </div>
      </form>
    </div>
  );
}
