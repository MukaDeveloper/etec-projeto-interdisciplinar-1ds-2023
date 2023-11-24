function calcular(event) {
    event?.preventDefault();

    var a = parseFloat(document.getElementById('idtextA').value);
    var b = parseFloat(document.getElementById('idtextB').value);
    var c = parseFloat(document.getElementById('idtextC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return alert("Insira números válido nos valores.");
    }

    var delta = b * b - 4 * a * c;
    deltaRes.textContent = `Δ = ${delta}`;

    if (delta < 0) {
        bhaskaraRes.textContent = "Não há valor real para essa equação.";
    } else {
        var x1res = (-b + Math.sqrt(delta)) / (2 * a);
        var x2res = (-b - Math.sqrt(delta)) / (2 * a);

        x1.textContent = `x1 = ${x1res.toFixed(2)}`;
        x2.textContent = `x2 = ${x2res.toFixed(2)}`;
    }
}

function newsletter() {
    const inputEmail = document.getElementById('form_newsletter_inputEmail').value;
    var regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    if(inputEmail.value === null || !regex.test(inputEmail) || inputEmail.value === undefined) {
        const feedback = document.getElementById('form_newsletter_feedback');
        feedback.classList.remove("hidden");
    }
}

document.getElementById('limparBtn').addEventListener('click', function () {
    x1.textContent = ` `;
    x2.textContent = ` `;
})

document.getElementById('idtextA').addEventListener('keydown', function (event) {
    if (event.key === "Enter") calcular();
})

document.getElementById('idtextB').addEventListener('keydown', function (event) {
    if (event.key === "Enter") calcular();
})

document.getElementById('idtextC').addEventListener('keydown', function (event) {
    if (event.key === "Enter") calcular();
})