import { FC } from 'react'
import styles from './QuizInfo.module.scss'
import { Emoji } from '@/components/ui/Emoji/Emoji'

interface QuizInfoProps {
    quizName: string
    estimation: number
    className?: string
}
export const QuizInfo: FC<QuizInfoProps> = ({ quizName, estimation }) => {
    return (
        <>
            <h2 className={styles['title-quiz']}>{quizName}</h2>
            <div className={styles.estimate}>
                <Emoji code={0x231b} size={18} />
                <p className={styles['estimate-text']}>
                    {estimation} minute quiz
                </p>
            </div>
        </>
    )
}
