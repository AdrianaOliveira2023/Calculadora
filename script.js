// Função para inserir um número ou operador no visor de resultados
function insert(num){   
    var numero = document.getElementById('resultado').innerHTML;     // Obter o conteúdo atual do visor de resultados    
    document.getElementById('resultado').innerHTML = numero + num;   // Atualizar o visor de resultados anexando o número ou operador clicado    
}

// Função para limpar o visor de resultados
function clean() {   
    document.getElementById('resultado').innerHTML = "";               // Definir o conteúdo do visor de resultados como uma string vazia
}

// Função para apagar o último caractere do visor de resultados
function back() {    
    var resultado = document.getElementById('resultado').innerHTML;   // Obtém o conteúdo atual do elemento 'resultado'.   
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);  // Remove o último caractere.
}

// Função para calcular e exibir o resultado
function calculate() {    
    var resultadoElement = document.getElementById('resultado');       // Obter o conteúdo atual do visor de resultados
    var resultado = resultadoElement.innerHTML.trim();                    // separa a expresão e pedacinhos
    var ultimoCaractereNumerico = /\d$/.test(resultado);                // verifica se o último numero é um número
    
    // Verificar se há algum conteúdo no visor de resultados
    if(ultimoCaractereNumerico){        
        resultadoElement.innerHTML = eval(resultado) .toFixed(2);   // Se houver conteúdo, avaliar a expressão e exibir o resultado
    }
    
    else{    // Se não houver conteúdo, definir o conteúdo do visor de resultados como uma string vazia             
        alert("erro")
        limpar();
    }
} 