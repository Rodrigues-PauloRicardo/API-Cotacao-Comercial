fetch (`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`) 
.then((response) =>
response.json()
)

/*.then(data => console.log(data.USDBRL)) ask e bid*/
.then(data => document.getElementById("dolar").innerHTML = (data.USDBRL.ask))
.catch(err => console.log('ERROR 404'))


fetch (`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL`)
.then((r) => 
r.json()
) 
.then(data => document.getElementById("euro").innerHTML = (data.EURBRL.ask))
.catch(err => console.log('ERROR 404'))



