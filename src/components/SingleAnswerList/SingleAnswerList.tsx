import { useConfig } from '@/common/hooks/useConfig'
import { answerStore } from '@/stores/answers'
import { appStore } from '@/stores/app'
import { useStore } from 'zustand'
import { SingleAnswer } from '../SingleAnswer/SingleAnswer'
import { StepWrapper } from '../StepWrapper/StepWrapper'

export const SingleAnswerList = () => {
    const { quiz } = useConfig()
    const { currentStep, incrementStep } = useStore(appStore)
    const { answers: storedAnswers, setAnswer } = useStore(answerStore)
    const question = quiz.questions[currentStep]

    const onAnswerClick = (answerId: number) => {
        incrementStep()
        setAnswer({
            questionId: question.id,
            answer: answerId,
            isMultipleChoice: false,
        })
    }

    return (
        question && (
            <StepWrapper
                withButton={!!question?.button}
                buttonText={question.button?.text || ''}
                text={question.text}
                title={question.title}
                subtitle={question.subtitle}
            >
                {question.answers &&
                    question.answers.map(({ id, emojiCode, text }) => (
                        <SingleAnswer
                            key={id}
                            emojiCode={emojiCode}
                            content={text}
                            answerId={id}
                            isSelected={!!storedAnswers[question.id]?.[id]}
                            onClick={onAnswerClick}
                        />
                    ))}
            </StepWrapper>
        )
    )
}
