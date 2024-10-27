import { create } from 'zustand'

interface AnswerStore {
    answers: {
        [questionId: number]: number
    }
}

interface MultiAnswerStore {
    answers: {
        [questionId: number]: Record<number, number>
    }
}

interface QuizPayload {
    questionId: number
    answerId: number
}

interface QuizStoreActions {
    setAnswer: (payload: QuizPayload) => void
}

export const answerStore = create<AnswerStore & QuizStoreActions>((set) => {
    return {
        answers: {},
        setAnswer: ({ questionId, answerId }) => {
            set((state) => {
                if (state.answers[questionId] === answerId) {
                    const { [questionId]: _, ...rest } = state.answers

                    return {
                        ...state,
                        rest,
                    }
                }
                return {
                    ...state,
                    answers: {
                        [questionId]: answerId,
                    },
                }
            })
        },
    }
})

export const multiAnswerStore = create<MultiAnswerStore & QuizStoreActions>(
    (set) => {
        return {
            answers: {},
            setAnswer: ({ questionId, answerId }) => {
                set((state) => {
                    if (
                        state.answers[questionId] &&
                        state.answers[questionId][answerId]
                    ) {
                        const { [answerId]: _, ...rest } =
                            state.answers[questionId]

                        return {
                            ...state,
                            answers: {
                                [questionId]: rest,
                            },
                        }
                    }

                    return {
                        ...state,
                        answers: {
                            [questionId]: {
                                ...(state.answers[questionId] || {}),
                                [answerId]: answerId,
                            },
                        },
                    }
                })
            },
        }
    }
)
