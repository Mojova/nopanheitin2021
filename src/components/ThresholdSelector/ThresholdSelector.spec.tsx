import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThresholdSelector } from 'components/ThresholdSelector/ThresholdSelector'

describe('ThresholdSelector', () => {
    it('renders', () => {
        const mockOnChange = jest.fn()
        render(<ThresholdSelector min={7} disableMin={8} name={'testi'} threshold={10} onChange={mockOnChange}>Testi</ThresholdSelector>)
        const seven = screen.getByLabelText('7')
        const eight = screen.getByLabelText('8')
        const nine = screen.getByLabelText('9')
        const ten = screen.getByLabelText('10')
        expect(screen.getByText('Testi'))
        expect(seven).toBeVisible()
        expect(seven).not.toBeChecked()
        expect(seven).toBeDisabled()
        expect(eight).toBeVisible()
        expect(eight).not.toBeChecked()
        expect(eight).not.toBeDisabled()
        expect(nine).toBeVisible()
        expect(nine).not.toBeChecked()
        expect(nine).not.toBeDisabled()
        expect(ten).toBeVisible()
        expect(ten).toBeChecked()
        expect(ten).not.toBeDisabled()
        userEvent.click(nine)
        expect(mockOnChange).toHaveBeenCalled()
    })
})
