import { useStore } from 'zustand'
import { useConfig } from '@/common/hooks/useConfig'
import { answerStore } from '@/stores/answers'
import { appStore } from '@/stores/app'
import { MultipleAnswer } from '../MultipleAnswer/MultipleAnswer'
import { StepWrapper } from '../StepWrapper/StepWrapper'

export default function MultipleAnswerList(){
    const { quiz } = useConfig()
    const { currentStep, incrementStep } = useStore(appStore)
    const { answers: storedAnswers, setAnswer } = useStore(answerStore)
    const question = quiz.questions[currentStep]

    const onAnswerClick = (answerId: number) => {
        setAnswer({
            questionId: question.id,
            answer: answerId,
            isMultipleChoice: true,
        })
    }

    return (
        question && (
            <StepWrapper
                withButton={!!question?.button}
                buttonText={question.button?.text || ''}
                onClick={incrementStep}
                disabled={!storedAnswers[question.id]}
                text={question.text}
                title={question.title}
                subtitle={question.subtitle}
            >
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
                    {question.answers &&
                        question.answers.map(({ id, emojiCode, text }) => (
                            <MultipleAnswer
                                key={id}
                                emojiCode={emojiCode}
                                content={text}
                                answerId={id}
                                isSelected={!!storedAnswers[question.id]?.[id]}
                                onClick={onAnswerClick}
                            />
                        ))}
                </div>
            </StepWrapper>
        )
    )
}
