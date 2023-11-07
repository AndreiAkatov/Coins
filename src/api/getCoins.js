import axios from "axios"; 

const url = 'https://api.coinranking.com/v2'; 
const key = 'coinranking21981c1f81c9eddd2622d88f6f0542fc001258d33e763f4e'; 
 
export const getCoins = async () => { 
  const options = { 
    headers: { 
      "Content-Type": "application/json", 
      "x-access-token": key, 
    }, 
  }; 
 
  try { 
    const response = await axios.get(url + "/coins", options); 
    return response.data.data; 
  } catch (error) { 
    console.log(error); 
  } 
};
  
