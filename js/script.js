function calcular(event) {
    event.preventDefault();

    var a = parseFloat(document.getElementById('idtextA').value);
    var b = parseFloat(document.getElementById('idtextB').value);
    var c = parseFloat(document.getElementById('idtextC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return alert("Insira números válido nos valores.");
    }

    var delta = b * b - 4 * a * c;
    deltaRes.textContent = `Δ = ${delta}`;

    if (delta < 0) {
        bhaskaraRes.textContent = "Não há valor real para essa equação."
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

        bhaskaraRes.textContent = `x1 = ${x1.toFixed(2)}  /  x2 = ${x2.toFixed(2)}`;
    }
}