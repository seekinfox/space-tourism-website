import React, { useState } from 'react'
import style from "./Crew.module.scss"
import { CrewData } from './Data'


export default function Crew() {
  const [crew, setCrew] = useState(CrewData[0])
  const [button, setButton] = useState("Commander");

  return (
    <section className={style.crew__container}>
      <h2><span>02</span>Meet your crew</h2>
      <div className={style.crew__inner_container}>
        <div className={style.crew__image}>
          <img src={crew.img} alt={crew.name} />
        </div>
        <div className={style.crew__content}>
          <div className={style.crew__buttons}>
            { CrewData.map( i => 
              <span 
              className={button === i.name ? style.crew__active:""}
              key={i.id}
              onClick={() => {setCrew(i); setButton(i.name)}}>
              </span>
            )}
          </div>
          <span>{crew.post}</span>
          <h3>{crew.name}</h3>
          <p>{crew.about}</p>
        </div>
      </div>

    </section>
  )
}
