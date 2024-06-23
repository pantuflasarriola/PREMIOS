// Generar códigos válidos y de premio
const validCodes = new Set();
const usedCodes = new Set();
const premioCodes = [];

for (let i = 1; i <= 10000; i++) {
    validCodes.add(`prem${String(i).padStart(4, '0')}`);
    premioCodes.push(`AR${String(i).padStart(4, '0')}`);
}

// Función para canjear código
document.getElementById('canjearBtn').addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value.trim();

    if (validCodes.has(codigo) && !usedCodes.has(codigo)) {
        usedCodes.add(codigo);

        const randomIndex = Math.floor(Math.random() * premioCodes.length);
        const codigoPremio = premioCodes.splice(randomIndex, 1)[0];

        const fechaActual = new Date();
        const fechaValida = new Date(fechaActual.setMonth(fechaActual.getMonth() + 1)).toLocaleDateString();

        document.getElementById('premio').textContent = `¡Un increíble premio!`;
        document.getElementById('codigoCanje').textContent = codigoPremio;
        document.getElementById('fechaCanje').textContent = fechaValida;

        const mensaje = document.getElementById('mensaje');
        mensaje.classList.remove('oculto');
        mensaje.classList.add('visible');
    } else {
        alert('Código inválido o ya utilizado.');
    }
});
