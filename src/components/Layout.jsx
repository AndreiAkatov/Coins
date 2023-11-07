import React from 'react'
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
   const [money, setMoney] = useState('');

   return (
      <div className='app'>
         <div className="wrapper">
            <header className='header'>
               <label htmlFor='amount' className="header__input--label">Enter $ amount:</label>
               <input id="amount" className="header__input" value={money} onChange={(event) => setMoney(event.target.value)} type="text" />
            </header>

            <Outlet context={[money, setMoney]} />
            <footer>2023</footer>
         </div>
      </div >
   )
}

export default Layout 