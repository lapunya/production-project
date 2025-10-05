import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserShema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const initialState: UserShema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state: UserShema, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state: UserShema) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if(user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state: UserShema) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice