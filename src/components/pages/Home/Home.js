import React from 'react'
import style from "./Home.module.scss"

export default function Home({desktop}) {

  return (
    <section className={style.home__container}>
      <div className={style.home__text_content}>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>Let’s face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className={style.home__explore_button}>
        <span>explore</span>
      </div>
    </section>
  )
}
