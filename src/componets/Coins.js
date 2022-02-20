import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';
import CoinItem from './CoinItem';
import './Coins.css'
export default function Coins({coins}) {
    const [search , setSearch] = useState('')

    const handleChange = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value);
    }
   
    const filterdCoin = coins.filter(coin => coin.symbol.toLowerCase().includes(search.toLocaleLowerCase()))
        console.log(filterdCoin);
    return (
      <div className='container'>
        <div>
            <div className="search">
                <input 
                    type="text" 
                    className='search'
                    placeholder='Search Coin ...'
                    onChange={handleChange}
                 />
            </div> 
            <div className="heading">
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {coins.filter(coin => coin.symbol.toLowerCase().includes(search.toLocaleLowerCase())).map((coin)=>{
                return (
                    <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                        <CoinItem coin={coin} />
                    </Link>
                )
            })}
        </div>
      </div>
  );
}
