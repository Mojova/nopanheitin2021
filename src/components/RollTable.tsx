import { RollResult } from 'common/rollDice'
import { RollRow } from 'components/RollRow'
import React from 'react';

interface RollTableProps {
    roll: RollResult | undefined
}

export const RollTable: React.FC<RollTableProps> = (props) => {
    const {roll} = props
    if (!roll) {
        return null
    }
    return (
        <table>
            <thead>
            <tr>
                <th>Noppa</th>
                <th>Tulos</th>
            </tr>
            </thead>
            <tbody>
            {roll.dice.map((die, index) => <RollRow index={index} key={index} roll={die} isSuccess={false}/>)}
            </tbody>
        </table>
    )
}
