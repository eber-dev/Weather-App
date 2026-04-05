import { cargarIcono } from './display.js';

async function llenargeneral(clima) {
    const iconobusqueda = document.querySelector('.iconobusqueda');
    iconobusqueda.src = await cargarIcono('search');
    const lugar = document.querySelector('.lugar');
    const lugarcapitalizado = clima.address;
    lugar.textContent = `${lugarcapitalizado.charAt(0).toUpperCase() + lugarcapitalizado.slice(1)}`;
    const grados = document.querySelector('.grados');
    grados.textContent = `${clima.currentConditions.temp} °C`;
    const estado = document.querySelector('.estado');
    estado.textContent = `${clima.currentConditions.conditions}`;
    const sensacion = document.querySelector('.sensacion');
    sensacion.textContent = `Sensacion Termica: ${clima.currentConditions.feelslike}`;
    const humedad = document.querySelector('.humedad');
    humedad.textContent = `Humedad: ${clima.currentConditions.humidity}%`;
    const viento = document.querySelector('.viento');
    viento.textContent = `Viento: ${clima.currentConditions.windspeed}km/h`;
    const indice = document.querySelector('.indice');
    let indicecategorias = clima.currentConditions.uvindex;
    if (indicecategorias > 0 && indicecategorias <= 2) {
        indice.textContent = 'Bajo';
    } else if (indicecategorias > 2 && indicecategorias <= 5) {
        indice.textContent = 'Moderado';
    } else if (indicecategorias > 5 && indicecategorias <= 7) {
        indice.textContent = 'Alto';
    } else if (indicecategorias > 7 && indicecategorias <= 10) {
        indice.textContent = 'Muy Alto';
    } else {
        indice.textContent = 'Extremo';
    }
}
