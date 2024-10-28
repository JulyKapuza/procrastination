import { FC } from 'react'

import ArrowLeft from '@/../public/icons/arrow-left.svg'

import { Button } from '../Button/Button'

interface BackButtonProps {
    onClick: () => void
}

export const BackButton: FC<BackButtonProps> = ({ onClick }) => (
    <Button asIcon onClick={onClick} className="absolute-center">
        <ArrowLeft />
    </Button>
)
