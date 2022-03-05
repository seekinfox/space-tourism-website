import React, { useEffect, useState } from 'react'
import style from "./Destination.module.scss";
import { DestinationData  } from './Data';
import { motion } from "framer-motion";

let planet = DestinationData[0];

export default function Destination() {
  const [load, setLoad] = useState(true)
  const [animate, setAnimate] = useState(false)
  const [active, setAvtive] = useState("moon");
  const [destination, setDestination] =  useState(planet)

  useEffect(() => {
    const laodPageAnimate = setTimeout(() => {
      setLoad(false)
    }, 500);
  
    return () => {
      clearTimeout(laodPageAnimate)
    }
  }, [])
  
  useEffect(() => {
    const removeAnimate = setTimeout(() => setAnimate(false), 500)

    return () => {
      clearTimeout(removeAnimate)
    }
  }, [destination])
  
  const handleSetPlanet = (e) => {
    DestinationData.filter(i => i.name === e.target.textContent ? `${setDestination(i)} ${setAvtive(e.target.textContent)}` : null);
    setAnimate(true);
  }

  return (
    <motion.section 
    className={style.dsn__container}
    initial={{y:"40vh"}}
    animate={load ? {y:0}:{y:0}}>
      <h2><span>01</span>Pick your destination</h2>
      <div className={style.dsn__inner_container}>
        <div
        className={`${style.dsn__planet_image} ${animate ? style.dsn__animate : ""}`}>
          <img src={destination.img} alt={destination.name} />
        </div>
        <div className={style.dsn__information}>
          <nav className={style.dsn__planet_menu}>
            <p onClick={handleSetPlanet} className={active === "moon"? style.dsn__active_link:""}>moon</p>
            <p onClick={handleSetPlanet} className={active === "mars"? style.dsn__active_link:""}>mars</p>
            <p onClick={handleSetPlanet} className={active === "europa"? style.dsn__active_link:""}>europa</p>
            <p onClick={handleSetPlanet} className={active === "titan"? style.dsn__active_link:""}>titan</p>
          </nav>
          <div className={`${style.dsn__content} ${animate ? style.dsn__info_animate: ""}`}>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
          <div className={`${style.dsn__number_info} ${animate ? style.dsn__info_animate: ""}`}>
            <div>
            <span>AVG. DISTANCE</span>
            <span>{destination.distance}</span>
            </div>
            <div>
            <span>Est. travel time</span>
            <span>{destination.time}</span>
            </div>
          </div>
        </div>
      </div>

    </motion.section>
  )
}
