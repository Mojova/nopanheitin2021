import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from 'components/Button/Button'

describe('Button', () => {
    it('displays a button', () => {
        const onClick = jest.fn()
        render(<Button onClick={onClick}>Test</Button>)
        userEvent.click(screen.getByText('Test'))
        expect(onClick).toHaveBeenCalled()
    })
})
