import React from 'react'
import classes from 'components/Button/Button.module.scss'

interface ButtonProps {
    onClick: () => void
    className?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {children, className, onClick} = props
    return <button onClick={onClick} className={`${classes.button} ${className}`}>{children}</button>
}
