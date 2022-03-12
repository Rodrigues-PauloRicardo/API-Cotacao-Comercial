const myPromiseDolar = fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`) 
.then((response) =>
response.json()
)

/*.then(data => console.log(data.USDBRL)) ask e bid*/
.then(data => document.getElementById("dolar").innerHTML = (data.USDBRL.ask))
 
.catch(err => console.log('ERROR 404'))

const myPromiseEuro = fetch (`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL`)
.then((r) => 
r.json()
) 
.then(data => document.getElementById("euro").innerHTML = (data.EURBRL.ask))
.catch(err => console.log('ERROR 404'))

const myPromiseBitcoin = fetch (`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`) 
.then((r) => 
r.json()
) 
.then(data => document.getElementById("bitcoin").innerHTML = (data.BTCBRL.ask))
.catch(err => console.log('ERROR 404'))

function funcaoClear(){
    localStorage.dolarStorage = 0; 
    document.getElementById('resDolar').innerText = '' ;
    localStorage.euroStorage = 0; 
    document.getElementById('resEuro').innerText = '' ;
    localStorage.bitcoinStorage = 0; 
    document.getElementById('resBitcoin').innerText = '' ;

    var audio = document.getElementById('chatAudio');
       audio.pause();
        audio.currentTime = 0;

        document.getElementById('dolarDown').innerText = ('')
        document.getElementById('euroDown').innerText = ('')
        document.getElementById('bitcoinDown').innerText = ('')            
}

function valor(){
let inputDolar = document.getElementById("inputDolar").value;
let cleanInputDolar = inputDolar.replace(/[^0-9,]*/g, "").replace(",", ".");
let valorDigitadoDolar = parseFloat(cleanInputDolar);
localStorage.dolarStorage = valorDigitadoDolar;

let inputEuro = document.getElementById("inputEuro").value;
let cleanInputEuro = inputEuro.replace(/[^0-9,]*/g, "").replace(",", ".");
let valorDigitadoEuro = parseFloat(cleanInputEuro);
localStorage.euroStorage = valorDigitadoEuro;

let inputBitcoin = document.getElementById("inputBitcoin").value;
let cleanInputBitcoin = inputBitcoin.replace(/[^0-9,]*/g, "").replace(",", ".");
let valorDigitadoBitcoin = parseFloat(cleanInputBitcoin);
localStorage.bitcoinStorage = valorDigitadoBitcoin;

window.location.reload()  
}
myPromiseDolar.then((data) => {
    var dolar = (parseFloat(data))
    var valorMinimoDolar = localStorage.dolarStorage; 
   document.getElementById('resDolar').innerText = "Último valor escolhido-Dolar R$ " + valorMinimoDolar;
        if(dolar < valorMinimoDolar){
            console.log("ATENÇÃO - Dólar Baixou para " + dolar)
            var audio = document.getElementById('chatAudio');
            audio.play()
            document.getElementById('dolarDown').innerText = ('ATENÇÃO DÓLAR BAIXOU!!')
       }    
    })   
    myPromiseEuro.then((data) => {
        var euro = (parseFloat(data))
        var valorMinimoEuro = localStorage.euroStorage; 
        document.getElementById('resEuro').innerText = "Último valor escolhido-Euro R$ " + valorMinimoEuro;
            if(euro < valorMinimoEuro){
                console.log("ATENÇÃO - Euro Baixou para " + euro)
                var audio = document.getElementById('chatAudio');
                audio.play()
                document.getElementById('euroDown').innerText = ('ATENÇÃO EURO BAIXOU!!')
            }    
        })
        myPromiseBitcoin.then((data) => {
            var bitcoin = (parseFloat(data))
            var valorMinimoBitcoin = localStorage.bitcoinStorage; 
            document.getElementById('resBitcoin').innerText = "Último valor escolhido-Bitcoin R$ " + valorMinimoBitcoin;
                if(bitcoin < valorMinimoBitcoin){
                    console.log("ATENÇÃO - Bitcoin Baixou para " + bitcoin)
                    var audio = document.getElementById('chatAudio');
                    audio.play()
                    document.getElementById('bitcoinDown').innerText = ('ATENÇÃO BITCOIN BAIXOU!!')
                }    
            })

           


           