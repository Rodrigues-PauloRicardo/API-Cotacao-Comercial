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

myPromiseDolar.then((data) => {
    var dolar = (parseFloat(data))
    var valorMinimo = 5.1725; 
        if(dolar < valorMinimo){
            console.log("ATENÇÃO - Dólar Baixou para " + dolar)
        }    
    })
    myPromiseEuro.then((data) => {
        var euro = (parseFloat(data))
        var valorMinimo = 5.8785; 
            if(euro < valorMinimo){
                console.log("ATENÇÃO - Euro Baixou para " + euro)
            }    
        })
        myPromiseBitcoin.then((data) => {
            var bitcoin = (parseFloat(data))
            var valorMinimo = 227.7436; 
                if(bitcoin < valorMinimo){
                    console.log("ATENÇÃO - Bitcoin Baixou para " + bitcoin)
                }    
            })










 

