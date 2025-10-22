import { DeepPartial } from "@reduxjs/toolkit"
import { LoginShema } from "../types/loginShema"
import { loginActions, loginReducer } from "./loginSlice"

describe('loginSlice', () => {
    test('Test set username', () => {
        const state: DeepPartial<LoginShema> = {username: '1'}
        expect(loginReducer(state as LoginShema, loginActions.setUsername('123'))).toEqual({username: '123'})
    });
    test('Test set password', () => {
        const state: DeepPartial<LoginShema> = {password: '1'}
        expect(loginReducer(state as LoginShema, loginActions.setPassword('123'))).toEqual({password: '123'})
    });
})