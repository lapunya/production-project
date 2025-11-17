import { createSlice } from '@reduxjs/toolkit'
import { ProfileShema } from '../types/profile'

const initialState: ProfileShema = {
    isLoading: false,
    readonly: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice