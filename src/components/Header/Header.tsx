import { useMemo } from 'react'
import { useStore } from 'zustand'

import { appStore } from '@/stores/app'
import { Progress } from '@/components/Progress/Progress'
import { useConfig } from '@/common/hooks/useConfig'

import style from './Header.module.scss'

export const Header = () => {
    const { quiz } = useConfig()
    const { currentStep } = useStore(appStore)

    const countQuestions = useMemo(() => {
        return Object.values(quiz.questions).filter((q) => q.affectsProgress)
            .length
    }, [])

    const question = quiz.questions[currentStep]

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <span className={style.logo}>Logo</span>
            </div>

            {question && question.showProgressBar && (
                <Progress
                    className="margin-bottom-medium"
                    currentStep={currentStep}
                    steps={countQuestions}
                />
            )}
        </header>
    )
}
