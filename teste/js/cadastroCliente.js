function geraJson(){
	
	var codigo = window.document.getElementById('codigo').value;
	var nome = window.document.getElementById('nome').value;
	var telefone = window.document.getElementById('telefone').value;
	
	var cliente = {
		
		codigo: codigo,
		nome: nome,
		telefone: telefone
		
	}
	
	var stringJson = JSON.stringify(cliente);
	
	return stringJson;
	
}

function cadastraCliente(){
	
	var url = 'http://127.0.0.1:8080/cliente';
	var j = geraJson();
	
	var xhr = new XMLHttpRequest();
	
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST');
	
	$.ajax({
		
		url: url,
		xhr: xhr,
		type: 'POST',
		dataType: 'json',
		data: j,
		success: function(resposta){
			
			console.log(resposta);
			
		},
		error: function(resposta){
			
			console.log(resposta + j);
			
		}

	});
	
}