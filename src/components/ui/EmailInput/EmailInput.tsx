import React, { FC, InputHTMLAttributes } from 'react'
import { Input } from '@/components/ui/Input/Input'
import { VALIDATION } from '@/common/utils'

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
    email: string
}

export const EmailInput: FC<EmailInputProps> = ({ email, ...rest }) => (
    <Input
        value={email}
        validationFn={VALIDATION.validateEmail}
        errorMessage="Please enter a valid email address"
        {...rest}
    />
)
