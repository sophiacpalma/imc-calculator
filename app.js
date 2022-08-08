//meu primeiro programa

<meta charset="UTF-8">

<script>
	
	function pulaLinha() {

		document.write("<br>");	
		document.write("<br>");	
	}

	function mostra(frase) {

		document.write(frase);
		pulaLinha();
	}

	function calculaImc(altura, peso) {

		return peso / (altura * altura);
	}

	var nome = prompt("Informe o seu nome");
	var alturaInformada = prompt(nome + ", informe sua altura");

	var altura1 = parseFloat(alturaInformada.replace(",", ".")); //Linha adicionada

	var pesoInformado = prompt(nome + ", informe seu peso");

	var imc = calculaImc(altura1, pesoInformado); //alturaInformada alterado para altura1


	mostra(nome + ", o seu IMC é: " + Math.round(imc) + ".");

	if(imc < 18.5) {

		mostra("Você está abaixo do recomendado");
	}

	if(imc > 35) {

		mostra("Você está acima do recomendado");
	}

	if(imc >= 18.5 && imc <= 35) {

		mostra("Seu IMC está excelente!");
	}

</script>
