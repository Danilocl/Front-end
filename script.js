function valida() {
		var control = true;

		var senha = formNovo.senha.value;
		var senha2 = formNovo.senha2.value;
		var cep = formNovo.cep.value;
		

		if (senha != senha2) {
			alert("Senhas diferentes")
			formNovo.senha.focus();
			control = false;
		};

		if(cep < 9) {
			alert("cep inválido");
			formNovo.cep.focus();
			control = false;		
		};
		
		return control;
	}

function formatarcep(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
  
}

function validaRadio() {
  if (document.formNovo.sexo[0].checked == false 
    && document.form1.sexo[1].checked == false) {
    alert('Por favor, selecione o sexo.');
    return false;
  }
  return true;
}

