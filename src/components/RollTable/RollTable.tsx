import { RollResult } from 'common/rollDice'
import { RollRow } from 'components/RollRow/RollRow'
import styles from 'components/RollTable/RollTable.module.scss'
import React from 'react';

interface RollTableProps {
    roll: RollResult | undefined
    successThreshold?: number
    doubleThreshold?: number
}

export type SuccessType = 'BOTCH' | 'NOT_SUCCESS' | 'SUCCESS' | 'DOUBLE_SUCCESS'

const determineSuccessType = (dieResult: number, successThreshold: number, doubleThreshold: number) => {
    if (dieResult >= doubleThreshold) {
        return 'DOUBLE_SUCCESS'
    }
    if (dieResult >= successThreshold) {
        return 'SUCCESS'
    }
    if (dieResult === 1) {
        return 'BOTCH'
    }
    return 'NOT_SUCCESS'
}

export const RollTable: React.FC<RollTableProps> = (props) => {
    const {roll, successThreshold = 7, doubleThreshold = 10} = props
    if (!roll) {
        return null
    }
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Noppa</th>
                <th>Tulos</th>
            </tr>
            </thead>
            <tbody>
            {roll.dice.map((die, index) => <RollRow index={index} key={index} roll={die} successType={determineSuccessType(die, successThreshold, doubleThreshold)}/>)}
            </tbody>
        </table>
    )
}
