import { RollResult } from 'common/rollDice'
import { MainHeader } from 'components/MainHeader/MainHeader'
import { RollControls } from 'components/RollControls/RollControls'
import { RollResultView } from 'components/RollResult/RollResultView'
import { RollTable } from 'components/RollTable/RollTable'
import React, { useState } from 'react';
import './App.css';

interface AppProps {
    rollDiceFn: (amount: number) => RollResult
}

export const App: React.FC<AppProps> = (props) => {
    const {rollDiceFn} = props
    const [roll, setRoll] = useState<RollResult>()

    const doRoll = (dice: number) => {
        setRoll(rollDiceFn(dice))
    }

    return (
        <div className="App">
            <MainHeader>Exalted-nopanheitin</MainHeader>
            <RollControls doRoll={doRoll} />
            <RollResultView rollResult={roll} />
            <RollTable roll={roll} />
        </div>
    );
}
