import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './MobileNavElements';
import { NavLink, Link } from 'react-router-dom';

const MobileNav = ({ isOpen, toggle }) => {
  return (

    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onCLick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>

        <SidebarMenu>
          <NavLink to='/' onClick={toggle}>Home</NavLink>
          <NavLink to='learnMore' onClick={toggle}>Learn More</NavLink>
          <NavLink to="projects" onClick={toggle}>Our Projects</NavLink>
          <NavLink to="members" onClick={toggle}>Meet the Members</NavLink>
          <NavLink to="FAQ" onClick={toggle}>FAQ</NavLink>
        </SidebarMenu>

      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default MobileNav;
