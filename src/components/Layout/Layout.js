import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

export default function Layout({desktop}) {
  return (
    <>
      <Navbar desktop={desktop}/>
      <Outlet />
    </>
  )
}
