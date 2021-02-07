import React, { ChangeEventHandler } from 'react'

interface RadioInputProps {
    checked: boolean
    label: string
    name: string
    onChange: ChangeEventHandler<HTMLInputElement>
    value: number
}

export const RadioInput: React.FC<RadioInputProps> = (props) => {
    const {checked, label, name, onChange, value} = props
    const id = `id-${label}`
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={'radio'} name={name} value={value} onChange={onChange} checked={checked} />
        </>
    )
}
