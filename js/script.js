document.getElementById("calcular").onclick = function () {

    var nome = document.getElementById("txtNome").value
    var idade = document.getElementById("txtIdade").value
    var altura = document.getElementById("txtAltura").value
    var peso = document.getElementById("txtPeso").value

    if (altura != "" && peso != "" && idade != "" && nome != "") {

        var IMC = peso / (altura * altura)
        IMC = IMC.toFixed(2);

        var resultado = document.getElementById("resultado")
        resultado.style.display = "block"

        var txt_situacao = document.getElementById("situacao")
        var txtImc = document.getElementById("IMC")

        if (IMC < 18, 5) {
            txt_situacao.innerHTML = "Abaixo do peso"
        }
        else if (IMC > 18, 5 && IMC < 25) {
            txt_situacao.innerHTML = "Peso Ideal"
        }
        else if (IMC > 25 && IMC < 30) {
            txt_situacao.innerHTML = "Sobrepeso"
        }
        else if (IMC > 30 && IMC < 35) {
            txt_situacao.innerHTML = "Obesidade Grau 1"
        }
        else if (IMC > 35 && IMC < 40) {
            txt_situacao.innerHTML = "Obesidade Grau 2 (Severa)"
        }
        else {
            txt_situacao.innerHTML = "Obesidade Grau 3 (Mórbida)"
        }

        txtImc.innerHTML = IMC
    }
    else {
        alert("Preencha todos os campos")
    }
}
document.getElementById("Limpar").onclick = function () {
    var resultado = document.getElementById("resultado")
    resultado.style.display = "none"
}
