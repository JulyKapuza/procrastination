import { EmailInput } from '@/components/ui/EmailInput/EmailInput'
import LockIcon from '../../../public/icons/lock.svg'
import styles from './EmailSubscribe.module.scss'
import { emailStore } from '@/stores/email'
import { useStore } from 'zustand'

export const EmailSubscribe = () => {
    const { email, onChangeEmail } = useStore(emailStore)

    return (
        <div className="max-w-[700px]">
            <h2 className="title">
                Enter your email to get your personalized plan{' '}
            </h2>
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

                <p>
                    We protect your privacy and are committed to protecting your
                    personal data. We never send spam emails, only relevant
                    information.
                </p>
            </div>
        </div>
    )
}
