import { isBotch } from 'common/isBotch'
import { RollResult } from 'common/rollDice'

describe('isBotch', () => {
    it('recognizes botches', () => {
        const result: RollResult = {
            dice: [1, 1, 2, 5, 4],
            successes: 0,
            ones: 2
        }
        expect(isBotch(result)).toBeTruthy()
    });
    it('recognizes non-botches', () => {
        const result: RollResult = {
            dice: [1, 1, 2, 7, 4],
            successes: 1,
            ones: 2
        }
        expect(isBotch(result)).toBeFalsy()
    });
})
