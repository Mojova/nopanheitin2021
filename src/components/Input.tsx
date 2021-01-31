import React, { ChangeEvent } from 'react';

interface InputProps {
    id: string
    value: number
    onChange: (value: number) => void
}

export const Input: React.FC<InputProps> = (props) => {
    const {id, value, onChange} = props

    const internalOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.valueAsNumber)
    }

    return (
        <input id={id} value={value} type="number" min="1" step="1" onChange={internalOnChange} />
    )
}
