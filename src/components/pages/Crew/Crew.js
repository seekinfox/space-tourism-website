import React, { useEffect, useState } from 'react'
import style from "./Crew.module.scss"
import { CrewData } from './Data'


export default function Crew() {
  const [animate, setAnimate] = useState(false)
  const [crew, setCrew] = useState(CrewData[0])
  const [button, setButton] = useState("Commander");

  useEffect(() => {
    const animateTimeout = setTimeout(()=>setAnimate(false), 500)
  
    return () => {
      clearTimeout(animateTimeout)
    }
  }, [crew])
  
  return (
    <section className={style.crew__container}>
      <h2><span>02</span>Meet your crew</h2>
      <div className={style.crew__inner_container}>
        <div className={style.crew__image}>
          <img
          className={animate ? style.crew__image_animate: ""} 
          src={crew.img} alt={crew.name} />
        </div>
        <div className={style.crew__content}>
          <div className={style.crew__buttons}>
            { CrewData.map( i => 
              <span 
              className={button === i.name ? style.crew__active:""}
              key={i.id}
              onClick={() => {setCrew(i); setButton(i.name); setAnimate(true)}}>
              </span>
            )}
          </div>
          <span className={animate ? style.crew__text_animate: ""}>{crew.post}</span>
          <h3 className={animate ? style.crew__text_animate: ""}>{crew.name}</h3>
          <p className={animate ? style.crew__text_animate: ""}>{crew.about}</p>
        </div>
      </div>

    </section>
  )
}
