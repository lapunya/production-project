import { StateShema } from "app/providers/StoreProvider"
import { getLoginPassword } from "./getLoginPassword"

describe('getLoginPassword', () => {
    test('Test login password', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                password: '1234'
            }
        }
        expect(getLoginPassword(state as StateShema)).toEqual('1234')
    })
    test('Test with empty state', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getLoginPassword(state as StateShema)).toEqual('')
    })
})