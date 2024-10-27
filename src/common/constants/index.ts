export const INITIAL_STEP = 0

export const VALIDATION_RULE = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const

export enum Routes {
    HOME = '/',
    SALE = '/sale',
}
