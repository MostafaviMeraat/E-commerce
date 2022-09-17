import React from 'react'
import './homepageStyles.scss'
import Directory from '../../components/directory/Directory.jsx'
import { Routes, Route } from 'react-router-dom'
import HatPage from '../hats/HatPage'
import JacketPage from '../jackets/JacketPage'
import SneakersPage from '../sneakers/SneakersPage'
import WomensPage from '../womens/WomensPage'
import MensPage from '../mens/MensPage'
import ShopPage from '../shop page/ShopPage'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Routes>

        <Route path='/' element={<Directory />} />
        <Route path='shop/hats' element={<HatPage />} />
        <Route path='shop/jackets' element={<JacketPage />} />
        <Route path='shop/sneakers' element={<SneakersPage />} />
        <Route path='shop/womens' element={<WomensPage />} />
        <Route path='shop/mens' element={<MensPage />} />

      </Routes>
    </div>
  )
}

export default HomePage