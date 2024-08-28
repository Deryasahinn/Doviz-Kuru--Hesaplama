import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from'axios';

let BASE_URL="https://api.freecurrencyapi.com/v1/latest"
let API_KEY="fca_live_QDlQwyRN2uCovJjIiYYY88CH0JJvi6k6B5QKKnNF"


function Currency() {

    const[amount,setAmount]=useState();
    const[fromCurrency,setFromCurrency]=useState('USD');
    const[toCurrency,setToCurrency]=useState('TRY');
    const[result, setResult]=useState();

    const exchange=async()=>{
     const response= await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)

   const result= (response.data.data[toCurrency]*amount).toFixed(2)
   setResult(result);
       
    }
  return (
    <div style={{fontFamily:'arial'}} className='currency-div' >
        <div style={{marginTop:'-25px', width:'100%',textAlign:'center',backgroundColor:'#D3D3D3' }}>
            <h3  >DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div style={{marginTop:'40px'}}>

        <input
        value={amount}
        onChange={(e)=>setAmount(e.target.value)} 
        type="number" className='amount' />
        <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option' >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight style={{fontSize:25, marginRight:10}} />

        <select onChange={(e)=>setToCurrency(e.target.value)} className='to-currency-option' >
            <option>TRY</option>
            <option>EUR</option>
            <option>USD</option>
        </select>
        <input
        value={result}
        onChange={(e)=>setResult(e.target.value)}

        type="number" className='result' />

        </div>

        <div >
            <button onClick={exchange} className='exchange-button'  >Çevir</button>
            

        </div>
        
    </div>
  )
}

export default Currency