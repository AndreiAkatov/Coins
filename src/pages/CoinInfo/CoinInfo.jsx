import { useNavigate } from 'react-router-dom';

function CoinInfo() {
   const navigate = useNavigate()

   return (
      <div className="coin-info">
         <h1 className="coin-info__title">CoinInfo page</h1>
         <div className="coin-info__desc">CoinInfo desctription</div>
         <button className="coin-info__btn" onClick={() => { navigate("/", { replace: true }) }}>to home page</button>
      </div>
   );
}

export default CoinInfo;