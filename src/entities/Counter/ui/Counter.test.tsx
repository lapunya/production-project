import { fireEvent, screen } from "@testing-library/react"
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe('Counter', () => {
    test('Initial state', () => {
        componentRender(<Counter/>, {initialState: {counter: {value: 10}}});
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
    test('Increment click', () => {
        componentRender(<Counter/>, {initialState: {counter: {value: 10}}});
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    test('Decrement click', () => {
        componentRender(<Counter/>, {initialState: {counter: {value: 10}}});
        const incrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})