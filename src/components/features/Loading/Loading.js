import React from 'react'
import style from "./Loading.module.scss"
import rocket from "../../../assets/shared/rocket.gif"

export default function Loading() {
  return (
    <>
      <section className={style.load__container}>
        <div>
        <img src={rocket} alt="" />
        </div>
      </section>
    </>
  )
}
