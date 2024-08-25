"use client"
import React, { useState } from 'react'
import ProviderTabs from './ProviderTabs'
import LaunchApp from './_screens/LaunchApp';
import Wallet from './_screens/Wallet';
import Transactions from './_screens/Transactions';
import Profile from './_screens/Profile';
import Machines from './_screens/Machines';

const tabs = [<LaunchApp key={1} />, <Profile key={3} />, <Wallet key={4} />, <Transactions key={6} />, <Machines key={6} />];

export default function ProviderDashboard() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='px-[5%]'>
            <h1 className='text-3xl font-bold text-white'>Dashboard</h1>
            <ProviderTabs activeIdx={activeTab} onChange={(val) => {
                setActiveTab(val);
            }} />
            {tabs[activeTab]}
        </div>
    )
}
