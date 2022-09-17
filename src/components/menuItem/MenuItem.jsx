import React from 'react'
import './menuItem.scss'
import { Link } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl, }) => {

  return (
    <div className={`${size} menu-item`} >
      <div className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <Link to={`${linkUrl}`} className='subtitle'>SHOP NOW</Link>

      </div>
    </div >

  )
}

export default MenuItem