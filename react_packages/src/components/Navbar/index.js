import React from 'react';
import {FaBars} from 'react-icons/fa'
import logo from '../../assets/curis_loogo.png';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to = '/' style={{ backgroundImage:`url(${logo})`, backgroundRepeat:'no-repeat', height: 800, backgroundSize: 'contain' }}>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavBtn>
              <NavBtnLink to='/learn_more'>Learn More</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='/projects'>Our Projects</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='/team'>Meet the Members</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
