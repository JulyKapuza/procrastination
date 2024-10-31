import { quiz } from '@/mock/quiz'
import { answerStore } from '@/stores/answers'

export const sendAnswers = (email: string) => {
    const { answers: userAnswers } = answerStore.getState()

    const answers = Object.values(quiz.questions).reduce(
        (acc, question) => {
            if (userAnswers[question.id]) {
                const answers = Object.values(userAnswers[question.id])

                acc[question.id] =
                    question.type === 'multiple' ? answers : answers[0]
            }

            return acc
        },
        {} as Record<string | number, number | string | (string | number)[]>
    )

    // POST Request
    console.log("It's just example")
    console.log('API', {
        email,
        answers,
    })
}
