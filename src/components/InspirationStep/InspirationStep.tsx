import Image from 'next/image'
import { useStore } from 'zustand'
import { appStore } from '@/stores/app'
import { useConfig } from '@/common/hooks/useConfig'
import { StepWrapper } from '../StepWrapper/StepWrapper'

export const InspirationStep = () => {
    const { quiz } = useConfig()
    const { currentStep, incrementStep } = useStore(appStore)

    const question = quiz.questions[currentStep]

    return (
        question &&
        question.image && (
            <StepWrapper
                withButton={!!question?.button}
                buttonText={question.button?.text || ''}
                onClick={incrementStep}
                text={question.text}
                title={question.title}
                subtitle={question.subtitle}
            >
                <Image
                    src={question.image.src}
                    alt={question.image.alt}
                    width={0}
                    height={0}
                    sizes="(max-width: 358px) 100vw, 33vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </StepWrapper>
        )
    )
}
