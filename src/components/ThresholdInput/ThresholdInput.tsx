import { RadioInput } from 'components/RadioInput/RadioInput'
import React, { ChangeEventHandler } from 'react'

interface ThreshholdInputProps {
    name: string
    threshhold: number
    value: number
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const ThreshholdInput: React.FC<ThreshholdInputProps> = (props) => {
    const {name, threshhold, onChange, value} = props
    return <RadioInput checked={threshhold === value} label={value.toLocaleString()} name={name} onChange={onChange} value={value} />
}
