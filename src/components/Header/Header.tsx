import { FC } from 'react'

import style from './Header.module.scss'

import { BackButton } from '@/components/ui/BackButton/BackButton'
import { Progress } from '@//components/Progress/Progress'
import { INITIAL_STEP } from '@/common/constants'
import { useStore } from 'zustand'
import { appStore } from '@/stores/app'

interface HeaderProps {
    steps?: number
    onClickBack: () => void
}

export const Header: FC<HeaderProps> = ({ steps = 0, onClickBack }) => {
    const { currentStep } = useStore(appStore)

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                {(currentStep > INITIAL_STEP || !steps) && (
                    <BackButton onClick={onClickBack} />
                )}
                <span className={style.logo}>Logo</span>
            </div>

            {steps > INITIAL_STEP &&
                currentStep > INITIAL_STEP &&
                !(currentStep > steps) && (
                    <Progress
                        className="margin-bottom-medium"
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
        </header>
    )
}
