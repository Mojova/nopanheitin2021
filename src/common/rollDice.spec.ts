import { rollDice } from 'common/rollDice'

describe('rollDice', () => {
    it('rolls a die', () => {
        const mockRollDie = jest.fn().mockReturnValue(7)
        const result = rollDice(mockRollDie, 1)
        expect(result.rolls.length).toBe(1)
        expect(result.rolls[0]).toBe(7)
        expect(result.successes).toBe(1)
        expect(result.ones).toBe(0)
    })
    it('rolls many dice', () => {
        let roll = 1
        const mockRollDie = jest.fn().mockImplementation(() => {
            return roll++
        })
        const result = rollDice(mockRollDie, 10)
        expect(result.rolls.length).toBe(10)
        expect(result.successes).toBe(5)
        expect(result.ones).toBe(1)
    })
})
