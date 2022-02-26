import React, { useState } from 'react'
import style from "./Technology.module.scss"
import { TechData } from './Data'
import { useMediaQuery } from 'react-responsive'

export default function Technology() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const [tech, setTech] = useState(TechData[0])
  const [techActive, setTechActive] = useState(tech.name)
  console.log(techActive)


  let img = isDesktopOrLaptop ? tech.pimg : tech.img;
  return (
    <section className={style.tech__container}>
      <h2><span>03</span>SPACE LAUNCH 101</h2>
      <div className={style.tech__inner_container}>
        <div className={style.tech__image}>
          <img src={img} alt={tech.name} />
        </div>
        <div className={style.tech__content}>
          <div className={style.texh__buttons}>
            {TechData.map(i => 
              <span 
              className={techActive === i.name ? style.tech__active: ""}
              key={i.id}
              onClick={() => {setTech(i); setTechActive(i.name)}}>
                {i.id}
              </span>
            )}
          </div>
          <div className={style.tech__typos}>
            <span>THE TERMINOLOGY…</span>
            <h3>{tech.name}</h3>
            <p>{tech.about}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
