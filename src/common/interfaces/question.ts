import type { Answer } from './answer'

export interface Question {
    id: number
    question?: string
    text?: string
    isMultiAnswer: boolean
    answers: Answer[]
}
