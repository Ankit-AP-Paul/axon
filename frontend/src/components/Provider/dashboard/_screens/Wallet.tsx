import { Button } from "@/components/ui/button";
import { getProvider } from "@/lib/apiCalls";
import React, { useEffect, useState, useTransition } from "react";

interface Transaction {
  duration: string;
  machineType: string;
  cost: string;
}

const trans: Transaction[] = [
  {
    duration: "200mins",
    machineType: "8GB RAM, 256GB SSD, 4 core CPU",
    cost: "25tez",
  },
];

export default function Wallet() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      getProvider().then((data) => {
        if (!data) return;
        setName(data.name);
        setEmail(data.email);
      });
    });
  }, []);

  return (
    <div className="py-2">
      <div className="flex flex-col py-2">
        <h2 className="text-2xl font-bold text-white ">Revenue</h2>
        <span className="text-sm text-white">Collect your revenue here</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className=" text-left text-white">
              <th className="py-3 px-4 border-b">Duration</th>
              <th className="py-3 px-4 border-b">Machine Type</th>
              <th className="py-3 px-4 border-b">Revenue (tez)</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {trans.map((ele, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "text-white" : "text-white"}>
                <td className="py-3 px-4 border-b">{ele.duration}</td>
                <td className="py-3 px-4 border-b">{ele.machineType}</td>
                <td className="py-3 px-4 border-b">{ele.cost}</td>
                <td className="py-3 px-4 border-b">
                  <Button className="mt-2 bg-white text-black hover:bg-green-400">
                    Collect
                    {/* TODO: Add collect revenue functionality */}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
