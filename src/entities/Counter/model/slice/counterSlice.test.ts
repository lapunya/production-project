import { CounterShema } from "../types/counterShema"
import { counterActions, counterReducer } from "./counterSlice"

describe('counterSlice.test', () => {
    // тестируем слайс и редьюсеры, которые находятся внутри
    // в редьюсер передаем стейт и экшн, который меняет этот стейт
    test('Increment action', () => {
        const state: CounterShema = ({value: 0})
        expect(counterReducer(state, counterActions.increment())).toEqual({value: 1})
    })
    test('Decrement action', () => {
        const state: CounterShema = ({value: 0})
        expect(counterReducer(state, counterActions.decrement())).toEqual({value: -1})
    })

    // необходимо писать тест, который проверяет работоспособность редьюсера и экшна при пустом стейте
    // в таком случае, должен сработать initialState
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1})
    })
})