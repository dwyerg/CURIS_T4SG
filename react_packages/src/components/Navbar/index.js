import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to = '/'>curis</NavLogo>
          <img src = "../assets/curis_loogo.png" />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
