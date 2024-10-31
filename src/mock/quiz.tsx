import { Quiz } from '@/common/interfaces/quiz'

export const quiz: Quiz = {
    id: 1,
    name: 'Start your journey',
    estimation: 3,
    questions: {
        0: {
            id: 1,
            subtitle: 'Select your gender to begin:',
            type: 'single',
            affectsProgress: true,
            showProgressBar: false,
            isLastStep: false,
            answers: [
                { id: 1, emojiCode: 128104, text: 'Male' },
                { id: 2, emojiCode: 128105, text: 'Female' },
                { id: 3, emojiCode: 128113, text: 'Non-binary' },
            ],
        },
        1: {
            id: 2,
            title: 'What negative effects do you experience due to procrastination?',
            type: 'multiple',
            affectsProgress: true,
            showProgressBar: true,
            isLastStep: false,
            button: {
                text: 'Continue',
            },
            answers: [
                { id: 1, emojiCode: 0x231b, text: 'Losing valuable time' },
                {
                    id: 2,
                    emojiCode: 0x1f31f,
                    text: 'Missing important opportunities',
                },
                {
                    id: 3,
                    emojiCode: 0x1f614,
                    text: 'Lowering my self-esteem  ',
                },
                {
                    id: 4,
                    emojiCode: 0x1f4c9,
                    text: 'Affecting the quality of my work  ',
                },
                {
                    id: 5,
                    emojiCode: 0x1f494,
                    text: 'Impacting my relationships',
                },
            ],
        },
        2: {
            id: 3,
            title: 'Action is the most powerful antidote to procrastination',
            text: 'Your actions build habits, and habits define who you become.',
            type: 'inspiration',
            affectsProgress: false,
            button: {
                text: 'Continue',
            },
            image: {
                src: '/icons/grow.svg',
                alt: 'grow your habit',
            },
            showProgressBar: true,
            isLastStep: false,
        },
        3: {
            id: 4,
            affectsProgress: false,
            title: 'Enter your email to get your personalized plan',
            type: 'email',
            notion: 'We protect your privacy and are committed to protecting your personal data. We never send spam emails, only relevant information.',
            button: {
                text: 'Continue',
            },
            showProgressBar: false,
            isLastStep: true,
        },
    },
}
