import { render, screen } from '@testing-library/react'
import { RollResult } from 'common/rollDice'
import { RollResultView } from 'components/RollResult/RollResultView'

describe('RollResultView', () => {
    it('renders for a result', () => {
        const rollResult: RollResult = {
            dice: [1, 2, 3],
            successes: 0,
            successesWithoutDoubles: 0,
            ones: 1
        }
        const {container} = render(<RollResultView rollResult={rollResult} />)
        expect(container.children).toHaveLength(1)
    })
    it('doesn’t render for no result', () => {
        const {container} = render(<RollResultView />)
        expect(container.children).toHaveLength(0)
    });
})
