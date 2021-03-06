import React from 'react'

import Button from '../../UI/NavButton/NavButton'
import classes from './NavigationItems.module.css'

const navigationItems = ( props ) => (
    <div className={classes.NavigationItems}>
        <Button clicked={props.clicked} link='/' exact>ABOUT ME</Button>
        <Button clicked={props.clicked} link='/personal_skills'>PERSONAL SKILLS</Button>
    </div>
)

export default navigationItems;