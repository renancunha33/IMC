 $(imc).ready(function(){
  	$("#calc").click(function(){
  		//var novoItem = $("#item").clone();
vAux1 = $("#alt").clone();
var len = 0;
len = vAux1.length;
vAux2='';
for(i = 0; i < len; i++){
a = vAux1.charAt(i)
if ((a>='0') && (a <='9')) {vAux2 += a};
if ((a ==',')) {vAux2 += '.'};
}
vAux = vAux2;
if (vAux<=0)
{
alert('A altura deve ser maior que 0.');
return false;
}
{
vAux3 = $("#peso").clone();
var len = 0;
len = vAux3.length;
vAux4='';
for(i = 0; i < len; i++){
b = vAux3.charAt(i)
if ((b>='0') && (b <='9')) {vAux4 += b};
if ((b ==',')) {vAux4 += '.'};
}
vAux = vAux4;
if (vAux<=0)
{
alert('O peso deve ser maior do que 0.');
return false;
}
var obj_msg_erro = imc.getElementById('msg_erro');
var msg_erro = '<img src="/home/imc/imagens/loading.gif" width="30" height="30"><br> Calculando...';
obj_msg_erro.innerHTML = msg_erro;
imc.form.submit();
}}
                
               //function verificarTexto(){
    //if (imc.peso.value == ""||imc.){
     //   alert ("Digite um peso para calcular o IMC") 
   // }
//}

                
                
  		// modifica o id do item recem criado
  		//$(novoItem).attr("id","item"+itemCont);
  		//var novoSelect = $(novoItem).children()[1];
  		//$(novoSelect).attr("id","produtoId"+itemCont);
  		//$(novoSelect).attr("name","produtoId"+itemCont);

		//var novoSelect = $(novoItem).children()[3];
  		//$(novoSelect).attr("id","quant"+itemCont);
  		//$(novoSelect).attr("name","quant"+itemCont);

  		//$("#formulario").append(novoItem);
  		//itemCont++;
  		//$("#itemCont").val(itemCont);/*
  	});
  });