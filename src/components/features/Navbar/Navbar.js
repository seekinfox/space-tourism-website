import React, { useState } from 'react'
import style from "./Navbar.module.scss";
import OIcon from "../../../assets/shared/icon-hamburger.svg";
import Links from './Links';
import logo from "../../../assets/shared/logo.svg"
import close from "../../../assets/shared/icon-close.svg"

export default function Navbar({desktop}) {
   const [menu, setMenu] = useState(false)
   const navIcon = menu ? close : OIcon;
  return (
    <>
      <header className={style.h__header}>
         <div className={style.h__mainLogo}><img src={logo} alt="space" /></div> 

         <nav className={style.h__nav_container}>
            { desktop ? 
               <div className={style.nav__desktop_inner_container}>
                  <Links />
               </div> :
               <>
                  <div className={style.nav__open_icon} onClick={() => setMenu(prev => !prev)}>
                     <img src={navIcon} alt="" />
                  </div>
                  {menu ?
                     <div className={style.nav__mobile_inner_container}>
                     <Links />
                     </div> : ""
                  }
               </>
            }
         </nav>   
      </header>
    </>
  )
}
