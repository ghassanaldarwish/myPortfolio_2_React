import React, { Component } from 'react'
import Navigation from '../../components/header/navigation/navigation';
import Logo from '../../components/header/logo/logo';
import classes from './Header.css'

class Header extends Component{

    render() {
        return (
        <header className={classes.Header}>
            <Logo />
            <Navigation />
        </header>
        )
    }
}
export default Header