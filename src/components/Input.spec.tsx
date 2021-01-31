import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from 'components/Input'

describe('Input', () => {
    const onChange = jest.fn()
    it('is an input', () => {
        render(<>
            <label htmlFor="dice">Dice</label>
            <Input id="dice" value={5} onChange={onChange}/>
            </>)
        const input = screen.getByLabelText('Dice')
        expect(input).toHaveValue(5)
        userEvent.type(input, '12')
        expect(onChange).toHaveBeenCalled()
    });
})
