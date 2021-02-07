import React from 'react'
import classes from 'components/RollTable/RollRow/RollRow.module.scss'
import { SuccessType } from 'components/RollTable/RollTable'

interface RollRowProps {
    index: number
    roll: number
    successType: SuccessType
}

const getRowClass = (successType: SuccessType) => {
    switch (successType) {
        case 'DOUBLE_SUCCESS':
            return classes.doubleSuccess
        case 'SUCCESS':
            return classes.success
        case 'BOTCH':
            return classes.botch
        default:
            return ''
    }
}

export const RollRow: React.FC<RollRowProps> = (props) => {
    const {roll, index, successType} = props
    return (
        <tr className={getRowClass(successType)}>
            <td>{index + 1}.</td>
            <td>{roll}</td>
        </tr>
    )
}
