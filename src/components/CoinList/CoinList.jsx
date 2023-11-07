import Coin from '../Coin/Coin';
import './coinList.css'

function CoinsList({ coins, money }) {
    
    return (
        <div className='coins-list'>
            {
                coins.map((coin, index) => {
                    return <Coin key={index} coin={coin} money={money} />
                })
            }
        </div >
    );
}

export default CoinsList;
