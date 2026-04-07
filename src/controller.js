import { cargarIcono } from './display.js';

export async function llenargeneral(clima) {
    const iconobusqueda = document.querySelector('.iconobusqueda');
    iconobusqueda.src = await cargarIcono('location_on');
    const lugar = document.querySelector('.lugar');
    const lugarcapitalizado = clima.address;
    lugar.textContent = `${lugarcapitalizado.charAt(0).toUpperCase() + lugarcapitalizado.slice(1)}`;
    const grados = document.querySelector('.grados');
    let gradosnumerico = Math.round(parseFloat(clima.currentConditions.temp));
    grados.textContent = `${gradosnumerico} °C`;
    const estado = document.querySelector('.estado');
    estado.textContent = `${clima.currentConditions.conditions}`;
    const sensacion = document.querySelector('.sensacion');
    let sensacionnumerico = Math.round(
        parseFloat(clima.currentConditions.feelslike),
    );
    sensacion.textContent = `Sensacion Termica: ${sensacionnumerico}`;
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
    let cambioimages = clima.currentConditions.icon;

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

export async function llenardiario(clima) {
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
                const fecha = new Date(clima.days[0].datetime + 'T00:00:00');
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                console.log(fecha.getDay());
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[0].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                let maximo = Math.round(parseFloat(clima.days[0].tempmax));
                let minimo = Math.round(parseFloat(clima.days[0].tempmin));
                rangodia.textContent = `${maximo}/${minimo}`;
                const estadodia = document.createElement('p');
                estadodia.textContent = clima.days[0].conditions;

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);

                break;
            }

            case 'Dia2': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[1].datetime + 'T00:00:00');
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[1].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                let maximo = Math.round(parseFloat(clima.days[1].tempmax));
                let minimo = Math.round(parseFloat(clima.days[1].tempmin));
                rangodia.textContent = `${maximo}/${minimo}`;
                const estadodia = document.createElement('p');
                estadodia.textContent = clima.days[1].conditions;

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia3': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[2].datetime + 'T00:00:00');
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[2].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                let maximo = Math.round(parseFloat(clima.days[2].tempmax));
                let minimo = Math.round(parseFloat(clima.days[2].tempmin));
                rangodia.textContent = `${maximo}/${minimo}`;
                const estadodia = document.createElement('p');
                estadodia.textContent = clima.days[2].conditions;

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia4': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[3].datetime + 'T00:00:00');
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[3].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                let maximo = Math.round(parseFloat(clima.days[3].tempmax));
                let minimo = Math.round(parseFloat(clima.days[3].tempmin));
                rangodia.textContent = `${maximo}/${minimo}`;
                const estadodia = document.createElement('p');
                estadodia.textContent = clima.days[3].conditions;

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia5': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[4].datetime + 'T00:00:00');
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[4].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                let maximo = Math.round(parseFloat(clima.days[4].tempmax));
                let minimo = Math.round(parseFloat(clima.days[4].tempmin));
                rangodia.textContent = `${maximo}/${minimo}`;
                const estadodia = document.createElement('p');
                estadodia.textContent = clima.days[4].conditions;

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia6': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[5].datetime + 'T00:00:00');
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[5].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                let maximo = Math.round(parseFloat(clima.days[5].tempmax));
                let minimo = Math.round(parseFloat(clima.days[5].tempmin));
                rangodia.textContent = `${maximo}/${minimo}`;
                const estadodia = document.createElement('p');
                estadodia.textContent = clima.days[5].conditions;

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }

            case 'Dia7': {
                const dia = document.createElement('h2');
                const fecha = new Date(clima.days[6].datetime + 'T00:00:00');
                dia.textContent = `${nombresdias[fecha.getDay()]}`;
                const iconodia = document.createElement('img');
                let cambioicono = clima.days[6].icon;
                cambiarimagenes(iconodia, cambioicono);
                const rangodia = document.createElement('p');
                let maximo = Math.round(parseFloat(clima.days[6].tempmax));
                let minimo = Math.round(parseFloat(clima.days[6].tempmin));
                rangodia.textContent = `${maximo}/${minimo}`;
                const estadodia = document.createElement('p');
                estadodia.textContent = clima.days[6].conditions;

                elemento.appendChild(dia);
                elemento.appendChild(iconodia);
                elemento.appendChild(rangodia);
                elemento.appendChild(estadodia);
                break;
            }
        }
    });
}
