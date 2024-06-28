// Generar códigos válidos y de premio
const validCodes = new Set();
const usedCodes = new Set();
const premioCodes = [];

// Generar códigos válidos prem100 hasta prem100000
for (let i = 100; i <= 100000; i++) {
    validCodes.add(`prem${i}`);
    premioCodes.push(`AR${String(i).padStart(5, '0')}`);
}

// Función para canjear código
document.getElementById('canjearBtn').addEventListener('click', () => {
    const codigoInput = document.getElementById('codigo');
    const codigo = codigoInput.value.trim().toLowerCase(); // Convertir a minúsculas

    if (validCodes.has(codigo) && !usedCodes.has(codigo)) {
        usedCodes.add(codigo);

        const randomIndex = Math.floor(Math.random() * premioCodes.length);
        const codigoPremio = premioCodes.splice(randomIndex, 1)[0];
        const premioGanado = obtenerPremioAleatorio();

        const fechaActual = new Date();
        const fechaValida = new Date(fechaActual.setMonth(fechaActual.getMonth() + 1)).toLocaleDateString();

        mostrarMensajePremio(premioGanado, codigoPremio, fechaValida);
        codigoInput.value = ''; // Limpiar el campo de código después de canjear
    } else {
        alert('Código inválido o ya utilizado.');
    }
});

// Función para obtener un premio aleatorio entre los definidos
function obtenerPremioAleatorio() {
    const premios = ["10% de descuento", "5% de descuento", "Regalo Sorpresa"];
    return premios[Math.floor(Math.random() * premios.length)];
}

// Función para mostrar el mensaje de premio
function mostrarMensajePremio(premio, codigoPremio, fechaValida) {
    const mensaje = document.getElementById('mensaje');
    const premioSpan = document.getElementById('premio');
    const codigoCanjeSpan = document.getElementById('codigoCanje');
    const fechaCanjeSpan = document.getElementById('fechaCanje');

    premioSpan.textContent = premio;
    codigoCanjeSpan.textContent = codigoPremio;
    fechaCanjeSpan.textContent = `Promoción válida hasta el día ${fechaValida}`; // Mensaje con texto

    mensaje.classList.remove('oculto');
    mensaje.classList.add('visible');
}
