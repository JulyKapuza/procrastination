import { VALIDATION_RULE } from '@/common/constants'

export const VALIDATION = {
    validateEmail: (email: string) => VALIDATION_RULE.EMAIL.test(email),
} as const
