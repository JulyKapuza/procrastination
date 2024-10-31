import styles from '@/app/sale/styles.module.scss'
import { plansData } from '@/mock/plans'
import { PlanItem } from '@/components/PlanItem/PlanItem'
import { FC, useState } from 'react'

interface PlanListProps {
    defaultPlan: number
}

export const PlanList: FC<PlanListProps> = ({ defaultPlan }) => {
    const [selectedPlan, setSelectedPlan] = useState<number>(defaultPlan)
    return (
        <ul className={styles['list-plans']}>
            {plansData.plans.map((plan) => (
                <PlanItem
                    key={plan.id}
                    defaultPlan={defaultPlan}
                    plan={plan}
                    selectedPlan={selectedPlan}
                    onClick={setSelectedPlan}
                />
            ))}
        </ul>
    )
}
