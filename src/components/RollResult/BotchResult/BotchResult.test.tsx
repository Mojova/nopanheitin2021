import { render, screen } from '@testing-library/react'
import { RollResult } from 'common/rollDice'
import { BotchResult } from 'components/RollResult/BotchResult/BotchResult'

describe('BotchResult', () => {
    it('renders botches', () => {
        const rollResult: RollResult = {
            dice: [1, 2, 3],
            successes: 0,
            successesWithoutDoubles: 0,
            ones: 1
        }
        render(<BotchResult rollResult={rollResult} />)
        expect(screen.getByText('Botch!')).toBeVisible()
        expect(screen.getByText('1')).toBeVisible()
        expect(screen.getByText('ykkönen!')).toBeVisible()
    })
    it('doesn’t render other results', () => {
        const rollResult: RollResult = {
            dice: [7, 2, 3],
            successes: 1,
            successesWithoutDoubles: 1,
            ones: 1
        }
        render(<BotchResult rollResult={rollResult} />)
        expect(screen.queryByText('Botch!')).not.toBeInTheDocument()
    })
})
