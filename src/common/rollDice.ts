import { reduce } from 'lodash'

interface RollResult {
    rolls: number[]
    successes: number
    ones: number
}

export const rollDice = (rollDieFn: () => number, amount: number): RollResult => {
    const rolls: number[] = []
    for (let i = 0; i < amount; i++) {
        rolls.push(rollDieFn())
    }
    return {
        rolls,
        successes: calculateSuccesses(rolls),
        ones: calculateOnes(rolls)
    }
}

const calculateSuccesses = (rolls: number[], threshold: number = 7, doubleLimit = 10) => {
    return reduce(rolls, (sum, roll) => {
        let rollSuccesses = 0
        if (roll >= doubleLimit) {
            rollSuccesses += 2
        } else if (roll >= threshold) {
            rollSuccesses++
        }
        return sum + rollSuccesses
    }, 0)
}

const calculateOnes = (rolls: number[]) => {
    return reduce(rolls, (sum, roll) => {
        const isOne = roll === 1
        return isOne ? ++sum : sum
    }, 0)
}
