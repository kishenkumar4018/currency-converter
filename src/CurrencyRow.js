import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions, 
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props
    return (
        <div>
           <input type="number" className="input" value={amount} onChange={onChangeAmount}/> 
           <select value={selectedCurrency}  onChange={onChangeCurrency} >
               {currencyOptions.map(option => (
                   
                   <option key={option} vaule={option}>{option}</option>
               ))}
           </select>
        </div>
    )
}
