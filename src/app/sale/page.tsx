'use client'

import { plansData } from '@/mock/plans'
import '../../styles/globals.scss'
import styles from './styles.module.scss'
import LockIcon from '../../../public/icons/lock.svg'
import { Button } from '@/components/ui/Button/Button'
import { useRouter } from 'next/navigation'
import { useStore } from 'zustand'
import { appStore } from '@/stores/app'
import { Header } from '@/components/Header/Header'
import { Routes } from '@/common/constants'
import { PlanList } from '@/components/PlanList/PlanList'
import { SubscriptionWarning } from '@/components/SubscriptionWarning/SubscriptionWarning'
import { Discount } from '@/components/Discount/Discount'
import { BackButton } from '@/components/ui/BackButton/BackButton'

export default function Sale() {
    const router = useRouter()
    const { currentStep, decrementStep } = useStore(appStore)

    const onClickBack = () => {
        if (currentStep) decrementStep()
        router.push(Routes.HOME)
    }

    return (
        <main className="h-screen px-4 py-3 bg-[#FEFEEE]">
            <div className="h-full grid grid-rows-[1fr]">
                <div className="relative flex flex-col h-full max-w-[1300px] sm:mx-auto">
                    <BackButton onClick={onClickBack} />
                    <Header />
                    <h1 className={styles['title-plans']}>Choose your plan</h1>
                    <Discount />
                    <PlanList defaultPlan={plansData.defaultPlan} />
                    <div className={styles['money-back']}>
                        <LockIcon />
                        30-day money-back guarantee
                    </div>
                    <Button className="sm:mx-auto sm:max-w-max">
                        Get my plan
                    </Button>
                    <SubscriptionWarning />
                </div>
            </div>
        </main>
    )
}
