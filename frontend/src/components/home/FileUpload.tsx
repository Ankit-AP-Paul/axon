"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { getPresignedURL } from '@/lib/apiCalls';




export default function FileUpload() {
    const filenames:string[] = [];
    const [uploading,setUploading]=useState(false);



    async function onFileSelect(e: React.ChangeEvent<HTMLInputElement>) {

        if (!e.target.files) return

        setUploading(true)
        try {
            const file: File = e.target.files[0]
            const filename = file.name;

            const { userID, presignedURL } = await getPresignedURL(filename)

            new Promise(async (resolve, reject) => {
                await fetch(presignedURL, {
                    method: 'PUT',
                    body: file
                })

            //    (${process.env.NEXT_PUBLIC_API_URL}/get-object?userID=${userID}&filename=${filename}))
            // })
            filenames.push(filename);
        });
    }catch(err){
        console.log(err);
    }
        // catch (err) {
        //     console.error(err)
        // }
        // setUploading(false)
//   catch(err){

// }
  return (
    <div className='flex border border-white p-4 rounded-lg my-4 flex-col gap-2 max-w-[40%]'>
        <h2>Upload your files</h2>
        <form action="" className='flex flex-col gap-4'>
            <div className="flex gap-2 items-center flex-col">
                {filenames.length!==0?<div> no files uploaded</div>: <div className='flex flex-col gap-2 text-gray-500'>{filenames.map((ele,idx)=><h2 key={idx}>{idx+1} - {ele}</h2>)}</div> }
            </div>
            <div className='flex flex-col gap-2'>
                <h2>Upload requirements.txt file, training files and dataset in order.</h2>
               <div className='flex items-center gap-2'>
               <Input onChange={onFileSelect} type='file' /> <Button>Upload</Button>
               </div>
            </div>


            <Button className='bg-white text-black'>Submit</Button>
        </form>
    </div>
  )
}
    }
