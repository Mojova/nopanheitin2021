import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DoubleSelector } from 'components/DoubleSelector/DoubleSelector'

describe('DoubleSelector', () => {
    it('renders', () => {
        const mockOnChange = jest.fn()
        render(<DoubleSelector doubleThreshold={10} onChange={mockOnChange} />)
        const seven = screen.getByLabelText('7')
        const eight = screen.getByLabelText('8')
        const nine = screen.getByLabelText('9')
        const ten = screen.getByLabelText('10')
        expect(seven).toBeVisible()
        expect(seven).not.toBeChecked()
        expect(eight).toBeVisible()
        expect(eight).not.toBeChecked()
        expect(nine).toBeVisible()
        expect(nine).not.toBeChecked()
        expect(ten).toBeVisible()
        expect(ten).toBeChecked()
        userEvent.click(nine)
        expect(mockOnChange).toHaveBeenCalled()
    })
})
