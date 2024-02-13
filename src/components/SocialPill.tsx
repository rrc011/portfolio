import React from 'react'

interface Props {
    children: React.ReactNode,
    href: string,
}

export const SocialPill: React.FC<Props> = ({ children, href }) => {
    return (
        <a
            className="social-pill"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            {children}
        </a>
    )
}
