function geraJson() {

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

function cadastraCliente() {

	var url = 'http://localhost:8080/cliente';

	var j = geraJson();

	var xhr = new XMLHttpRequest();

	xhr.open('POST', url, true);

	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status === 201) {

			var resposta = xhr.responseText;

			console.log('Requisição Bem sucedida: \n' + resposta);

		} else if(xhr.readyState === 4 && xhr.status === 500) {

			var resposta = xhr.responseText;

			console.log('Erro de Servidor:');

		}
	}

	xhr.send(j);



}