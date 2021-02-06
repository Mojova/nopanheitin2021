import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RollControls } from 'components/RollControls/RollControls'

describe('RollControls', () => {
    it('displays roll controls', () => {
        const doRoll = jest.fn()
        render(<RollControls doRoll={doRoll} />)
        expect(screen.getByText('Noppien määrä')).toBeVisible()
        expect(screen.getByText('Heitä')).toBeVisible()
        userEvent.type(screen.getByLabelText('Noppien määrä'), '10')
        userEvent.click(screen.getByText('Heitä'))
        expect(doRoll).toHaveBeenCalled()
    });
})
