import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Cryptocoin from './components/Cryptocoin';

function App() {
  
   const[coins,setCoins]=useState([])
   const [search, setSearch] = useState("");

   useEffect(() => {
     axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false")
     .then((res)=>{
       setCoins(res.data);
       console.log(res.data);
     })
     .catch((err)=>{
       console.log(err);
     })
   }, [])

  const inputChange=(e)=>{
    setSearch(e.target.value);
  };
 
  const searchedcoins=coins.filter((coin)=>{
   return coin.name.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <>
    
    <div className="Topbar">
       <h1><i className="fab fa-hive"></i>Crypto</h1>
       <form>
         <input className="inputfield"  onChange={inputChange} type="text" placeholder="search currency"/>
       </form>
    </div>
      <div className="boxcontaiber">
         {searchedcoins.map(( coin)=>{
           return(
             <Cryptocoin  key={coin.id}
             name={coin.name}
             price={coin.current_price}
             symbol={coin.symbol}
             marketcap={coin.market_cap}
             volume={coin.total_volume}
             image={coin.image}
             priceChange={coin.price_change_percentage_24h} />
           )
         })}
      </div>
      
    </>
  );
}

export default App;
