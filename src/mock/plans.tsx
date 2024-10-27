export const plansData = {
    defaultPlan: 2,
    plans: [
        {
            id: 1,
            name: '3-Month Plan',
            days: 90,
            price: 1.99,
            discount: 17,
        },
        {
            id: 2,
            name: '1-Month Plan',
            days: 30,
            price: 1.33,
            discount: 50,
        },
        {
            id: 3,
            name: '6-Month Plan',
            days: 180,
            price: 0.44,
            discount: 50,
        },
    ],
} as const
