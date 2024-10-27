import type { Question } from './question'

export interface Quiz {
    id: number
    name: string
    estimation: number
    questions: Question[]
    total: number
}