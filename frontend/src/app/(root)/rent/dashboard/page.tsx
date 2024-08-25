"use client"
import RentDashboard from '@/components/Rent/dashboard/RentDashboard'
import { useSidebar } from '@/store/useAddress'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function page() {

    const router = useRouter()
    const { walletAddress } = useSidebar((state) => state)

    if (!walletAddress) {
        setTimeout(() => {
            new Promise((resolve, reject) => {
                resolve(toast.warning('Please connect your wallet to continue...'))
            })
        }, 800)
        router.push('/')
    }

    return (
        <div className='py-[3%]'>
            <RentDashboard />
        </div>
    )
}
