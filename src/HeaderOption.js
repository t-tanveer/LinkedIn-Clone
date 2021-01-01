import React from 'react'
import "./HeaderOption.css"
import { Avatar } from "@material-ui/core";
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({ Icon, title, avatar, onClick }) {
    const user = useSelector(selectUser)
    // Props allow you to re-use and customize this HeaderOption.js 
    // Props are basically parameters being passed in.
    // You can either use Prop as the object and then sequence everything as prop.x prop.y prop.z
    // Or, better yet, destructure the prop and pass individual parameters like x,y,z etc.
    return (<div onClick={onClick} className="headerOption">
        {Icon &&
            (<Icon className="headerOption__icon" />)}
        {avatar &&
            (<Avatar className="headerOption__icon">
                {user?.email[0]}
            </Avatar>
            )}
        <h3 className="headerOption__title"> {title} </h3>
    </div>
    )
}

export default HeaderOption
