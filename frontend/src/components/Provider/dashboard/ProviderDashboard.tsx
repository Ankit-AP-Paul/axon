"use client"
import React, { useState } from 'react'
import ProviderTabs from './ProviderTabs'
import LaunchApp from './screens/LaunchApp';
import Resources from './screens/Resources';
import Status from './screens/Status';
import Wallet from './screens/Wallet';
import Earnings from './screens/Earnings';
import Transactions from './screens/Transactions';
const tabs = [<LaunchApp key={1} />, <Resources key={2} />, <Status key={3} />, <Wallet key={4} />, <Earnings key={5} />, <Transactions key={6} />];
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
