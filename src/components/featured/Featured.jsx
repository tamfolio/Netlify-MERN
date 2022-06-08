import React from 'react'
import './featured.scss'

function Featured() {
  return (
    <div className='featured'>
        <img 
        width='100%'
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="" 
        />
        <div className="info">
            <img 
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzeezXBjYXPuDgfZ4zZQ/AAAABQq7tk"
            alt="" />
        </div>
    </div>
  )
}

export default Featured