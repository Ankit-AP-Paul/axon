import { ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

type Props = {
    className?: ClassValue
    tabsArray: string[]
    activeTab: string
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export default function Tabs({
    className,
    tabsArray,
    activeTab,
    setActiveTab,
}: Props) {
    return (
        <div
            style={{
                gridTemplateColumns: Array(tabsArray.length)
                    .fill('x')
                    .map(() => '1fr')
                    .join(' '),
            }}
            className={cn('grid w-full rounded-md text-sm sm:text-base', className)}
        >
            {tabsArray.map((tab, index) => {
                const bg = activeTab === tab ? 'bg-yellow-400' : 'bg-main'

                return (
                    <button
                        key={index}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer text-text border-2 border-black dark:border-darkBorder py-2 text-center font-bold transition-colors first:rounded-ss-md last:rounded-se-md ${bg}`}
                    >
                        {tab}
                    </button>
                )
            })}
        </div>
    )
}