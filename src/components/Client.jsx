import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.svg"
import bootstrap from "../assets/bootstrap.jpeg"
import tailwind from "../assets/tailwind.png"

function Client() {
  return (
    <div>
    <div className=''>
    <div className=''>
    <h1 className='text-3xl font-bold text-center py-10'>My Tech Stack</h1>
    <p className='text-center text-gray-500'>Technologies I work with</p>
    </div>
    <div className='flex items-center justify-between px-10 p-10 grid grid-cols-2 justify-items-center  lg:grid-cols-6'>
    <img src={html} alt='' className=' w-[150px] '/>
    <img src={css} alt='' className=' w-[150px] '/>
    <img src={javascript} alt='' className=' w-[150px] '/>
    <img src={react} alt='' className=' w-[150px] '/>
    <img src={bootstrap} alt='' className=' w-[150px] '/>
    <img src={tailwind} alt='' className=' w-[150px] '/>
    </div>
    </div>
    </div>
  )
}

export default Client