import React, { ChangeEventHandler } from 'react'
import classes from 'components/RadioInput/RadioInput.module.scss'

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
        <span className={classes.container}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={'radio'} name={name} value={value.toLocaleString()} onChange={onChange} checked={checked} />
        </span>
    )
}
