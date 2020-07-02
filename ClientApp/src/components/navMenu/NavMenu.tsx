import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import ToastTest from '../userCommunication/ToastTest'
import { Link } from 'react-router-dom';
import './custom.css';

export default function NavMenu(){
  const [state, setState] = useState({ collapsed: true });

  function toggleNavbar () {
    setState({
      collapsed: !state.collapsed
    });
  }
  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">survey</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <ToastTest />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/administration">Administration</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
