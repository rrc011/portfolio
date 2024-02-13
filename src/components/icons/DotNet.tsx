import React from 'react'

interface Props {
    className?: string,
}

export const DotNet: React.FC<Props> = ({ className }) => {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <style>{".cls-3{fill:#fff}"}</style>
            </defs>
            <circle cx={32} cy={32} r={32} fill="#5c2d91" />
            <path d="M9.82 9A32 32 0 1055 54.18z" opacity={0.1} fill="#fff" />
            <path
                className="cls-3"
                d="M7.4 41.25a1.35 1.35 0 01-1-.42 1.38 1.38 0 01-.41-1 1.4 1.4 0 01.41-1 1.34 1.34 0 011-.43 1.37 1.37 0 011 .43 1.39 1.39 0 01.42 1 1.37 1.37 0 01-.42 1 1.38 1.38 0 01-1 .42zM27.27 41h-2.62l-9.37-14.54a6.06 6.06 0 01-.58-1.14h-.08a18.71 18.71 0 01.1 2.5V41h-2.13V22.77h2.77l9.12 14.28q.57.89.74 1.22h.05a19.29 19.29 0 01-.13-2.68V22.77h2.13zM41.69 41H32V22.77h9.24v1.93h-7.06v6.06h6.58v1.92h-6.58V39h7.52zM56 24.7h-5.3V41h-2.13V24.7h-5.24v-1.93H56z"
            />
        </svg>
    )
}
