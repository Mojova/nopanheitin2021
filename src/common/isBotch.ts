import { RollResult } from 'common/rollDice'

export const isBotch = (rollResult: RollResult) => {
    return rollResult.successes === 0 && rollResult.ones > 0
}
