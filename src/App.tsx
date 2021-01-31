import { RollResult } from 'common/rollDice'
import { Input } from 'components/Input'
import { RollTable } from 'components/RollTable'
import React, { useState } from 'react';
import './App.css';

interface AppProps {
    rollDiceFn: (amount: number) => RollResult
}

export const App: React.FC<AppProps> = (props) => {
    const {rollDiceFn} = props
    const [roll, setRoll] = useState<RollResult>()
    const [dice, setDice] = useState<number>(1)

    const doRoll = () => {
        setRoll(rollDiceFn(dice))
    }

    return (
        <div className="App">
            <h1>Exalted-nopanheitin</h1>
            <label htmlFor="rolls">Noppien määrä</label>
            <Input id="rolls" value={dice} onChange={setDice} />
            <button onClick={doRoll}>Heitä</button>
            <RollTable roll={roll} />
        </div>
    );
}
