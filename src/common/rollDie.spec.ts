import { rollDie } from 'common/rollDie'

describe('rollDie', () => {
    const accepted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    it('returns a number between 1 and 10', () => {
        for (let i = 0; i < 1000; i++) {
            const result = rollDie()
            expect(accepted.find(value => value === result)).toBeTruthy()
        }
    })
    it('returns all accepted values', () => {
        const results: number[] = []
        for (let i = 0; i < 1000; i++) {
            results.push(rollDie())
        }
        accepted.forEach(value => {
            expect(results.find(result => result === value)).toBeTruthy()
        })
    })
})
