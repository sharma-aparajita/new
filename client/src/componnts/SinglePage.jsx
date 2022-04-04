import React from 'react'
import '../styles/singlePage.css';
import SideBar from './SideBar';
import SinglePost from './SinglePost';

export default function singlePage() {
  return (
    <div className='single'>
      {/*post */}
      <SinglePost/>
      <SideBar/>
    
    </div>
  )
}
