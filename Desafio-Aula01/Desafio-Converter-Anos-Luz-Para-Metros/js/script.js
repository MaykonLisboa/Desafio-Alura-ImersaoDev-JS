function converterAnosLuzParaMetros() {
    const anosLuz = parseFloat(document.getElementById("anosLuz").value);

    if (isNaN(anosLuz)) {
        alert("Por favor, insira um número válido para anos-luz.");
        return;
    }

    const segundosEmUmAno = 31536000;
    const velocidadeDaLuz = 300000;
    const distanciaMetros = anosLuz * segundosEmUmAno * velocidadeDaLuz;

    document.getElementById("resultado").innerHTML = `A distância de ${anosLuz} anos-luz é aproximadamente ` +
        `${distanciaMetros.toFixed(0)} metros, considerando a velocidade da luz.`;
}