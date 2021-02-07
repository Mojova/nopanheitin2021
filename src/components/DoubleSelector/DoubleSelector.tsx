import { ThreshholdInput } from 'components/ThresholdInput/ThresholdInput'
import React, { ChangeEvent } from 'react'
import classes from 'components/DoubleSelector/DoubleSelector.module.scss'

interface DoubleSelectorProps {
    doubleThreshold: number
    onChange: (doubleThreshold: number) => void
}

export const DoubleSelector: React.FC<DoubleSelectorProps> = (props) => {
    const {doubleThreshold, onChange} = props
    const name = 'doubleThreshold'
    const internalOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(Number.parseInt(event.target.value, 10))
    }
    return (
        <fieldset className={classes.container}>
            <legend className={classes.legend}>Tuplaraja</legend>
            <ThreshholdInput threshhold={doubleThreshold} name={name} onChange={internalOnChange} value={7}/>
            <ThreshholdInput threshhold={doubleThreshold} name={name} onChange={internalOnChange} value={8}/>
            <ThreshholdInput threshhold={doubleThreshold} name={name} onChange={internalOnChange} value={9}/>
            <ThreshholdInput threshhold={doubleThreshold} name={name} onChange={internalOnChange} value={10}/>
        </fieldset>
    )
}
