document.getElementById('mediaForm').addEventListener('submit', function(e) {
    e.preventDefault();
});

// Função para substituir vírgula por ponto e converter para float
function parseNota(value) {
    return parseFloat(value.replace(',', '.')) || 0;
}

function calcularMedia() {
    var nota1 = parseNota(document.getElementById('nota1').value);
    var nota2 = parseNota(document.getElementById('nota2').value);
    var nota3 = parseNota(document.getElementById('nota3').value);
    var nota4 = parseNota(document.getElementById('nota4').value);
    var notaSimulado = parseNota(document.getElementById('notaSimulado').value);

    if (notaSimulado > 10) {
        alert("A nota do simulado deve ser entre 0 e 10.");
        return;
    }
    if ([nota1, nota2, nota3, nota4].some(nota => nota > 10)) {
        alert("As notas das avaliações devem ser entre 0 e 10.");
        return;
    }

    var peso1 = 2.0;
    var peso2 = 2.0;
    var peso3 = 2.0;
    var peso4 = 4.0;
    var pesoSimulado = 0.5;

    var somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4);
    var somaPesos = peso1 + peso2 + peso3 + peso4;
    var media = somaNotas / somaPesos;

    var contribuicaoSimulado = (notaSimulado / 10) * pesoSimulado;
    var mediaFinal = media + contribuicaoSimulado;

    document.getElementById('resultado').innerHTML = 'Média: ' + mediaFinal.toFixed(2);

    var mensagemElement = document.getElementById('mensagem');
    if (mediaFinal >= 7) {
        mensagemElement.innerHTML = "Booa, bora para próxima!";
        mensagemElement.className = "mensagem-sucesso"; // Usa classe para estilo
    } else {
        mensagemElement.innerHTML = "Fudeu, vamo correr atrás!";
        mensagemElement.className = "mensagem-alerta"; // Usa classe para estilo
    }
}

// Adiciona o evento de 'input' a todos os campos de nota
document.getElementById('nota1').addEventListener('input', calcularMedia);
document.getElementById('nota2').addEventListener('input', calcularMedia);
document.getElementById('nota3').addEventListener('input', calcularMedia);
document.getElementById('nota4').addEventListener('input', calcularMedia);
document.getElementById('notaSimulado').addEventListener('input', calcularMedia);
