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

    const imagenclima = document.querySelector('.imagenclima');
    let cambioimages = imagenclima.currentConditions.icon;

    cambiarimagenes(imagenclima, cambioimages);
}

export async function cambiarimagenes(imagen, valor) {
    switch (valor) {
        case 'clear-day':
            imagen.src = await cargarIcono('sunny');
            break;

        case 'clear-night':
            imagen.src = await cargarIcono('nightlight');
            break;

        case 'partly-cloudy-day':
            imagen.src = await cargarIcono('partly_cloudy_day');
            break;

        case 'partly-cloudy-night':
            imagen.src = await cargarIcono('wb_twilight');
            break;

        case 'cloudy':
            imagen.src = await cargarIcono('cloud');
            break;

        case 'rain':
            imagen.src = await cargarIcono('rainy');
            break;

        case 'snow':
            imagen.src = await cargarIcono('ac_unit');
            break;

        case 'wind':
            imagen.src = await cargarIcono('air');
            break;

        case 'fog':
            imagen.src = await cargarIcono('foggy');
            break;
    }
}

async function llenardiario(clima) {
    const totaldias = document.querySelectorAll('.dia');
    const nombresdias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];

    totaldias.forEach((elemento) => {
        switch (elemento.dataset.dia) {
            case 'Dia1': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[0].datetime);
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[0].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                const estadodia = document.createElement('p');

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);

                break;
            }

            case 'Dia2': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[1].datetime);
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[1].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                const estadodia = document.createElement('p');

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia3': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[2].datetime);
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[2].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                const estadodia = document.createElement('p');

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia4': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[3].datetime);
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[3].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                const estadodia = document.createElement('p');

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia5': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[4].datetime);
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[4].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                const estadodia = document.createElement('p');

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia6': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[5].datetime);
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[5].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                const estadodia = document.createElement('p');

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia7': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[6].datetime);
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[6].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                const estadodia = document.createElement('p');

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }
        }
    });
}

async function llenarhoras(clima) {}
