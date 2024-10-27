import React, { FC, InputHTMLAttributes, useState } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    validationFn?: (value: string) => boolean
    errorMessage?: string
}
export const Input: FC<InputProps> = ({
    value,
    onChange,
    validationFn,
    errorMessage,
}) => {
    const [isError, setIsError] = useState<boolean>(false)
    const [focused, setFocused] = useState(false)
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true)

        if (validationFn) {
            const isValid = validationFn(e.target.value)
            setIsError(!isValid)
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (focused) {
            setIsError(false)
        }

        if (onChange) {
            onChange(e)
        }
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={cn(styles['wrapper-input'], {
                    [styles['wrapper-input_error']]: isError,
                })}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errorMessage && isError && (
                <span className={styles['error-message']}>{errorMessage}</span>
            )}
        </div>
    )
}
