import { create } from 'zustand'

interface EmailStore {
    email: string
}
interface EmailStoreAction {
    onChangeEmail: (value: string) => void
}

export const emailStore = create<EmailStore & EmailStoreAction>((set) => {
    return {
        email: '',
        onChangeEmail: (value) => set((state) => ({ ...state, email: value })),
    }
})
