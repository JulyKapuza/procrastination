import { FC } from 'react'

import cn from 'classnames'

import Check from '../../../public/icons/check.svg'

import style from './Progress.module.scss'

interface PointProps {
    position: number
    current: number
}

export const Point: FC<PointProps> = ({ position, current }) => {
    return (
        <div className={style['point-wrapper']}>
            <div
                className={cn(style.point, {
                    [style.prev]: position < current,
                    [style.current]: position === current,
                })}
            >
                {
                    <Check
                        className={cn(style.check, {
                            hide: position >= current,
                        })}
                    />
                }
            </div>
        </div>
    )
}

interface ProgressProps {
    steps: number
    currentStep: number
    className: string
}

export const Progress: FC<ProgressProps> = ({
    steps,
    currentStep,
    className,
}) => {
    return (
        <div className={cn(style['root-wrapper'], className)}>
            <div className={style['bar-wrapper']}>
                {Array.from({ length: steps }, (_, index) => {
                    return (
                        <Point
                            key={index}
                            position={index}
                            current={currentStep}
                        />
                    )
                })}
                <div
                    className={style['progress-bar']}
                    style={{
                        width: 92 * (currentStep / steps) + '%',
                    }}
                ></div>
            </div>
        </div>
    )
}
