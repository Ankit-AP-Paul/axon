import { getProvider } from "@/lib/apiCalls";
import React, { useEffect, useState, useTransition } from "react";

export default function Wallet() {
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

  return (
    <div className="py-2">
      <div className="flex flex-col py-2">
        <h2 className="text-2xl font-bold text-gray-800 ">Wallet</h2>
        <span className="text-sm text-gray-700">Manage your wallet here</span>
      </div>
      <div className="generalBorder offsetEffect bg-blue-200">
        <h2>Send Tezos </h2>
        {/* TODO : add Send tezos */}
      </div>
    </div>
  );
}
