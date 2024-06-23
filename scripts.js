const validCodes = new Set();
const usedCodes = new Set();
const premioCodes = new Set();

for (let i = 1; i <= 10000; i++) {
    validCodes.add(`prem${String(i).padStart(4, '0')}`);
    premioCodes.add(`AR${String(i).padStart(4, '0')}`);
}

document.getElementById('canjearBtn').addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value.trim();

    if (validCodes.has(codigo) && !usedCodes.has(codigo)) {
        usedCodes.add(codigo);
        const premioArray = Array.from(premioCodes);
        const randomIndex = Math.floor(Math.random() * premioArray.length);
        const codigoPremio = premioArray.splice(randomIndex, 1)[0];
        premioCodes.delete(codigoPremio);

        const fechaActual = new Date();
        const fechaValida = new Date(fechaActual.setMonth(fechaActual.getMonth() + 1)).toLocaleDateString();

        document.getElementById('premio').textContent = "PREMIO";
        document.getElementById('codigoCanje').textContent = codigoPremio;
        document.getElementById('fechaCanje').textContent = fechaValida;

        const mensaje = document.getElementById('mensaje');
        mensaje.classList.remove('oculto');
        mensaje.classList.add('visible');
    } else {
        alert('Código inválido o ya utilizado.');
    }
});
