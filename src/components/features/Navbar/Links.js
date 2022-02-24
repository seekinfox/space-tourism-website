import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from "./Navbar.module.scss";

export default function Links() {
   const location = useLocation();
   const { pathname } = location;
   const splitLocation = pathname.split("/");

  return (
    <>
      <Link className={`${style.nav__link} ${splitLocation[1] === "" ? style.nav__active : ""}`} to="/">
         <p><span>00</span> Home</p>
      </Link>
      <Link className={`${style.nav__link} ${splitLocation[1] === "destination" ? style.nav__active : ""}`} to="/destination">
         <p><span>01</span> destination</p>
      </Link>
      <Link className={`${style.nav__link} ${splitLocation[1] === "crew" ? style.nav__active : ""}`} to="/crew">
         <p><span>02</span> crew</p>
      </Link>
      <Link className={`${style.nav__link} ${splitLocation[1] === "technology" ? style.nav__active : ""}`} to="/technology">
         <p><span>03</span> technology</p>
      </Link>
    </>
  )
}
