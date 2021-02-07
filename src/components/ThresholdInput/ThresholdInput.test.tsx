import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThreshholdInput } from 'components/ThresholdInput/ThresholdInput'

describe('ThresholdInput', () => {
    it('renders a checked input', () => {
        const mockOnChange = jest.fn()
        render(<ThreshholdInput name={'test'} threshhold={10} value={10} onChange={mockOnChange} />)
        const input = screen.getByLabelText('10')
        expect(input).toBeInTheDocument()
        expect(input).toBeChecked()
    })
    it('renders an unchecked input', () => {
        const mockOnChange = jest.fn()
        render(<ThreshholdInput name={'test'} threshhold={10} value={9} onChange={mockOnChange} />)
        const input = screen.getByLabelText('9')
        expect(input).toBeInTheDocument()
        expect(input).not.toBeChecked()
        userEvent.click(input)
        expect(mockOnChange).toHaveBeenCalled()
    })
})
