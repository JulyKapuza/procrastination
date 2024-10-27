import { answerStore, multiAnswerStore } from '@/stores/quiz'

export const sendAnswers = (email: string) => {
    const combinedStore = {
        ...answerStore.getState().answers,
        ...multiAnswerStore.getState().answers,
    }

    const answers = Object.entries(combinedStore).reduce(
        (acc, [questionId, answer]) => {
            let answerId: number | null = null
            const answerIds = []

            if (typeof answer === 'object') {
                for (const key in answer) {
                    answerIds.push(answer[key])
                }
            } else {
                answerId = answer
            }

            acc[questionId] = answerId || answerIds

            return acc
        },
        {} as Record<string, number | number[]>
    )

    // POST Request
    console.log("It's just example")
    console.log('API', {
        email,
        answers,
    })
}
