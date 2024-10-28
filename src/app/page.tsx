'use client'

import { useEffect } from 'react'
import { useStore } from 'zustand'

import { QuizInfo } from '@/components/QuizInfo/QuizInfo'
import { quiz } from '@/mock/quiz'
import { List } from '@/components/List/List'
import { HabitGrow } from '@/components/HabitGrow/HabitGrow'
import { Button } from '@/components/ui/Button/Button'
import { useRouter } from 'next/navigation'
import { EmailSubscribe } from '@/components/EmailSubscribe/EmailSubscribe'

import { answerStore, multiAnswerStore } from '@/stores/quiz'
import { sendAnswers } from '@/api/send-answer'
import { appStore } from '@/stores/app'
import { emailStore } from '@/stores/email'
import { Header } from '@/components/Header/Header'
import { INITIAL_STEP } from '@/common/constants'
import { VALIDATION } from '@/common/utils'
export default function Home() {
    const storeAnswer = useStore(answerStore)
    const storeMultiAnswer = useStore(multiAnswerStore)

    const {
        currentStep,
        isQuizFinished,
        isResultViewed,
        incrementStep,
        decrementStep,
        setIsQuizFinished,
        setIsResultViewed,
    } = useStore(appStore)

    const { email } = useStore(emailStore)
    const router = useRouter()

    // const [email, setEmail] = useState('')
    const question = quiz.questions[currentStep]

    useEffect(() => {
        if (!question) {
            setIsQuizFinished(true)
        }
        // eslint-disable-next-line
    }, [question])

    const onClickContinue = () => {
        incrementStep()
        if (isQuizFinished) setIsResultViewed(true)
        if (isResultViewed && email) router.push('/sale')
        if (email) sendAnswers(email)
    }

    const onClickBack = () => {
        decrementStep()
        if (isQuizFinished && !isResultViewed) setIsQuizFinished(false)
        if (isResultViewed) setIsResultViewed(false)
    }
    const onItemClick = (questionId: number, answerId: number) => {
        if (question && !question.isMultiAnswer) {
            onClickContinue()
        }
        if (question.isMultiAnswer) {
            storeMultiAnswer.setAnswer({ questionId, answerId })
        } else {
            storeAnswer.setAnswer({ questionId, answerId })
        }
    }

    const isMultiAnswersEmpty =
        question &&
        !Object.keys(storeMultiAnswer.answers[question.id] || {}).length

    const isEmailInvalid = isResultViewed && !VALIDATION.validateEmail(email)

    return (
        <main className="h-screen bg-[#FDFCF9] px-4 py-3">
            <div className="h-full grid grid-rows-[1fr]">
                <div className="flex flex-col h-full max-w-[1300px] sm:mx-auto">
                    <Header steps={quiz.total} onClickBack={onClickBack} />

                    {currentStep === INITIAL_STEP && (
                        <QuizInfo
                            quizName={quiz.name}
                            estimation={quiz.estimation}
                        />
                    )}

                    {question && !isQuizFinished && (
                        <List
                            question={question}
                            onItemClick={onItemClick}
                            className="margin-bottom-medium"
                        />
                    )}

                    {isQuizFinished && !isResultViewed && <HabitGrow />}

                    {isQuizFinished && isResultViewed && <EmailSubscribe />}

                    <div className="mt-auto sm:mt-4 sm:max-w-max sm:mx-auto">
                        {((question && question.isMultiAnswer) ||
                            !question) && (
                            <Button
                                className="margin-top-auto"
                                onClick={onClickContinue}
                                disabled={isMultiAnswersEmpty || isEmailInvalid}
                            >
                                Continue
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
