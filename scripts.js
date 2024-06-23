// Generar códigos válidos y de premio
const validCodes = new Set();
const usedCodes = new Set();
const premioCodes = [];

for (let i = 100; i <= 100000; i++) {
    validCodes.add(`prem${i}`);
    premioCodes.push(`AR${String(i).padStart(5, '0')}`);
}

// Función para canjear código
document.getElementById('canjearBtn').addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value.trim();

    if (validCodes.has(codigo) && !usedCodes.has(codigo)) {
        usedCodes.add(codigo); // Agregar el código a los usados para no permitir reutilización

        const randomIndex = Math.floor(Math.random() * premioCodes.length);
        const codigoPremio = premioCodes.splice(randomIndex, 1)[0];
        const premios = ["10% de descuento", "5% de descuento", "Regalo Sorpresa"];
        const premioGanado = premios[Math.floor(Math.random() * premios.length)];

        const fechaActual = new Date();
        const fechaValida = new Date(fechaActual.setMonth(fechaActual.getMonth() + 1)).toLocaleDateString();

        document.getElementById('premio').textContent = premioGanado;
        document.getElementById('codigoCanje').textContent = codigoPremio;
        document.getElementById('fechaCanje').textContent = fechaValida;

        const mensaje = document.getElementById('mensaje');
        mensaje.classList.remove('oculto');
        mensaje.classList.add('visible');
    } else {
        alert('Código inválido o ya utilizado.');
    }
});
