import React from 'react';
import '../css/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'
function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <IconButton>
            <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" />
            </IconButton>
            <IconButton>
            <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header
