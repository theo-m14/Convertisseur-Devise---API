let getDeviseToConvert = document.getElementById('deviseToConvert');
let getAmountDevise = document.getElementById('numberToConvert');
let getFinalDevise = document.getElementById('deviseResult');
let url ;
let getResult = document.getElementById('result');

document.getElementById('convertBtn').addEventListener('click', function(){
    url = `https://freecurrencyapi.net/api/v2/latest?apikey=c41d1e40-5c1e-11ec-9f38-299e83188014&base_currency=${getDeviseToConvert.value}`;
    fetch(url)
        .then(res => res.json() )
        .then(data => {
            getResult.innerText = data.data[getFinalDevise.value]*getAmountDevise.value;
        })
        .catch(err => console.log("Code de l'erreur:  " + err))
})