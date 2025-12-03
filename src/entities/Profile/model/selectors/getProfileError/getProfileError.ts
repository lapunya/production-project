import { StateShema } from "app/providers/StoreProvider"

export const getProfileError = (state: StateShema) => {
    return state?.profile?.error
}