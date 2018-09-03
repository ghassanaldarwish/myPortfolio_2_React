import React from 'react'
import classes from './navigation.css'

import { NavLink } from 'react-router-dom'

const navigation = (props) => (
    <nav className={classes.Navigation}>
        <ul>
            <li><NavLink exact activeClassName={classes.active}  to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName={classes.active} to='/services'>Services</NavLink></li>
            <li><NavLink exact activeClassName={classes.active} to='/protfolio'>Protfolio</NavLink></li>
            <li><NavLink exact activeClassName={classes.active} to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName={classes.active} to='/team'>Team</NavLink></li>
            <li><NavLink exact activeClassName={classes.active} to='/contact'>Contact</NavLink></li>

        </ul>
    </nav>
)

export default navigation