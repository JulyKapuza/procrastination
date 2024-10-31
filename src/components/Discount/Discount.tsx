import styles from './Discount.module.scss'
import { Timer } from '@/components/Timer/Timer'

export const Discount = () => {
    return (
        <div className={styles.discount}>
            51% discount reserved for <Timer />
        </div>
    )
}
