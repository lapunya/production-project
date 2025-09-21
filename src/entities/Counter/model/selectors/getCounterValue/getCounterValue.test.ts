import { StateShema } from "app/providers/StoreProvider"
import { getCounterValue } from "./getCounterValue"
import { DeepPartial } from "@reduxjs/toolkit"

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateShema> = ({counter: {value: 10}})
        expect(getCounterValue(state as StateShema)).toBe(10)
    })
})