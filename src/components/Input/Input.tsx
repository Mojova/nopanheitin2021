import { stringCalculator } from 'common/stringCalculator'
import React, {ChangeEvent, PropsWithChildren, useState} from 'react';
import classes from 'components/Input/Input.module.scss'

interface InputProps {
    id: string
    value: number
    onChange: (value: number) => void
}

export const Input: React.FC<PropsWithChildren<InputProps>> = (props) => {
    const {id, value, onChange, children} = props
    const [internalValue, setInternalValue] = useState(value.toLocaleString())
    const [error, setError] = useState(false)

    const internalOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInternalValue(event.target.value)
        const result = stringCalculator(event.target.value)
        if (!Number.isNaN(result)) {
            onChange(result)
        }
    }

    const onBlur = () => {
        const result = stringCalculator(internalValue)
        if (Number.isNaN(result)) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const classNames = `${classes.input} ${error ? ' ' + classes.error : ''}`

    return (
        <>
            <label htmlFor={id} className={classes.label}>{children}</label>
            <input id={id} value={internalValue} onBlur={onBlur} className={classNames} type="text"
                   onChange={internalOnChange} aria-invalid={error} />
        </>
    )
}
