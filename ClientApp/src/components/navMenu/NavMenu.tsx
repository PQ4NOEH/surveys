import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import ToastTest from '../userCommunication/ToastTest'
import { Link } from 'react-router-dom';
import './custom.css';
import {useTranslation } from 'react-i18next';
import LanguageSwitch from '../i18n/LanguageSwitch'

export default function NavMenu(){
  const [state, setState] = useState({ collapsed: true });
  const { t } = useTranslation();

  function toggleNavbar () {
    setState({
      collapsed: !state.collapsed
    });
  }
  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">{t("Survey")}</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <ToastTest />
          
          
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
            <LanguageSwitch />
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">{t("Home")}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/administration">{t("Administration")}</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
