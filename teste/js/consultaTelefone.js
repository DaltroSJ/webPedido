function carregarDados(){
		
		var t = window.document.getElementById('telefone')
	
		const cliente = {
		
			codigo: 0,
			nome: '',
			telefone: t.value
		
		}
	
		const json_envio = JSON.stringify(cliente)
	
		area_saida.innerText = cliente.telefone
		area_saida2.innerText = json_envio
	}
	
	function verificaResposta(){
		
		console.log(this.responseText)
		
	}
	
	function enviarRequisicao(){
		
		carregarDados();
		
		const requisicao = new XmlHttpRequest();
		
		requisicao.addListener("load", verificaResposta);
		
		requisicao.
		
		requisicao.open("GET", "http://127.0.0.1:8080/...");
		
		requisicao.send();
		
		verificaResposta();
		
		alert(requisicao.readyState);
		
	}
	
	var requisicao = $.ajax({
		
		url: "http://localhost:8080/cliente/",
		type: "GET",
		data: json_envio,
		dataType: "application/json"
		
	});
	
	requisicao.done(function(resposta){
		
		console.log(resposta)
		
	});
	
	requisicao.fail(function(respostaXHR, status){
		
		console.log("Requisicao Falhou: "+ status)
		
	});
	
	requisicao.always(function(){
		
		console.log("Completa")
		
	});
	