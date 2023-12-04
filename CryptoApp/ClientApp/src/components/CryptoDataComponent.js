import React, { useState, useEffect } from 'react';

const CryptoDataComponent = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const response = await fetch('https://localhost:7070/api/CoinCap/getCryptoData');
               
                const data = await response.json();
                setCryptoData(data);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Crypto Data</h1>
            <ul>
                {cryptoData.map((crypto) => (
                    <li key={crypto.id}>
                        <strong>Name:</strong> {crypto.name}, <strong>Price:</strong> {crypto.priceUsd} <strong>Logo: </strong> {<img src={crypto.imageUrl} alt="Girl in a jacket" width="64" height="64"/>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CryptoDataComponent;
