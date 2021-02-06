import { isBotch } from 'common/isBotch'
import { RollResult } from 'common/rollDice'
import { ResultText } from 'components/RollResult/ResultText/ResultText'
import React from 'react'

interface BotchResultProps {
    rollResult: RollResult
}

export const BotchResult: React.FC<BotchResultProps> = (props) => {
    const {rollResult} = props
    if (!isBotch(rollResult)) {
        return null
    }
    return (<span>Botch! <ResultText amount={rollResult.ones} singular={'ykkönen'} plural={'ykköstä'}/></span>)
}
