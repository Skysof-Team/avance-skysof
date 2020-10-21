
$(document).ready(function(){
    Reloj();
});
function Reloj(){
    var momentoActual = new Date();
    var dia = momentoActual.getDate();
    var año = momentoActual.getFullYear();
    var mes = momentoActual.getMonth()+1;
    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    var segundo = momentoActual.getSeconds();
    var horaImprimible = hora + " : " + minuto + " : " + segundo + " | " + dia+"/"+mes+"/"+año;
    $("#reloj").text(horaImprimible);    
    setTimeout("Reloj()",1000);
}