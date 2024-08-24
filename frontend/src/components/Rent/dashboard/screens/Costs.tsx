"use client"
import RentForm from '@/components/forms/Rent/RentForm'
import { getContractor } from '@/lib/apiCalls'
import React, { useEffect, useTransition } from 'react'
import { toast } from 'sonner'


export default function Profile() {


    return (
        <div>Profile

            <RentForm/>
        </div>
    )
}
