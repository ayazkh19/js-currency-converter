let jsonCurrency = {
    "rates": {
        "CAD": 1.2857142857,
        "HKD": 7.7506373879,
        "ISK": 125.0925240563,
        "PHP": 48.0549387285,
        "DKK": 6.1213093182,
        "HUF": 294.9008964553,
        "CZK": 21.8093593223,
        "GBP": 0.7425117197,
        "RON": 4.0073196809,
        "SEK": 8.4363845711,
        "IDR": 14164.2980508265,
        "INR": 73.7523645037,
        "BRL": 5.1615264413,
        "RUB": 74.0750884119,
        "HRK": 6.2024015133,
        "JPY": 103.9888148696,
        "THB": 30.1603750308,
        "CHF": 0.8900402994,
        "EUR": 0.8224360556,
        "MYR": 4.0600378321,
        "BGN": 1.6085204375,
        "TRY": 7.7832058557,
        "CNY": 6.5318693972,
        "NOK": 8.7670038654,
        "NZD": 1.4190311703,
        "ZAR": 15.1882556131,
        "USD": 1.0,
        "MXN": 19.828193108,
        "SGD": 1.3328398717,
        "AUD": 1.3477259643,
        "ILS": 3.2667160128,
        "KRW": 1086.109055021,
        "PLN": 3.6819639773
    },
    "base": "USD",
    "date": "2020-12-04"
};


//let baseCurrency = jsonCurrency.base;
//let amount = 500;
//// from japan currency to indian currency
//let fromCurrency = parseFloat(jsonCurrency.rates['JPY']).toFixed(2);
//let toCurrency = parseFloat(jsonCurrency.rates['INR']).toFixed(2);
//let unitFromCurrency = toCurrency / fromCurrency;
//let total = (unitFromCurrency * amount).toFixed(2);

$(document).ready(function () {
    let htmlSelectFrom = $('#from_select');
    let htmlSelectTo = $('#to_select');
    let htmlInputAmount = $('#amount');
    let btn = $('#btn');
    let htmlOutput = $('.output');

    for (let i in jsonCurrency.rates) {
        //        console.log(i, jsonCurrency.rates[i].toFixed(2));
        htmlSelectFrom.append(`<option value="${jsonCurrency.rates[i].toFixed(2)}">${i}</option>`);
        htmlSelectTo.append(`<option value="${jsonCurrency.rates[i].toFixed(2)}">${i}</option>`);
    }


    btn.on("click", function (e) {

        e.preventDefault();
        if ($('.total') != null) {
            $('.total').remove();

        }
        if (htmlInputAmount.val() == '' ||
            htmlSelectFrom.val() == null ||
            htmlSelectTo.val() == null) {
            alert('fields should no be empty');
            return;
        }
        //        console.log(htmlInputAmount.val());
        //        console.log(htmlSelectFrom.val());
        //        console.log(htmlSelectTo.val());
        let amount = parseFloat(htmlInputAmount.val());
        let fromCurrency = parseFloat(htmlSelectFrom.val()).toFixed(2);
        let toCurrency = parseFloat(htmlSelectTo.val()).toFixed(2);
        let unitFromCurrency = toCurrency / fromCurrency;
        let total = (unitFromCurrency * amount).toFixed(2);
        //        console.log(total);
        htmlOutput.append(`<p class="total h5 main_color text-light p-3"><span class="text-warning">${total}</span></p>`);

    });

    $(document).click(function (e) {
        if (e.target.id !== 'btn') {
            if ($('.total') != null) {
                $('.total').remove();
                
            }
        } else {
            return
        }
    });


});
