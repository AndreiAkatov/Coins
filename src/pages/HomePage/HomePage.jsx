import { useState, useEffect } from "react";
import { getCoins } from "../../api/getCoins";
import CoinsList from '../../components/CoinList/CoinList'
import { useOutletContext } from "react-router-dom";

function HomePage() {
   const [coins, setCoins] = useState([])
   const [money,] = useOutletContext();

   useEffect(() => {
      const fetchCoins = async () => {
         try {
            const response = await getCoins();
            setCoins(response.coins)
         } catch (error) {
            console.log(error)
         }
      }
      fetchCoins();
   }, [])

   return (
      <>
         {coins ? <CoinsList coins={coins} money={money} /> : "loading..."}
      </>
   );
}

export default HomePage;