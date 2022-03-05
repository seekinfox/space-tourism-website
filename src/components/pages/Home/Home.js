import React, { useEffect, useState } from 'react'
import style from "./Home.module.scss"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


export default function Home({desktop}) {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const laodPageAnimate = setTimeout(() => {
        setLoad(false)
    }, 500);
  
    return () => {
      clearTimeout(laodPageAnimate)
    }
  }, [])
  
  return (
    <motion.section 
    className={style.home__container}
    initial={{y:"40vh"}}
    animate={load?{y:0}:{y:0}}
    >
      <div className={style.home__text_content}>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>Let’s face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <Link to="/destination">
      <motion.div 
      whileTap={{ scale: .1}}
      className={style.home__explore_button}>
        <span>explore</span>
      </motion.div>
      </Link>
    </motion.section>
    
  )
}
