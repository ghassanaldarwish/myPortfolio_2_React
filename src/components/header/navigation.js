import React from 'react'
import './navigation.css'



import { NavLink as reactNavLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';



class navigation extends React.Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      render() {
        return (
     
      
            <Navbar  expand="md" className='Navigation sticky-top '>
                <div className='container'>
              <NavbarBrand ><span>Ghassanooooo</span></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                  <NavLink exact   to='/' tag={reactNavLink}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                   <NavLink exact  to='/services' tag={reactNavLink}>Services</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink exact  to='/protfolio' tag={reactNavLink}>Protfolio</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink exact  to='/about' tag={reactNavLink}>About</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink exact  to='/team' tag={reactNavLink}>Team</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink exact  to='/contact' tag={reactNavLink}>Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
              </div>
            </Navbar>
    
        );
      }

}
//     <nav className={classes.Navigation}>
//         <ul>
//             <li><NavLink exact activeClassName={classes.active}  to='/' tag={reactNavLink}>Home</NavLink></li>
//             <li><NavLink exact activeClassName={classes.active} to='/services' tag={reactNavLink}>Services</NavLink></li>
//             <li><NavLink exact activeClassName={classes.active} to='/protfolio' tag={reactNavLink}>Protfolio</NavLink></li>
//             <li><NavLink exact activeClassName={classes.active} to='/about' tag={reactNavLink}>About</NavLink></li>
//             <li><NavLink exact activeClassName={classes.active} to='/team' tag={reactNavLink}>Team</NavLink></li>
//             <li><NavLink exact activeClassName={classes.active} to='/contact' tag={reactNavLink}>Contact</NavLink></li>

//         </ul>
//     </nav>
// )

export default navigation


