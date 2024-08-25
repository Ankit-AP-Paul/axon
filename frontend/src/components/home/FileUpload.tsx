import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function FileUpload() {
  return (
    <div className='flex border border-white p-4 rounded-lg my-4 flex-col gap-2 max-w-[40%]'>
        <h2>Upload your files</h2>
        <form action="" className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <h2>Upload requirements.txt file</h2>
                <Input type='file' />
            </div>

            <div className='flex flex-col gap-2'>
                <h2>Upload your training files</h2>
                <Input type="file"/>
            </div>

            <div className='flex flex-col gap-2'>
                <h2>Upload your file here</h2>
                <Input type='file' />
            </div>
            <Button className='bg-white text-black'>Submit</Button>
        </form>
    </div>
  )
}
