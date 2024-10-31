import { create } from 'zustand'
import { INITIAL_STEP } from '../common/constants'

interface AppStore {
    currentStep: number
}
interface AppStoreAction {
    incrementStep: () => void
    decrementStep: () => void
}

export const appStore = create<AppStore & AppStoreAction>((set) => {
    return {
        currentStep: INITIAL_STEP,
        incrementStep: () =>
            set((state) => ({ ...state, currentStep: ++state.currentStep })),
        decrementStep: () =>
            set((state) => ({ ...state, currentStep: --state.currentStep })),
    }
})
