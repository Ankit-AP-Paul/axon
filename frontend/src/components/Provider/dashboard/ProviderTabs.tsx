import ChipsButton from '@/components/common/ChipsButton'
import { useState } from 'react'

interface Props {
    onChange: (tab: number) => void;
    activeIdx: number;
}
export default function ProviderTabs({ onChange, activeIdx }: Props) {
    
    const [activeIndex, setActiveIndex] = useState(activeIdx);

    return (
        <div className='flex items-center gap-4 py-2'>
            <ChipsButton content='Launch app' onClick={() => {
                onChange(0);
                setActiveIndex(0)
            }} active={activeIndex === 0 ? true : false} />

            <ChipsButton content='Profile' onClick={() => {
                onChange(1)
                setActiveIndex(1)
            }} active={activeIndex === 1 ? true : false} />
            <ChipsButton content='Wallet' onClick={() => {
                onChange(2)
                setActiveIndex(2)
            }} active={activeIndex === 2 ? true : false} />

            <ChipsButton content='Transactions' onClick={() => {
                onChange(3)
                setActiveIndex(3)
            }} active={activeIndex === 3 ? true : false} />
        </div>
    )
}
