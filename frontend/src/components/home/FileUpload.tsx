"use client";
import { useState, useTransition } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getPresignedURL } from "@/lib/apiCalls";
import { Tezos, wallet } from "@/lib/wallet-config";
import { TezosOperationType } from "@airgap/beacon-sdk";

export default function FileUpload() {
  const [filenames, setFilenames] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  async function onFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    startTransition(async () => {
      if (!e.target.files) return;

      try {
        const file: File = e.target.files[0];
        const filename = file.name;

        const { userID, presignedURL } = await getPresignedURL(filename);

        await fetch(presignedURL, {
          method: "PUT",
          body: file,
        });

        setFilenames([...filenames, filename]);
      } catch (err) {
        console.log(err);
      }
    });
  }

  //
  // -------------------------------------------------Send Tezos ------------------------------------------------//
  //
  const sendTezos = async (amount: number) => {
    amount = amount * 1000000;
    const amt = amount.toString();
    const response = await wallet.sendOperations([
      {
        kind: TezosOperationType.TRANSACTION,
        amount: amt, //amount in mutez (1 tez = 1,000,000 mutez)
        destination: "tz1bgjn4fxYVsoiWxiueYF2jXog1qJjVHCaM", //destination address
      },
    ]);

    console.log(`Operation hash: ${response}`);
  };
  // -----------------------------------------------------------------------------------------------------------//

  return (
    <div className="flex border border-white p-4 rounded-lg my-4 flex-col gap-2 max-w-[40%]">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center flex-col">
          {!filenames.length ? (
            <div> No files uploaded</div>
          ) : (
            <div className="flex flex-col gap-2 text-gray-500">
              {filenames.map((ele, idx) => (
                <h2 className="text-white" key={idx}>
                  {idx + 1} - {ele}
                </h2>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h2>
            Upload requirements.txt file, training files and dataset one-by-one
          </h2>
          <div className="flex items-center gap-2">
            <Input onChange={onFileSelect} type="file" />
          </div>
        </div>

        <Button className="bg-white text-black">Submit</Button>
      </div>
    </div>
  );
}
