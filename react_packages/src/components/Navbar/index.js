import React from 'react';
import logo from '../../assets/curis_loogo.png';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

// import Members from '../../pages/Members';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo to='/' style={{ backgroundImage:`url(${logo})`, backgroundRepeat:'no-repeat', height: 800, backgroundSize: 'contain' }}>
          </NavLogo>

          <NavMenu>

            <NavBtn>
              <NavBtnLink to='/learnMore'>Learn More</NavBtnLink>
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

        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
