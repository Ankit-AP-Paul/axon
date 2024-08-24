"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function OnboardTabs() {
    const [activeTab, setActiveTab] = useState('Login')
    return (
        <div className='md:w-[60%]'>
            <div className='py-4 flex gap-4'>
                <Button className={twMerge(activeTab === "Login" ? "bg-yellow-400" : "bg-gray-300", "offsetstyle text-black hover:text-white generalBorder")} onClick={() => {
                    setActiveTab("Login")
                }}>Login</Button>
                <Button className={twMerge(activeTab === "Register" ? "bg-yellow-400" : "bg-gray-300", "offsetstyle text-black hover:text-white generalBorder")} onClick={() => {
                    setActiveTab("Register")
                }}>Register</Button>
            </div>
            <div>
                {activeTab === "Login" ?
                    <div>
                        <h2 className='font-bold text-3xl'>Login back to your TAppIN account.</h2>
                        <span>use your registered email and password to login</span>
                        <form action="" className='py-6 flex flex-col gap-3 lg:w-[50%]'>
                            <div>
                                <span className='text-xs'>Enter your email</span>
                                <Input type='email' placeholder='alandoe@email.com' className='offsetEffect generalBorder ' />
                            </div>
                            <div>
                                <span className='text-xs'>Enter your password</span>
                                <Input type='password' placeholder='******' className='offsetEffect generalBorder' />
                            </div>
                            <span className='text-xs'>
                                by logging in you agree to our <u>terms and conditions</u>
                            </span>
                            <Button className='bg-green-400 text-black hover:text-white offsetstyle generalBorder'>Login</Button>
                        </form>
                    </div>
                    : <div>
                        <h2 className='font-bold text-3xl'>Register a new TAppIN account</h2>
                        <span>create a new account, enter the details below</span>
                        <form action="" className='py-6 flex flex-col gap-3 lg:w-[50%]'>
                            <div>
                                <span className='text-xs'>Enter your email</span>
                                <Input type='email' placeholder='alandoe@email.com' className='offsetEffect generalBorder ' />
                            </div>
                            <div>
                                <span className='text-xs'>Enter a username</span>
                                <Input type='text' placeholder='alandoe123' className='offsetEffect generalBorder ' />
                            </div>
                            <div>
                                <span className='text-xs'>Create your password</span>
                                <Input type='password' placeholder='******' className='offsetEffect generalBorder' />
                            </div>
                            <div>
                                <span className='text-xs'>Re type your password</span>
                                <Input type='password' placeholder='******' className='offsetEffect generalBorder' />
                            </div>
                            <span className='text-xs'>
                                by creating a new account  you agree to our <u>terms and conditions</u>
                            </span>
                            <Button className='bg-orange-400 text-black hover:text-white offsetstyle generalBorder'>Register</Button>
                        </form>
                    </div>}
            </div>
        </div>
    )
}
