# Calculadora de Média de Notas

## Visão Geral
Este projeto é uma página web que calcula a média ponderada das notas de avaliações escolares, incluindo uma nota de simulado que contribui de forma diferenciada para a média final. A aplicação é desenhada para ser simples e intuitiva, proporcionando ao usuário a inserção das notas e a visualização imediata da média calculada.

## Funcionalidades
- **Entrada de Notas**: Os usuários podem inserir as notas de quatro avaliações distintas.
- **Pesos Pré-definidos**: Cada avaliação tem um peso específico já configurado no cálculo da média.
- **Nota do Simulado**: Além das avaliações regulares, é possível adicionar uma nota de simulado que afeta a média final de forma proporcional, baseada em seu peso.

## Como Funciona
A página é composta por campos de entrada onde os usuários podem digitar as notas das avaliações e do simulado. Cada campo de avaliação corresponde a uma parte específica do cálculo da média ponderada. A nota do simulado é tratada de forma especial: ela é proporcional ao valor máximo que pode contribuir para a média. Por exemplo, se o usuário digitar uma nota 10 no simulado, será adicionado 0,5 à média final. Se a nota for 5, será adicionado 0,25, e assim por diante.

### Cálculo da Média
A média é calculada somando o produto das notas pelos seus respectivos pesos e depois dividindo pelo somatório dos pesos. A nota do simulado é convertida em uma contribuição fixa que é somada diretamente à média ponderada das outras notas.

## Tecnologias
- HTML: Estrutura da página
- CSS: Estilização e responsividade da página
- JavaScript: Lógica de cálculo da média e interatividade da página

## Instalação e Uso
Para usar a calculadora de média, simplesmente clone o repositório e abra o arquivo `index.html` em um navegador web. Não há necessidade de um servidor web ou outras dependências.

```bash
git clone https://seu-repositorio-aqui.git
