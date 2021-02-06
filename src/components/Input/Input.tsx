import React, { ChangeEvent } from 'react';
import classes from 'components/Input/Input.module.scss'

interface InputProps {
    id: string
    value: number
    onChange: (value: number) => void
}

export const Input: React.FC<InputProps> = (props) => {
    const {id, value, onChange, children} = props

    const internalOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.valueAsNumber)
    }

    return (
        <>
            <label htmlFor={id} className={classes.label}>{children}</label>
            <input id={id} value={value} className={classes.input} type="number" min="1" step="1" onChange={internalOnChange}/>
        </>
    )
}
