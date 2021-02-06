import React from 'react'
import classes from 'components/MainHeader/MainHeader.module.scss'

export const MainHeader: React.FC = (props) => {
    const {children} = props
    return (<div className={classes.container}><h1>{children}</h1></div>)
}
