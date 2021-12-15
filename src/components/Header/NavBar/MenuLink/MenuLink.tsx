import React from "react";
import {Link} from "react-router-dom";

type MenuLinkPropsType = {
    path: string
    title: string
    icon: string
    alt: string
}

export const MenuLink = (props: MenuLinkPropsType) => {
    const {path, icon, title, alt} = props

    return <Link to={path}>
        <img src={icon} alt={alt}/>
        <p>{title}</p>
    </Link>
}