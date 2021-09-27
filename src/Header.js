import React, {useState} from 'react' ;
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom"

function Header() {
    const [inputSearch,setInputSearch]= useState('');
    return (
        <div className="header">
            <div className="header__left">
           <MenuIcon />
           <Link to="/">
           <img className="header_logo"
            src= "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg " alt = "logo" ></img>
           </Link>
            </div>

            <div className="header__input">
            <input onChange={ e=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/></Link>
            </div>
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar
            alt="bhushan"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepngimg.com%2Fpng%2F62644-profile-account-google-icons-computer-user-iconfinder%2Ficon&psig=AOvVaw29v3U06TknYlFxPTiYYJcE&ust=1625050302779000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPDe-evUvfECFQAAAAAdAAAAABAN"
            />
            </div>
        </div>
    )
}

export default Header
