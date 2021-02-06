import { RollResult } from 'common/rollDice'
import { BotchResult } from 'components/RollResult/BotchResult/BotchResult'
import classes from 'components/RollResult/RollResult.module.scss'
import { SuccessResult } from 'components/RollResult/SuccessResult/SuccessResult'
import React from 'react'

interface RollResultProps {
    rollResult?: RollResult
}

export const RollResultView: React.FC<RollResultProps> = (props) => {
    const {rollResult} = props
    if (!rollResult) {
        return null
    }
    return (
        <p className={classes.container}>
            <BotchResult rollResult={rollResult} />
            <SuccessResult rollResult={rollResult} />
        </p>
    )
}
