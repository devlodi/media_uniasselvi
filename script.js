document.getElementById('mediaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Função para substituir vírgula por ponto e converter para float
    function parseNota(value) {
        return parseFloat(value.replace(',', '.')) || 0;
    }

    // Notas inseridas pelo usuário, utilizando a função parseNota
    var nota1 = parseNota(document.getElementById('nota1').value);
    var nota2 = parseNota(document.getElementById('nota2').value);
    var nota3 = parseNota(document.getElementById('nota3').value);
    var nota4 = parseNota(document.getElementById('nota4').value);
    var notaSimulado = parseNota(document.getElementById('notaSimulado').value); // Nota de simulado

    // Verificação das notas
    if (notaSimulado > 10) { // Garante que a nota do simulado não exceda 10
        alert("A nota do simulado deve ser entre 0 e 10.");
        return;
    }
    if ([nota1, nota2, nota3, nota4].some(nota => nota > 10)) {
        alert("As notas das avaliações devem ser entre 0 e 10.");
        return;
    }

    // Pesos pré-definidos
    var peso1 = 2.0;
    var peso2 = 2.0;
    var peso3 = 2.0;
    var peso4 = 4.0;
    var pesoSimulado = 0.5; // Peso máximo para a nota do simulado

    // Cálculo da média sem considerar a nota do simulado
    var somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4);
    var somaPesos = peso1 + peso2 + peso3 + peso4;
    var media = somaNotas / somaPesos;

    // Cálculo da contribuição proporcional da nota do simulado
    var contribuicaoSimulado = (notaSimulado / 10) * pesoSimulado;

    // Soma da contribuição do simulado à média
    var mediaFinal = media + contribuicaoSimulado;

    document.getElementById('resultado').innerHTML = 'Média: ' + mediaFinal.toFixed(2);
});
