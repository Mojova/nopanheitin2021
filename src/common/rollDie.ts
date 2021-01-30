export type d10RollResult = 1|2|3|4|5|6|7|8|9|10

export const rollDie = (): d10RollResult => {
    return <d10RollResult>Math.floor(Math.random() * 10 + 1)
}
