import { _rollDice } from 'common/rollDice'

describe('rollDice', () => {
    it('rolls a die', () => {
        const mockRollDie = jest.fn().mockReturnValue(7)
        const result = _rollDice(mockRollDie, 1, 10)
        expect(result.dice.length).toBe(1)
        expect(result.dice[0]).toBe(7)
        expect(result.successes).toBe(1)
        expect(result.successesWithoutDoubles).toBe(1)
        expect(result.ones).toBe(0)
    })
    it('rolls many dice', () => {
        let roll = 1
        const mockRollDie = jest.fn().mockImplementation(() => {
            return roll++
        })
        const result = _rollDice(mockRollDie, 10, 9)
        expect(result.dice.length).toBe(10)
        expect(result.successes).toBe(6)
        expect(result.successesWithoutDoubles).toBe(4)
        expect(result.ones).toBe(1)
    })
})
