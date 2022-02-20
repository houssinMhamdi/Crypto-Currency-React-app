import React from 'react';
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Navebar.css'
export default function Navebar() {
  return (
     <Link to='/'>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1>Coin<span className='yello'>Target</span></h1>
      </div>
     </Link>
  );
}
