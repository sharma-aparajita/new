import React from 'react'
import Header from './Header'
import Posts from './Posts'
import SideBar from './SideBar'
import '../styles/homePage.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </>
  )
}
