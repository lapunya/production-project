import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginShema } from '../types/loginShema'
import { loginByUsername } from '../services/loginByUsername/loginByUserName'

const initialState: LoginShema = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    // NOTE: обычные reducers предназначены для обычного изменения 
    reducers: {
        // username и password принимаем из вне (из инпута)
        setUsername: (state: LoginShema, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state: LoginShema, action: PayloadAction<string>) => {
            state.password =  action.payload
        }
    },

    // NOTE: extraReducers предназначены для async thunk 
    // NOTE: данные из async thunk попадают в action
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice