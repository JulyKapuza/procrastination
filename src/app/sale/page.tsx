'use client'
import { useState } from 'react'
import { plansData } from '@/mock/plans'
import '../../styles/globals.scss'
import styles from './styles.module.scss'
import { Timer } from '@/components/Timer/Timer'
import { PlanItem } from '@/components/PlanItem/PlanItem'
import LockIcon from '../../../public/icons/lock.svg'
import { Button } from '@/components/ui/Button/Button'
import { useRouter } from 'next/navigation'
import { useStore } from 'zustand'
import { appStore } from '@/stores/app'
import { Header } from '@/components/Header/Header'
import { Routes } from '@/common/constants'

export default function Sale() {
    const router = useRouter()

    const { currentStep, decrementStep } = useStore(appStore)

    const [selectedPlan, setSelectedPlan] = useState<number>(
        plansData.defaultPlan
    )
    const onClickBack = () => {
        if (currentStep) decrementStep()
        router.push(Routes.HOME)
    }

    return (
        <main className="h-screen px-4 py-3 bg-[#FEFEEE]">
            <div className="h-full grid grid-rows-[1fr]">
                <div className="flex flex-col h-full max-w-[1300px] sm:mx-auto">
                    <Header onClickBack={onClickBack} />
                    <h1 className={styles['title-plans']}>Choose your plan</h1>
                    <div className={styles.discount}>
                        51% discount reserved for <Timer />
                    </div>
                    <ul className={styles['list-plans']}>
                        {plansData.plans.map((plan) => (
                            <PlanItem
                                key={plan.id}
                                defaultPlan={plansData.defaultPlan}
                                plan={plan}
                                selectedPlan={selectedPlan}
                                onClick={setSelectedPlan}
                            />
                        ))}
                    </ul>

                    <div className={styles['money-back']}>
                        <LockIcon />
                        30-day money-back guarantee
                    </div>
                    <Button className="sm:mx-auto sm:max-w-max">
                        Get my plan
                    </Button>
                    <p className={styles.note}>
                        Please note, if you don&#39;t cancel before the
                        discounted introductory plan ends, your subscription
                        will automatically renew every month at the full price
                        of $39.99. To cancel your subscription, please contact
                        us at
                    </p>
                    <p className={`${styles.note} ${styles['note-email']}`}>
                        support@get-chillio.app
                    </p>
                </div>
            </div>
        </main>
    )
}
