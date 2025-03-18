// Array para almacenar nombres de amigos
let amigos = [];

// Agregar amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Campo vacío
    if (nombreAmigo === "") {
        alert("Inserte un nombre.");
        return;
    }

    // Nombre sin duplicar
    if (amigos.includes(nombreAmigo)) {
        alert(`El ${nombreAmigo} ya está en la lista`);
        return;
    }

    // Agregar nombre al array amigos
    amigos.push(nombreAmigo);

    // Limpiar input
    inputAmigo.value = "";

    // Actualizar la lista en la interfaz
    actualizarLista();
}

// Actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Seleccionar un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}