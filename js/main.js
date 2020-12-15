let jsonCurrency = null;

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

    // calls for the api to fetch currency data
    $.ajax({
        url: "https://api.exchangeratesapi.io/latest?base=USD",
        dataType: "json",
        type: "GET",

        success: function (data) {
            jsonCurrency = data;
            console.log(jsonCurrency.rates);
            //            ajaxCompleted = false;
        },
        error: function (err) {
            console.log('ERROR', err);
        },
        complete: function () {
            console.log('ajax is completed');
            ajaxCompleted();
        }
    });

    function ajaxCompleted() {
        // if somehing bad happens
        if(jsonCurrency === null){
            alert('some error happened, please try later');
            return;
        }
        for (let i in jsonCurrency.rates) {
            //        console.log(i, jsonCurrency.rates[i].toFixed(2));
            htmlSelectFrom.append(`<option value="${i}-${jsonCurrency.rates[i].toFixed(2)}">${i}</option>`);
            htmlSelectTo.append(`<option value="${i}-${jsonCurrency.rates[i].toFixed(2)}">${i}</option>`);
        }
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
        let fromData = htmlSelectFrom.val().split('-', 2);
        let toData = htmlSelectTo.val().split('-', 2);
        //        console.log(fromData, toData);
        //        return;
        let fromCurrency = parseFloat(fromData['1']).toFixed(2);
        let toCurrency = parseFloat(toData['1']).toFixed(2);
        //        console.log(fromCurrency, toCurrency);
        let unitFromCurrency = toCurrency / fromCurrency;
        let total = (unitFromCurrency * amount).toFixed(2);
        //        console.log(total);
        htmlOutput.append(`<p class="total h5 main_color text-light p-3"><span class="text-warning">${amount} ${fromData['0']} = ${total} ${toData['0']}</span></p>`);

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
