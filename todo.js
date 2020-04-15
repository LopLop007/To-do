
var ul = document.querySelector('#tarefas ul')

var btn_add = document.querySelector('#add-tarefas button')

// Puxa dados do storage se tiver ou gera um vetor vazio
var vetor_tarefas = JSON.parse(localStorage.getItem('lista_tarefas')) || []

function renderizar() {
	
	ul.innerHTML = ''

	// Esse tipo de vetor já retorna o indice em forma de string
	for(tarefas of vetor_tarefas){

		var pos = vetor_tarefas.indexOf(tarefas)
		var tarefa = document.createElement('li')
		tarefa.setAttribute('class','n-tarefas')
		var botao = document.createElement('button')
		botao.setAttribute('onclick',`deletar(${pos})`)
		var texto_bot = document.createTextNode('Excluir tarefa')
		botao.appendChild(texto_bot)
		var texto_tarefa = document.createTextNode(tarefas)
		tarefa.appendChild(texto_tarefa)
		tarefa.appendChild(botao)
		ul.appendChild(tarefa)

	}

}

renderizar()

btn_add.onclick = function(){

	var input = document.querySelector('input[name=msgs]')	
	vetor_tarefas.push(input.value)
	input.value = ''
	renderizar()
	saveToStorage()
}

function deletar(param){ 
	
	// (slice) remove da posição especificada
	vetor_tarefas.splice(param,1)
	renderizar()
	saveToStorage()
}


function saveToStorage(){
	//  JSON.stringify transforma os dados em string
	localStorage.setItem('lista_tarefas', JSON.stringify(vetor_tarefas))

}