import { render, screen } from "@testing-library/react"
import { Button, ButtonTheme } from "./Button"

describe('Button', () => {
    test('Check button', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('Check button class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
    })
})