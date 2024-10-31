import { create } from 'zustand'

interface AnswerStore {
    answers: Record<number | string, Record<number | string, number | string>>
}

interface QuizPayload {
    questionId: number
    answer: number | string
    isMultipleChoice: boolean
}

interface QuizStoreActions {
    setAnswer: (payload: QuizPayload) => void
}

export const answerStore = create<AnswerStore & QuizStoreActions>((set) => {
    return {
        answers: {},
        setAnswer({ questionId, answer, isMultipleChoice }) {
            set((state) => {
                const currentAnswers = state.answers[questionId] || {}

                if (!isMultipleChoice) {
                    return {
                        ...state,
                        answers: {
                            ...state.answers,
                            [questionId]: {
                                [answer]: answer,
                            },
                        },
                    }
                }

                if (currentAnswers[answer]) {
                    const { [answer]: _, ...rest } = currentAnswers

                    return {
                        ...state,
                        answers: {
                            ...state.answers,
                            [questionId]: rest,
                        },
                    }
                }

                return {
                    ...state,
                    answers: {
                        ...state.answers,
                        [questionId]: {
                            ...currentAnswers,
                            [answer]: answer,
                        },
                    },
                }
            })
        },
    }
})
