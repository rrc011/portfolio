import clsx from 'clsx'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
    title: string
    description: string
    date: string,
    achievements?: React.ReactNode,
    responsabilities?: React.ReactNode
    technologies?: Array<{
        name: string,
        class: string,
        iconColor?: string,
        textColor?: string,
        icon?: React.FC<{ style: React.CSSProperties }>
    }>
}

export const ExperienceItem: React.FC<Props> = ({ title, description, date, achievements, responsabilities, technologies }) => {
    const { t } = useTranslation();
    return (
        <div>
            <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
            >
            </div>
            <time
                className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80"
            >
                {date}
            </time>
            {technologies && (
                <div className='flex mt-2 flex-nowrap'>
                    <p className='text-nowrap mr-2 text-sky-800 dark:text-sky-200/80'>Technologies employed:</p>
                    <ul className="flex gap-x-2 flex-row mb-2">
                        {technologies.map((tag, idx) => (
                            <li key={`${tag.name}-${idx}`}>
                                <span
                                    className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 whitespace-nowrap`}
                                >
                                    {tag.icon && <tag.icon style={{ width: "1rem", height: "1rem", color: tag.iconColor }} />}
                                    <span className={clsx(tag.textColor)}>{tag.name}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">
                {title}
            </h3>
            <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                {description}
            </p>
            {achievements && (
                <div>
                    <h3 className='mb-2 underline'>➯ {t('ExperienceItem.Achievements')}</h3>
                    {achievements}
                </div>
            )}
            {responsabilities && (
                <div>
                    <h3 className='mb-2 underline'>➯ {t('ExperienceItem.Responsibilities')}</h3>
                    {responsabilities}
                </div>
            )}
        </div>
    )
}
