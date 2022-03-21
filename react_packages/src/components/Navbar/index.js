import React, { useState } from 'react';
import logo from '../../assets/curis_loogo.png';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavBtn, NavBtnLink, MobileIcon } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
// import Members from '../../pages/Members';

const Navbar = ({ toggle }) => {
  // const [click, setClick] = useState(false);
  //
  // const handleClick = () => setClick(!click);
  // const cloesMobileMenu = () => setClick(false);

  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo to='/' style={{ backgroundImage:`url(${logo})`, backgroundRepeat:'no-repeat', height: 800, backgroundSize: 'contain' }}>
          </NavLogo>

          <NavMenu>

            <NavBtn>
              <NavBtnLink to='learnMore'>Learn More</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='projects'>Our Projects</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='members'>Meet the Members</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='FAQ'>FAQ</NavBtnLink>
            </NavBtn>

          </NavMenu>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
