import React from 'react'

interface Props {
    id: string
    className?: string,
    children: React.ReactNode
}

export const SectionContainer: React.FC<Props> = ({ id, className, children }) => {
    return (
        <section
            id={id}
            data-section={id}
            className={`section ${className} w-full mx-auto lg:w-[740px] pb-24`}
        >
            {children}
        </section>
    )
}
