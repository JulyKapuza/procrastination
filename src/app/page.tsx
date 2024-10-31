'use client'

import { useStore } from 'zustand'
import { QuizInfo } from '@/components/QuizInfo/QuizInfo'
import { quiz } from '@/mock/quiz'
import { appStore } from '@/stores/app'
import { Header } from '@/components/Header/Header'
import { INITIAL_STEP } from '@/common/constants'
import { Step } from '@/components/Step/Step'
import { BackButton } from '@/components/ui/BackButton/BackButton'


export default function Home() {
    const { currentStep, decrementStep } = useStore(appStore)

    return (
        <main className="h-screen bg-[#FDFCF9] px-4 py-3">
            <div className="h-full grid grid-rows-[1fr]">
                <div className="relative flex flex-col h-full max-w-[1300px] sm:mx-auto sm:min-w-[600px] md:w-[700px]">
                    {currentStep > INITIAL_STEP && (
                        <BackButton onClick={decrementStep} />
                    )}

                    <Header />

                    {currentStep === INITIAL_STEP && (
                        <QuizInfo
                            quizName={quiz.name}
                            estimation={quiz.estimation}
                        />
                    )}

                    <Step />
                </div>
            </div>
        </main>
    )
}
