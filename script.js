// Vetor de exemplo com o faturamento diário
const faturamentoDiario = [
    1000, 1500, 2000, 1800, 0, 0, 2500, 
    3000, 2700, 2000, 1900, 2200, 0, 0, 
    2300, 2100, 1700, 2400, 2800, 3100, 2900, 
    2600, 2000, 1800, 2200, 2500, 2700, 3000, 2500, 2300
];

function analisarFaturamento(faturamento) {
    // Filtra dias sem faturamento
    const diasComFaturamento = faturamento.filter(valor => valor > 0);

    // Calcula o menor valor de faturamento
    const menorFaturamento = Math.min(...diasComFaturamento);

    // Calcula o maior valor de faturamento
    const maiorFaturamento = Math.max(...diasComFaturamento);

    // Calcula a média mensal (considerando apenas dias com faturamento)
    const mediaMensal = diasComFaturamento.reduce((sum, valor) => sum + valor, 0) / diasComFaturamento.length;

    // Conta dias acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const resultado = analisarFaturamento(faturamentoDiario);

console.log(`Menor valor de faturamento: R$ ${resultado.menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${resultado.maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
