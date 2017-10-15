

function calcula() {

	var operacao = document.getElementById('operacao').value;

	var num1 = document.getElementById('num1').value;

	var num2 = document.getElementById('num2').value;

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	var resultado = null;

	if(num1 == '' || num1 == null) {

		alert('Por favor digite um número');
	}

	if(num2 == '' || num2 == null) {

		alert('Por favor digite um número');
	}

	switch(operacao) {

		case '1': 

		 resultado = num1 - num2;

		break;

		case '2': 

		 resultado = num1 + num2;
		
		break;

		case '3': 

		 resultado = num1 * num2;

		break;

		case '4': 

		 resultado = num1/num2;

		break;

		default: 

		alert('opção inválida');

		return false;
	}

	

	document.getElementById('resultado').value = resultado;

	


	
}