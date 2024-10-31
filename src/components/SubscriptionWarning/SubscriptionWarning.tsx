import styles from './SubscriptionWarning.module.scss'

export const SubscriptionWarning = () => {
    return (
        <>
            <p className={styles.note}>
                Please note, if you don&#39;t cancel before the discounted
                introductory plan ends, your subscription will automatically
                renew every month at the full price of $39.99. To cancel your
                subscription, please contact us at
            </p>
            <p className={`${styles.note} ${styles['note-email']}`}>
                support@get-chillio.app
            </p>
        </>
    )
}
