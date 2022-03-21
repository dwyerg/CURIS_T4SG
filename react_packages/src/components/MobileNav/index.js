import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './MobileNavElements';

const MobileNav = ({ isOpen, toggle }) => {
  return (

    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onCLick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>

        <SidebarMenu>
          <SidebarLink to='learnMore' onClick={toggle}>Learn More</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Our Projects</SidebarLink>
          <SidebarLink to="members" onClick={toggle}>Meet the Members</SidebarLink>
          <SidebarLink to="FAQ" onClick={toggle}>FAQ</SidebarLink>
        </SidebarMenu>

      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default MobileNav;
