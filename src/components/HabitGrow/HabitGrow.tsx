import styles from './HabitGrow.module.scss'
import Image from 'next/image'
import { Question } from '@/common/interfaces/question'
import { FC } from 'react'

interface ElementProgress {
    id: number
    title: string
    image: string
    period: string
}

interface ProgressAction {
    id: number
    title: string
    description: string
    steps: ElementProgress[]
}

const progressAction: ProgressAction = {
    id: 1,
    title: 'Action is the most powerful antidote to procrastination',
    description: 'Your actions build habits, and habits define who you become.',
    steps: [
        {
            id: 1,
            title: 'It starts with an action',
            image: '/icons/startAction.svg',
            period: 'Day 1',
        },
        {
            id: 2,
            title: 'Then a habit',
            image: '/icons/habit.svg',
            period: 'Day 30',
        },
        {
            id: 3,
            title: 'Then it’s simply who you are',
            image: '/icons/result.svg',
            period: 'Day 90',
        },
    ],
}
interface HabitGrowProps {
    className?: string
}
export const HabitGrow: FC<HabitGrowProps> = ({ className }) => {
    return (
        <div className={className}>
            <h2 className="title">{progressAction.title}</h2>
            <p className={styles.description}>{progressAction.description}</p>
            <ul className={styles['habit-list']}>
                {progressAction.steps.map(({ title, image, period }, index) => (
                    <li key={index} className={styles['habit-list_item']}>
                        <div className={styles['habit-list_title']}>
                            {title}
                        </div>
                        <Image
                            src={image}
                            alt={title}
                            width={70}
                            height={100}
                        />
                        <p className={styles['habit-list_period']}>{period}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
