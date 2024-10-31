import { FC } from 'react'
import { Answer } from '@/components/Answer/Answer'

interface MultipleAnswerProps {
    emojiCode: number
    content: string
    answerId: number
    isSelected: boolean
    onClick: (answerId: number) => void
}

export const MultipleAnswer: FC<MultipleAnswerProps> = ({
    emojiCode,
    content,
    answerId,
    isSelected,
    onClick,
}) => {
    return (
        <Answer
            emojiCode={emojiCode}
            content={content}
            answerId={answerId}
            isSelected={isSelected}
            onClick={onClick}
            isMultiAnswer={true}
            checkboxType={'square'}
        />
    )
}
