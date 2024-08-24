"use client"
import React, { useState } from 'react'
import RentTabs from './RentTabs';
import Deployments from './screens/Deployments';
import RentTransactions from './screens/RentTransactions';
import Profile from './screens/Costs';

const tabs = [<Deployments key={1} />, <Profile key={2} />, <RentTransactions key={3} />];

export default function RentDashboard() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className='px-[5%]'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            <RentTabs activeIdx={activeTab} onChange={(val) => {
                setActiveTab(val);
            }} />
            {tabs[activeTab]}
        </div>
    )
}
