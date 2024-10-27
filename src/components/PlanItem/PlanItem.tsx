import cn from 'classnames'
import styles from '../PlanItem/PlanItem.module.scss'
import { CheckBox } from '@/components/ui/CheckBox/CheckBox'
import { FC } from 'react'
import { Plan } from '@/common/interfaces/plan'

interface PlanItemProps {
    plan: Plan
    defaultPlan: number
    selectedPlan: number
    onClick: (id: number) => void
}

export const PlanItem: FC<PlanItemProps> = ({
    plan,
    defaultPlan,
    selectedPlan,
    onClick,
}) => {
    const { id, name, days, price, discount } = plan

    const isSelected = id === selectedPlan
    const isDefault = id === defaultPlan

    const saleDayPrice = (price * discount) / 100

    return (
        <li
            className={cn(styles['wrap-plan'], {
                [styles['wrap-plan__active-default']]: isDefault,
                [styles['wrap-plan__active']]: isSelected,
            })}
            onClick={() => onClick(id)}
        >
            {isDefault && (
                <div
                    className={cn({
                        [styles['wrap-plan__active-title']]: isDefault,
                    })}
                >
                    Most popular
                </div>
            )}
            <div className={styles['inner-wrap']}>
                <div className={styles.period}>
                    <CheckBox type={'circle'} isChecked={isSelected} />
                    <div>
                        <p className={styles['period-title']}>{name}</p>
                        <div>
                            <span
                                className={`${styles['period-price']} ${styles['period-price__through']}`}
                            >
                                {(price * days).toFixed(2)}
                            </span>
                            <span className={styles['period-price']}>
                                ${(saleDayPrice * days).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.day}>
                    <span className={styles['day-price']}>${price}</span>

                    <div className={styles['day-inner_wrap']}>
                        <span className={styles['day-currency']}>$</span>
                        <p className={styles['day-current_price']}>
                            {saleDayPrice.toFixed(2)[0]}
                        </p>
                        <div className={styles.sale}>
                            <p className={styles['sale-price']}>
                                {saleDayPrice.toFixed(2).slice(2)}
                            </p>
                            <p className={styles['sale-per_day']}>per day</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
