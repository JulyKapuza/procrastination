import { FC } from 'react'
import { QuizItem } from '@/components/QuizItem/QuizItem'
import styles from './List.module.scss'
import { useStore } from 'zustand'
import { answerStore, multiAnswerStore } from '@/stores/quiz'
import { Question } from '@/common/interfaces/question'

interface ListProps {
    question: Question
    onItemClick: (questionId: number, answerId: number) => void
    className?: string
}
export const List: FC<ListProps> = ({ onItemClick, question, className }) => {
    const {
        question: questionTitle,
        text,
        isMultiAnswer,
        answers,
        id,
    } = question
    const oneAnswerStore = useStore(answerStore)
    const multiStore = useStore(multiAnswerStore)

    return (
        <div className={className}>
            {questionTitle && <h2 className="title">{questionTitle}</h2>}
            {text && <p className={styles.description}>{text}</p>}
            <ul className={styles.answer}>
                {answers.map(({ id: answerId, emojiCode, text }) => {
                    const isSelected = isMultiAnswer
                        ? multiStore.answers[id]?.[answerId] === answerId
                        : oneAnswerStore.answers[id] === answerId

                    return (
                        <QuizItem
                            key={answerId}
                            iconName={emojiCode}
                            content={text}
                            isMultiAnswer={isMultiAnswer}
                            type={'square'}
                            isSelected={isSelected}
                            onClick={() => onItemClick(id, answerId)}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
