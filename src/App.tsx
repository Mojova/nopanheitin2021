import { RollResult } from 'common/rollDice'
import { DoubleSelector } from 'components/DoubleSelector/DoubleSelector'
import { MainHeader } from 'components/MainHeader/MainHeader'
import { RollControls } from 'components/RollControls/RollControls'
import { RollResultView } from 'components/RollResult/RollResultView'
import { RollTable } from 'components/RollTable/RollTable'
import React, { useState } from 'react';
import './App.css';

interface AppProps {
    rollDiceFn: (amount: number, doubleThreshold: number) => RollResult
}

export const App: React.FC<AppProps> = (props) => {
    const {rollDiceFn} = props
    const [roll, setRoll] = useState<RollResult>()
    const [doubleThreshold, setDoubleThreshold] = useState(10)

    const doRoll = (dice: number) => {
        setRoll(rollDiceFn(dice, doubleThreshold))
    }

    return (
        <div className="App">
            <MainHeader>Exalted-nopanheitin</MainHeader>
            <DoubleSelector doubleThreshold={doubleThreshold} onChange={setDoubleThreshold} />
            <RollControls doRoll={doRoll} />
            <RollResultView rollResult={roll} />
            <RollTable roll={roll} doubleThreshold={doubleThreshold} />
        </div>
    );
}
