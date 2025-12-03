import { StateShema } from "app/providers/StoreProvider"
import { getLoginError } from "./getLoginError"

describe('getLoginError', () => {
    test('Test error text', () => {
        // создаем стейт с дефолтным значeнием для той части стейта, которую тестируем
        const state: DeepPartial<StateShema> = {
            loginForm: {
                error: 'Error'
            }
        };
        // вызываем селектор getLoginError, проверяем результат на соответствие
        expect(getLoginError(state as StateShema)).toEqual('Error')
    });

    test('Test with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getLoginError(state as StateShema)).toEqual(undefined)
    })
})