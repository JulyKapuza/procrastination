export const quiz = {
    id: 1,
    name: 'Start your journey',
    estimation: 3,
    questions: [
        {
            id: 1,
            text: 'Select your gender to begin:',
            isMultiAnswer: false,
            answers: [
                { id: 1, emojiCode: 128104, text: 'Male' },
                { id: 2, emojiCode: 128105, text: 'Female' },
                { id: 3, emojiCode: 128113, text: 'Non-binary' },
            ],
        },
        {
            id: 2,
            question:
                'What negative effects do you experience due to procrastination?',
            isMultiAnswer: true,
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
    ],
    total: 3,
}
