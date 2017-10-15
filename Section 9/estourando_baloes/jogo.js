
var timerId = null; // armazena a função timeout

function iniciajogo() {
	//armazena o nível escolhido
	var url = window.location.search;

	//remove o ?
	var nivel_jogo = url.replace("?","");
	var qtde_baloes = url.replace("?","");	
	//armazena o tempo
	var tempo_segundo = 0;

	//1 fácil -> 120 segundos

	//2 normal -> 60 segundos

	//3 segundos -> 30 segundos

	if(nivel_jogo == 1) {

		tempo_segundo = 120;
		qtde_baloes = 30;
		
	}

	if(nivel_jogo == 2) {

		tempo_segundo = 60;		
		qtde_baloes = 60;
		
	}

	if(nivel_jogo == 3) {

		tempo_segundo = 30;
		qtde_baloes = 80;


	}


	//pega a id do cronômetro e atribui ao tempo
	document.getElementById('cronometro').innerHTML = tempo_segundo;

	

	baloes(qtde_baloes);

	//imprimir baloes inteiros
	//atribui a quantidade de baloes a id de baloes inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	//balões estourados começa com zero
	document.getElementById('baloes_estourados').innerHTML = 0;
	//chama a function de baixo e passa o tempo como paâmetro
	contagem_tempo(tempo_segundo + 1);

}	
	//realiza a contagem regressiva do tempo
	function contagem_tempo(segundos) {

		segundos = segundos - 1;		
		//verifica se o tempo chegou a zero
		if(segundos == -1) {
			//para a execução da função "setTimeout"
			clearTimeout(timerId); 
			gameOver();
			return false;
		}

		//atribui a quantidade de baloes a id de baloes inteiros
		document.getElementById('cronometro').innerHTML = segundos;
		//function que cria a contagem regressiva
		timerId = setTimeout("contagem_tempo("+segundos+")",1000);

	}
	
	//gera os balões
	function baloes(qtde_baloes) {
		//loop que cria os balões enquanto for menor que a qtde_baloes
		for (var i = 1; i <= qtde_baloes; i++) {
			//cria um elememento img e atribui a variável
			var balao = document.createElement("img");
			//diz o endereco da imagem
			balao.src = 'imagens/balao_azul_pequeno.png';
			//um dos jeito de usar o css
			balao.style.margin = '10px';
			balao.id = 'b' + i;
			//chama a function estourar()
			balao.onclick = function() {estourar(this); };
			//concatena os balões ao cenario
			document.getElementById("cenario").appendChild(balao);
		}

	}

	//function que irá trocar a imagem do balão inteiro pela a do estourado
	//dando a ilusão de que o mesmo foi estourado
	function estourar(elemento) {

		var id_balao = elemento.id;

		document.getElementById(id_balao).setAttribute("onclick", ""); 
		document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';		


		pontuacao(-1);

	}
	//armazena e exibi a pontução
	function pontuacao(acao) {
		//recupera os dados do span
		var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
		var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;
		//converto para int
		baloes_inteiros = parseInt(baloes_inteiros);
		baloes_estourados = parseInt(baloes_estourados);

		baloes_inteiros = baloes_inteiros + acao;
		baloes_estourados = baloes_estourados - acao;

		document.getElementById("baloes_inteiros").innerHTML = baloes_inteiros;
		document.getElementById("baloes_estourados").innerHTML = baloes_estourados;

		situacao(baloes_inteiros);		

	}

	function situacao(baloes_inteiros) {

		if(baloes_inteiros==0) {
			alert("Parabéns");
			para_jogo();
		}		

	}

	function remove_eventos_baloes() {
    var i = 1; //contado para recuperar balões por id
    
    //percorre o lementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('b'+i)) {
        //retira o evento onclick do elemnto
        document.getElementById('b'+i).onclick = '';
        i++; //faz a iteração da variávei i
    	}
	}

	function parar_jogo() {
		clearTimeout(timerId);
	}

	function gameOver() {		
		remove_eventos_baloes();
		alert("Fim de Jogo");
		
	}



