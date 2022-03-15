let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = (dataAtual.getMonth() + 1);
let ano = dataAtual.getFullYear();
let horas = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
if (minutos <=9){
    minutos = '0'+ minutos;
}
if(mes <=9){
    mes = '0'+ mes;
}
document.getElementById('current_date').innerText = (`Hoje é dia ${dia} / ${mes} / ${ano} -  Agora são ${horas}: ${minutos} Horário de Brasilia`);

setTimeout(function () {
  window.location.reload(1);
}, 60000)
;







