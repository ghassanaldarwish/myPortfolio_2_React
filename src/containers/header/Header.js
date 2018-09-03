import React, { Component, Fragment } from 'react'
import Navigation from '../../components/header/navigation';
import Logo from '../../components/header/logo';

class Header extends Component{

    render() {
        return (
        <Fragment>
            <Logo />
            <Navigation />
        </Fragment>
        )
    }
}
export default Header