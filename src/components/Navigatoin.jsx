import React from 'react'
import { Link } from 'react-router-dom'

function Navigatoin() {
  return (
    <nav className=' bg-slate-600 '>
    <ul className='flex justify-center gap-10 p-5'>
      <li className='bg-slate-200 p-2'>
        <Link to='/'>Home</Link>
      </li>
      <li className='bg-slate-200 p-2'>
        <Link to='/super-heroes'>Traditional Super Heroes</Link>
      </li>
      <li className='bg-slate-200 p-2'>
        <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navigatoin