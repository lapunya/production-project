import { StateShema } from "app/providers/StoreProvider"
import { getLoginIsloading } from "./getLoginIsLoading"

describe('getLoginIsLoading', () => {
    test('Is loading test', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsloading(state as StateShema)).toEqual(true)
    });

    test('Test with empty state', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getLoginIsloading(state as StateShema)).toEqual(false)
    })
})