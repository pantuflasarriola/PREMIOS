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
    const codigo = codigoInput.value.trim();

    if (validCodes.has(codigo)) {
        // Verificar si el código ha sido utilizado antes desde la misma IP
        const ip = obtenerDireccionIP(); // Simulación de la dirección IP real
        const key = `${ip}_${codigo}`;
        
        if (usedCodes.has(key)) {
            alert('Este código ya ha sido utilizado desde esta dirección IP.');
        } else {
            // Marcar el código como utilizado para esta IP
            usedCodes.add(key);

            const randomIndex = Math.floor(Math.random() * premioCodes.length);
            const codigoPremio = premioCodes.splice(randomIndex, 1)[0];
            const premioGanado = obtenerPremioAleatorio();

            const fechaActual = new Date();
            const fechaValida = new Date(fechaActual.setMonth(fechaActual.getMonth() + 1)).toLocaleDateString();

            mostrarMensajePremio(premioGanado, codigoPremio, fechaValida);
            codigoInput.value = ''; // Limpiar el campo de código después de canjear
        }
    } else {
        alert('Código inválido.');
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

    premioSpan.textContent = `FELICIDADES HAS OBTENIDO ${premio}`;
    codigoCanjeSpan.textContent = `CANJE: ${codigoPremio}`;
    fechaCanjeSpan.textContent = `TOMA CAPTURA PARA CANJEAR TU PREMIO. PROMOCIÓN VÁLIDA DURANTE UN MES DESPUÉS DE LA FECHA DE INGRESO (${fechaValida})`;

    mensaje.classList.remove('oculto');
    mensaje.classList.add('visible');
}

// Función para obtener la dirección IP del cliente (simulada para propósitos de prueba)
function obtenerDireccionIP() {
  
}
