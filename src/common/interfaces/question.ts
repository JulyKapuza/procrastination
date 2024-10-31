import type { Answer } from './answer'

export type QuestionType = 'single' | 'multiple' | 'inspiration' | 'email'

export interface QuizImage {
    src: string
    alt: string
}

export interface QuizButton {
    text: string
}

export interface Question {
    id: number
    type: QuestionType
    isLastStep: boolean
    showProgressBar: boolean
    affectsProgress: boolean
    title?: string
    text?: string
    subtitle?: string
    image?: QuizImage
    notion?: string
    answers?: Answer[]
    button?: QuizButton
}
