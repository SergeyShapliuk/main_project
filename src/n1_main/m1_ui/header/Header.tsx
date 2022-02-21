import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../routes/Routers";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
<ul>
    <li><NavLink to={PATH.LOGIN}  className={(navData) => navData.isActive ? s.active : "" }>Login</NavLink></li>
    <li><NavLink to={PATH.REGISTER} className={s.link} >Register</NavLink></li>
    <li><NavLink to={PATH.PROFILE} className={s.link} >Profile</NavLink></li>
    <li><NavLink to={PATH.RECOVERY_PASSWORD} className={s.link} >Recovery password</NavLink></li>
    <li><NavLink to={PATH.ADD_NEW_PASSWORD} className={s.link} >Add password</NavLink></li>
    <li><NavLink to={PATH.COMPONENTS} className={s.link} >Test components</NavLink></li>

</ul>

        </div>
    )
}

export default Header