import { useState } from "react";
import "./coin.css"
import { Link } from "react-router-dom";

function Coin({ coin, money }) {
   const [result, setResult] = useState('')

   const amountHandler = (coin) => {
      setResult((money / coin.price).toFixed(3))
   }

   return (
      <div className='coin' style={{ background: coin.color }} >
         <div className='coin__info'>
            <p className='coin__info-name'>{coin.symbol}</p>
            <p className='coin__info-name'> {coin.name}</p>
            <Link className='coin__info-link' to="/info">Show more</Link>

         </div>
         <div className='coin__calculation'>
            <p className='coin__info-name'>Price: {Math.round(coin.price)}</p>
            <button className='coin__btn' onClick={() => amountHandler(coin)}>Calculate</button>
            <div>{result ? result : 'amount'}</div>
         </div>
         <div className='coin__icon-box'>
            <img className='icon' src={coin.iconUrl} alt="no img"></img>
         </div>
      </div>
   )
}
export default Coin