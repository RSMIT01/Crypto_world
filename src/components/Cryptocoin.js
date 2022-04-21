import React from 'react'
import './cryptocoin.css'
const Cryptocoin = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange,
  }) => {
    return (
        <div className="coin">
            <img src={image} alt={`${name}`} className="logo" />
            <div className="coinwrapper">
                <h1 className="name">{name}</h1>
                <p className="symbol">{symbol}</p>
            </div>
            <p className="price">${price.toLocaleString()}</p>
            <p className="marketcap">Market Cap: ${marketcap.toLocaleString()}</p>
            <p className="volume">Volume (24H): ${volume.toLocaleString()}</p>
            {priceChange<0 ?(
                <div className="pricedown">
                <i className="fas fa-angle-down fa-2x"></i>
                <p className="priceChange">{priceChange.toFixed(2)}%</p>
              </div> 
            ):(
                <div className="priceup">
                <i className="fas fa-angle-up fa-2x"></i>
                <p className="priceChange">{priceChange.toFixed(2)}%</p>
              </div>
            )}
            
        </div>
    )
}

export default Cryptocoin;
