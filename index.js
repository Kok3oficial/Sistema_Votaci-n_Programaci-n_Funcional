const resultadosVotacion = {};

function inicializarResultados() {
    candidatos.forEach(candidato => {
        resultadosVotacion[candidato] = 0;
    });
}

function crearBotonesVotacion() {
    const equipos = document.getElementById("votacion-equipos");

    candidatos.forEach(candidato => {
        const button = document.createElement("button");
        button.textContent = candidato;
        button.addEventListener("click", () => votar(candidato));
        equipos.appendChild(button);
    });
}

function votar(candidato) {
    resultadosVotacion[candidato]++;
    console.log(`Voto registrado para ${candidato}`);
    console.log("Resultados de la votación:", resultadosVotacion);
}

const candidatos = ["Fluminense", "Huachipato", "River Plate", "Nacional", "Peñarol", "Alianza de Lima", "Boca Juniors", "Cerro Porteño"];

inicializarResultados();

crearBotonesVotacion();

