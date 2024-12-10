const form = document.querySelector('form');
const btnSubmit = document.getElementById('submit');
const btnClear = document.getElementById('clear');

let nomi = [];

window.onload = function () {
    const nomiSalvati = localStorage.getItem('tuttiText');
    if (nomiSalvati) {
        console.log(nomiSalvati);
        nomi = JSON.parse(nomiSalvati);  // Parse dei dati salvati

        const labelText = document.getElementById('labelForm');
        labelText.textContent = nomi[nomi.length - 1] || "Nomi:";  // Mostra l'ultimo nome

        const ul = document.getElementById('textLista');
        nomi.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element;
            ul.appendChild(li);
        });
    } else {
        console.log('Nessun nome salvato nel localStorage.');
    }
}

btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    const inputText = document.getElementById('inputText');
    // Controlla se il campo è vuoto
    if (inputText.value.trim() !== '') {
        nomi.push(inputText.value.trim());


        localStorage.setItem('tuttiText', JSON.stringify(nomi));


        const labelText = document.getElementById('labelForm');
        labelText.textContent = nomi[nomi.length - 1];


        const ul = document.getElementById('textLista');
        const li = document.createElement('li');
        li.textContent = inputText.value.trim();
        ul.appendChild(li);

        // Reset del modulo
        form.reset();
    } else {
        alert("Inserisci un nome!");
    }
});


btnClear.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem('tuttiText');
    nomi = [];
    const ul = document.getElementById('textLista');
    ul.innerHTML = '';
    const labelText = document.getElementById('labelForm');
    labelText.textContent = "Nomi:";
});
