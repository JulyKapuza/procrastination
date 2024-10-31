import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import { useStore } from 'zustand'
import { appStore } from '@/stores/app'
import { useConfig } from '@/common/hooks/useConfig'
import { QuestionType } from '@/common/interfaces/question'
import { Loader } from '../ui/Loader/Loader'


const SingleAnswerList = dynamic<React.ComponentType>(
    () => import('../SingleAnswerList/SingleAnswerList'),
    {
        loading: () => <Loader />,
    }
)
const MultipleAnswerList = dynamic<React.ComponentType>(
    () => import('../MultipleAnswerList/MultipleAnswerList'),
    {
        loading: () => <Loader />,
    }
)
const InspirationStep = dynamic<React.ComponentType>(
    () => import('../InspirationStep/InspirationStep'),
    {
        loading: () => <Loader/>
    }
)
const EmailSubscription = dynamic<React.ComponentType>(
    () => import('../EmailSubscribe/EmailSubscribe'),
    {
        loading: () => <Loader />,
    }
)

const contentMap: Record<QuestionType, ReactElement> = {
    single: <SingleAnswerList />,
    multiple: <MultipleAnswerList />,
    inspiration: <InspirationStep />,
    email: <EmailSubscription />,
}

export const Step = () => {
    const { quiz } = useConfig()
    const { currentStep } = useStore(appStore)

    return contentMap[quiz.questions[currentStep]?.type]
}
