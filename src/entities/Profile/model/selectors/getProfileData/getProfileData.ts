import { StateShema } from "app/providers/StoreProvider"

export const getProfileData = (state: StateShema) => {
    return state?.profile?.data
}   