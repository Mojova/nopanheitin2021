import { isBotch } from 'common/isBotch'
import { RollResult } from 'common/rollDice'
import { ResultText } from 'components/RollResult/ResultText/ResultText'
import React from 'react'

interface SuccessResultProps {
    rollResult: RollResult
}

export const SuccessResult: React.FC<SuccessResultProps> = (props) => {
    const {rollResult} = props
    if (isBotch(rollResult)) {
        return null
    }
    return (
        <span>
        <ResultText amount={rollResult.successes} singular={'onnistuminen'} plural={'onnistumista'}/>&nbsp;
        <ResultText amount={rollResult.successesWithoutDoubles} singular={'vahinko'} plural={'vahinkoa'}/>
    </span>
    )
}
