import { quiz } from '@/mock/quiz'
import { plansData } from '@/mock/plans'

export const useConfig = () => {
    return {
        quiz,
        subscribePlans: plansData,
    }
}
