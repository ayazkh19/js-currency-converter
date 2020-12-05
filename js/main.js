
let baseCurrency = jsonCurrency.base;
let amount = 500;
// from japan currency to indian currency
let fromCurrency = parseFloat(jsonCurrency.rates.JPY).toFixed(2);
let toCurrency = parseFloat(jsonCurrency.rates.INR).toFixed(2);
let unitFromCurrency = toCurrency/fromCurrency;
let total = (unitFromCurrency * amount).toFixed(2);

$(document).ready(function () {
    console.log(jsonCurrency);
    console.log(baseCurrency);
    console.log("from ", fromCurrency);
    console.log("to ", toCurrency);
    console.log('total ', total);
});
