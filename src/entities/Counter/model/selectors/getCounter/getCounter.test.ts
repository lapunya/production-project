import { DeepPartial } from "@reduxjs/toolkit"
import { getCounter } from "./getCounter"
import { StateShema } from "app/providers/StoreProvider"

describe('getCounter', () => {
    // проверяем селектор на то, что он возвращает правильную часть стейта
    test('should return counter object', () => {
        // аргументом селектор всегда принимает стейт, поэтому нужно предварительно сформировать его
        // тип DeepPartial нужен, чтобы объявить какую-то часть от всего стейта, без остальных обязательньных полей
        const state: DeepPartial<StateShema> = {counter: {value: 10}}
        // в тестах допустимо использовать as
        expect(getCounter(state as StateShema)).toEqual({value: 10})
    })
})