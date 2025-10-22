import { DeepPartial } from "@reduxjs/toolkit"
import { StateShema } from "app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"

describe('getLoginUsername', () => {
    test('Test login username', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                username: '1234'
            }
        }
        expect(getLoginUsername(state as StateShema)).toEqual('1234')
    })
    test('Test with empty state', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getLoginUsername(state as StateShema)).toEqual('')
    })
})