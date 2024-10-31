import styles from './Answer.module.scss'
import { FC, KeyboardEvent } from 'react'
import { CheckBox } from '@/components/ui/CheckBox/CheckBox'
import cn from 'classnames'

interface AnswerProps {
    emojiCode: number
    content: string
    isSelected: boolean
    answerId: number
    onClick: (answerId: number) => void
    isMultiAnswer?: boolean
    checkboxType?: 'circle' | 'square'
}
export const Answer: FC<AnswerProps> = ({
    emojiCode,
    content,
    answerId,
    isSelected,
    onClick,
    isMultiAnswer,
    checkboxType,
}) => {
    const onAnswerClick = () => {
        onClick(answerId)
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onAnswerClick()
        }
    }
    return (
        <div
            className={cn(styles['option'], {
                [styles['option_is-selected']]: isSelected,
            })}
            onClick={onAnswerClick}
            tabIndex={0}
            onKeyDown={onKeyDown}
        >
            <div className="flex gap-2">
                <span>{String.fromCodePoint(emojiCode)}</span>
                <span>{content}</span>
            </div>
            {isMultiAnswer && (
                <CheckBox type={checkboxType} isChecked={isSelected} />
            )}
        </div>
    )
}
