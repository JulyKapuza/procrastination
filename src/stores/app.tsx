import { create } from 'zustand'
import { INITIAL_STEP } from '../common/constants'

interface AppStore {
    currentStep: number
    isQuizFinished: boolean
    isResultViewed: boolean
}
interface AppStoreAction {
    incrementStep: () => void
    decrementStep: () => void
    setIsQuizFinished: (value: boolean) => void
    setIsResultViewed: (value: boolean) => void
}

export const appStore = create<AppStore & AppStoreAction>((set) => {
    return {
        currentStep: INITIAL_STEP,
        isQuizFinished: false,
        isResultViewed: false,
        incrementStep: () =>
            set((state) => ({ ...state, currentStep: ++state.currentStep })),
        decrementStep: () =>
            set((state) => ({ ...state, currentStep: --state.currentStep })),
        setIsQuizFinished: (value) =>
            set((state) => ({ ...state, isQuizFinished: value })),
        setIsResultViewed: (value) =>
            set((state) => ({ ...state, isResultViewed: value })),
    }
})
