import React from 'react';
import "./Navbar.css";
import profilePic from "../../../src/assets/userLogo.png";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({onClickDrawer}) => {
  return (
    <div className="navbar">
        <div className="nav__hamburger">
        <IconButton onClick={onClickDrawer}>
          <MenuIcon/>
        </IconButton>
        </div>
        <div className="nav__logo">
            <img src="" alt="Blog" />
        </div>
        <div className="nav__avatar">
            <img src={profilePic} alt="User" />
        </div>
    </div>
  )
}

export default Navbar