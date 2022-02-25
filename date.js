var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
if (minutos <=9){
    minutos = '0'+ minutos;
}
if(mes <=9){
    mes = '0'+ mes;
}
document.getElementById('current_date').innerHTML = ("Hoje é dia " + dia + "/" + mes + "/" + ano + " -  Agora são " + horas + ":" + minutos +" horário de Brasilia");


setTimeout(function() {
  window.location.reload(1);
}, 60000);