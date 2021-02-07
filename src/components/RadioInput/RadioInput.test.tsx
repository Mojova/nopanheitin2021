import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioInput } from 'components/RadioInput/RadioInput'

describe('RadioInput', () => {
    it('renders', () => {
        const mockChange = jest.fn()
        render(<RadioInput value={7} label={'test'} name={'test-radio'} onChange={mockChange} checked={false} />)
        const input = screen.getByLabelText('test')
        expect(input).toBeVisible()
        userEvent.click(input)
        expect(mockChange).toHaveBeenCalled()
    })
})
