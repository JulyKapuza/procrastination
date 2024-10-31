import { useRouter } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { useStore } from 'zustand'

import { appStore } from '@/stores/app'
import { Button } from '@/components/ui/Button/Button'
import { useConfig } from '@/common/hooks/useConfig'
import { Routes } from '@/common/constants'
import styles from './StepWrapper.module.scss'
import { sendAnswers } from '@/api/send-answer'
import { emailStore } from '@/stores/email'

interface ListProps extends PropsWithChildren {
    onClick?: () => void
    withButton: boolean
    buttonText: string
    disabled?: boolean
    title?: string
    text?: string
    subtitle?: string
    isLastStep?: boolean
    email?: string
}

export const StepWrapper: FC<ListProps> = ({
    children,
    onClick,
    withButton,
    buttonText,
    disabled,
    title,
    text,
    subtitle,
    email,
}) => {
    const router = useRouter()

    const { quiz } = useConfig()
    const { currentStep } = useStore(appStore)
    const { email: storedEmail } = useStore(emailStore)

    const question = quiz.questions[currentStep]

    const onButtonClick = () => {
        if (onClick) {
            onClick()
        }

        if (question?.isLastStep) {
            sendAnswers(storedEmail)
            router.push(Routes.SALE)
        }
    }

    return (
        <div className="flex flex-col h-full ">
            {title && <h2 className="title">{title}</h2>}
            {text && <p className={styles.description}>{text}</p>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className="flex flex-col gap-2">{children}</div>
            {withButton && (
                <div className="py-4 mt-auto sm:mt-4 sm:mx-auto">
                    <Button
                        disabled={disabled}
                        onClick={onButtonClick}
                        className="sm:max-w-max "
                    >
                        {buttonText}
                    </Button>
                </div>
            )}
        </div>
    )
}
