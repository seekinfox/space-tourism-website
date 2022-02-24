import React, { useState } from 'react'
import style from "./Destination.module.scss";
import { DestinationData  } from './Data';
let planet = DestinationData[0];
// console.log(DestinationData[0].img)

export default function Destination() {
  const [active, setAvtive] = useState("moon");
  const [destination, setDestination] =  useState(planet)

  const handleSetPlanet = (e) => {
    DestinationData.filter(i => i.name === e.target.textContent ? `${setDestination(i)} ${setAvtive(e.target.textContent)}` : null)
  }

  return (
    <section className={style.dsn__container}>
      <h2><span>01</span>Pick your destination</h2>
      <div className={style.dsn__inner_container}>
        <div className={style.dsn__planet_image}>
          <img src={destination.img} alt={destination.name} />
        </div>
        <div className={style.dsn__information}>
          <nav className={style.dsn__planet_menu}>
            <p onClick={handleSetPlanet} className={active === "moon"? style.dsn__active_link:""}>moon</p>
            <p onClick={handleSetPlanet} className={active === "mars"? style.dsn__active_link:""}>mars</p>
            <p onClick={handleSetPlanet} className={active === "europa"? style.dsn__active_link:""}>europa</p>
            <p onClick={handleSetPlanet} className={active === "titan"? style.dsn__active_link:""}>titan</p>
          </nav>
          <div className={style.dsn__content}>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
          <div className={style.dsn__number_info}>
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

    </section>
  )
}
