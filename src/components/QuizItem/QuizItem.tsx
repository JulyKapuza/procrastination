import styles from './QuizItem.module.scss'
import { FC, KeyboardEvent } from 'react'
import { CheckBox } from '@/components/ui/CheckBox/CheckBox'
import cn from 'classnames'
interface QuizItemProps {
    iconName: number
    content: string
    isMultiAnswer: boolean
    type: 'circle' | 'square'
    isSelected: boolean
    onClick: () => void
}
export const QuizItem: FC<QuizItemProps> = ({
    iconName,
    content,
    isMultiAnswer,
    type,
    isSelected,
    onClick,
}) => {
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onClick()
        }
    }
    return (
        <li
            className={cn(styles['option'], {
                [styles['option_is-selected']]: isSelected,
            })}
            onClick={onClick}
            tabIndex={0}
            onKeyDown={onKeyDown}
        >
            <div className="flex gap-2">
                <span>{String.fromCodePoint(iconName)}</span>
                <span>{content}</span>
            </div>
            {isMultiAnswer && <CheckBox type={type} isChecked={isSelected} />}
        </li>
    )
}
