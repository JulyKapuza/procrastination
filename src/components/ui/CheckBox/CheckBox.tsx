import { FC, KeyboardEvent, useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './CheckBox.module.scss'
import CheckedIcon from '/public/icons/checkbox.svg'

interface CheckBoxProps {
    type?: 'circle' | 'square'
    onChange?: (value: boolean) => void
    isChecked?: boolean
}

export const CheckBox: FC<CheckBoxProps> = ({
    type,
    onChange = () => {},
    isChecked = false,
}) => {
    const [checked, setChecked] = useState<boolean>(isChecked)

    useEffect(() => {
        setChecked(isChecked)
        onChange(isChecked)
        // eslint-disable-next-line
    }, [isChecked])
    const onCheckboxClick = () => {
        const val = !checked
        setChecked(val)
        onChange(val)
    }

    const checkBoxStyle = {
        [styles.circle]: type === 'circle',
        [styles.circleActive]: type === 'circle' && checked,
        [styles.square]: type === 'square',
        [styles.squareActive]: type === 'square' && checked,
    }
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onCheckboxClick()
        }
    }

    return (
        <div
            tabIndex={0}
            onKeyDown={onKeyDown}
            className={cn(checkBoxStyle)}
            onClick={onCheckboxClick}
        >
            {type === 'square' && checked && <CheckedIcon />}
        </div>
    )
}
