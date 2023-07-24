/*function consultarCadastro(){
	
	var tel = window.document.getElementById('telefone').value;
	
	var xhr = new XMLHttpRequest();
	
	var url = 'http://localhost:8080/cliente/'+tel;
	
	xhr.open('GET', url, true);
	
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET');
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState === 4 && xhr.status === 200){
			
			var resposta = JSON.parse(xhr.responseText);
			
		}else{
			
			console.log('Erro na requisição');
			
		}
		
	};
	
	xhr.send();
}
*/

function consultarCadastro(){

	var tel = window.document.getElementById('telefone').value;
	
	var url = 'http://localhost:8080/cliente/'+tel;

	var xhr = new XMLHttpRequest();
	
	$.ajax({
		
		url: url,
		type: 'GET',
		dataType: 'json',
		success: function(resposta){
			
			console.log(resposta);
			
		},
		error: function(resposta){
			
			console.log(xhr, resposta, except);
			
		}
		
	});
	
}
