function calcularPrecio() {
    // Obtener los valores del formulario
    const producto = document.getElementById('producto').value;
    const ancho = parseFloat(document.getElementById('ancho').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const color = document.getElementById('color').value;
    const material = document.getElementById('material').value;

    // Validación de los valores
    if (isNaN(ancho) || isNaN(altura)) {
        alert("Por favor, ingrese valores válidos para ancho y altura.");
        return;
    }

    // Calcular el área
    const area = (ancho * altura) / 10000; // Convertir de cm² a m²

    // Establecer precios base por m²
    let precioPorM2;
    if (producto === "vidrio") {
        precioPorM2 = 20; // Precio base por m² de vidrio
    } else if (producto === "ventana") {
        precioPorM2 = 750; // Precio base por m² de ventana
    } else if (producto === "puerta") {
        precioPorM2 = 1400; // Precio base por m² de puerta
    }

    // Ajustes de precio por color y material
    if (color === "espejo") {
        precioPorM2 += 5; // Aumento por color espejo
    } else if (color === "ahumado") {
        precioPorM2 += 3; // Aumento por color ahumado
    }

    if (material === "aluminio") {
        precioPorM2 += 10; // Aumento por material aluminio
    }

    // Calcular el precio final
    const precioFinal = area * precioPorM2;

    // Mostrar el precio final
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El precio estimado para su ${producto} es: Q${precioFinal.toFixed(2)}`;
}
