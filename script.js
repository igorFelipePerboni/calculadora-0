function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (!altura || !peso) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
    resultado.classList.add('show');
}
