"use client"
import ComputeCard from "@/components/search/cards/ComputeCard";
import DownloadDaemon from "../DownloadDaemon";
import { SpecsCard } from "@/constants/images/models/specscard.model";
import { useState } from "react";

const data:SpecsCard[] = [
    {cpu:"4",ram:"4",title:"dip",size:"512"},
    {cpu:"4",ram:"4",title:"dip",size:"512"},
    {cpu:"4",ram:"4",title:"dip",size:"512"}
]


export  default  function Deployments() {
    const [select,setSelect]=useState(0);


    return (
        <div>
             <div className="grid grid-cols-4 gap-4">
        {data.map((ele,idx)=><ComputeCard key={idx} props={ele} selected={select===idx} onChange={()=>{
            setSelect(idx);
        }} />)}
      </div>
      <DownloadDaemon   cpu={data[select].cpu} title={data[select].title} ram={data[select].ram} size={data[select].size}  />
        </div>
    )
}
