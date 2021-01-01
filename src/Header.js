import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/SupervisorAccount';
import BusinessIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const logoutOfApp = () => {

        dispatch(logout());
        auth.signOut();        
    };


    return (
        <div className="header">

            <div className="header__left">
                <img src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />


                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>

            </div>




            <div className="header__right">

                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleIcon} title="My Network" />
                <HeaderOption Icon={BusinessIcon} title="My Network" />
                <HeaderOption Icon={ChatIcon} title="My Network" />
                <HeaderOption Icon={NotificationsIcon} title="My Network" />
                <HeaderOption avatar={true} title="Me" onClick={logoutOfApp}/>

            </div>

        </div>



    )
}

export default Header
