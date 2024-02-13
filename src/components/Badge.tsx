import { clsx } from 'clsx'
import React from 'react'

interface Props {
    children: React.ReactNode,
    animate?: boolean,
    color?: string
}

export const Badge: React.FC<Props> = ({ children, animate = true, color }) => {

    const bg = color ? `${color}` : "bg-slate-950/90"

    return (
        <div>
            {animate ? (
                <span className="relative flex overflow-hidden rounded-full p-[1px]">
                    <span
                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                    ></span>
                    <div
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl whitespace-nowrap"
                    >
                        {children}
                    </div>
                </span>
            ) : (
                <span className="relative flex overflow-hidden rounded-full p-[1px]">
                    <span
                        className="absolute inset-[-1000%]"
                    ></span>
                    <div
                        className={clsx("inline-flex h-full w-full items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl whitespace-nowrap",
                            bg
                        )}
                    >
                        {children}
                    </div>
                </span>
            )}
        </div>
    )
}
