import { useStore } from 'zustand'
import { emailStore } from '@/stores/email'
import { EmailInput } from '@/components/ui/EmailInput/EmailInput'
import LockIcon from '../../../public/icons/lock.svg'
import styles from './EmailSubscribe.module.scss'
import { useConfig } from '@/common/hooks/useConfig'
import { appStore } from '@/stores/app'
import { StepWrapper } from '../StepWrapper/StepWrapper'
import { VALIDATION } from '@/common/utils'

export const EmailSubscription = () => {
    const { email, onChangeEmail } = useStore(emailStore)
    const { quiz } = useConfig()
    const { currentStep, incrementStep } = useStore(appStore)

    const question = quiz.questions[currentStep]

    return (
        <StepWrapper
            withButton={!!question?.button}
            buttonText={question.button?.text || ''}
            onClick={incrementStep}
            text={question.text}
            title={question.title}
            subtitle={question.subtitle}
            disabled={!VALIDATION.validateEmail(email)}
            isLastStep={question.isLastStep}
            email={email}
        >
            {question && (
                <div className="max-w-[700px]">
                    <EmailInput
                        type="email"
                        placeholder="Your email"
                        email={email}
                        onChange={(e) => onChangeEmail(e.target.value)}
                    />
                    <div className={styles.lock}>
                        <div className={styles['lock-icon']}>
                            <LockIcon />
                        </div>

                        <p>{question.notion}</p>
                    </div>
                </div>
            )}
        </StepWrapper>
    )
}
