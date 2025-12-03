import { StateShema } from "app/providers/StoreProvider"

export const getProfileIsLoading = (state: StateShema) => {
    return state?.profile?.isLoading
}