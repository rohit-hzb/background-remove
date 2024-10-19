import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-44 py-3'>
       <img width={150} src={assets.logo} alt="" />
       <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'> copyright @Rohit kumar❤️ || All right reserved</p>
       <div className='flex gap-1'>
        <img width={60}  src={assets.facebook_icon} alt="" />
        <img width={60} src={assets.twitter_icon} alt="" />
        <img width={60} src={assets.google_plus_icon} alt="" />
       </div>
    </div>
  )
}

export default Footer
