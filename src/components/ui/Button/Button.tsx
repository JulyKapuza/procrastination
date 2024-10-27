import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './button.module.scss'

interface ButtonProps
    extends PropsWithChildren,
        ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void
    asIcon?: boolean
    disabled?: boolean
    className?: string
}

export const Button: FC<ButtonProps> = ({
    onClick,
    asIcon = false,
    disabled = false,
    className,
    children,
    type = 'button',
    ...rest
}) => (
    <button
        className={cn(
            {
                [styles.button]: !asIcon,
                [styles['button-disabled']]: disabled && !asIcon,
                [styles['as-icon']]: asIcon,
            },
            className
        )}
        type={type}
        onClick={() => onClick && onClick()}
        disabled={disabled}
        {...rest}
    >
        {children}
    </button>
)
