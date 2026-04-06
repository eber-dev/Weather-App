import iconoprincipal from './images/iconoapp.png';

export async function cargarIcono(nombre) {
    const modulo = await import(`./images/${nombre}.svg`);
    return modulo.default;
}

export function loadContainer() {
    seccion1();
    seccion2();
    seccion3();
}

async function seccion1() {
    const encabezado = document.querySelector('.encabezado');
    const containertitulo = document.createElement('div');
    containertitulo.classList.add('containertitulo');
    const iconotitulo = document.createElement('img');
    iconotitulo.src = iconoprincipal;
    const titulo = document.createElement('h1');
    titulo.textContent = 'CLIMA';
    const searchcontainer = document.createElement('div');
    searchcontainer.classList.add('searchcontainer');
    const input = document.createElement('input');
    const buscar = document.createElement('button');
    const buscarimagen = document.createElement('img');
    buscarimagen.src = await cargarIcono('search');

    encabezado.appendChild(containertitulo);
    containertitulo.appendChild(iconotitulo);
    containertitulo.appendChild(titulo);
    encabezado.appendChild(searchcontainer);
    searchcontainer.appendChild(input);
    searchcontainer.appendChild(buscar);
    buscar.appendChild(buscarimagen);

    return encabezado;
}

async function seccion2() {
    const app = document.querySelector('.app');

    const parte1 = climaparte1();
    const parte2 = climaparte2();

    app.appendChild(parte1);
    app.appendChild(parte2);
}

function climaparte1() {
    const parte1 = document.createElement('div');
    parte1.classList.add('parte1');
    const titular = document.createElement('div');
    titular.classList.add('titular');
    const iconobusqueda = document.createElement('img');
    iconobusqueda.classList.add('iconobusqueda');
    const lugar = document.createElement('h1');
    lugar.classList.add('lugar');
    const datogeneral = document.createElement('div');
    datogeneral.classList.add('datogeneral');
    const datosclima = document.createElement('div');
    datosclima.classList.add('datosclima');
    const estado = document.createElement('h2');
    estado.classList.add('estado');
    const grados = document.createElement('h1');
    grados.classList.add('grados');
    const sensacion = document.createElement('p');
    sensacion.classList.add('sensacion');
    const humedad = document.createElement('p');
    humedad.classList.add('humedad');
    const viento = document.createElement('p');
    viento.classList.add('viento');
    const indice = document.createElement('p');
    indice.classList.add('indice');
    const imagenclima = document.createElement('img');
    imagenclima.classList.add('imagenclima');

    parte1.appendChild(titular);
    titular.appendChild(iconobusqueda);
    titular.appendChild(lugar);
    parte1.appendChild(datogeneral);
    datogeneral.appendChild(datosclima);
    datosclima.appendChild(estado);
    datosclima.appendChild(grados);
    datosclima.appendChild(sensacion);
    datosclima.appendChild(humedad);
    datosclima.appendChild(viento);
    datosclima.appendChild(indice);
    datogeneral.appendChild(imagenclima);

    return parte1;
}

function climaparte2() {
    const parte2 = document.createElement('div');
    parte2.classList.add('parte2');
    const titular2 = document.createElement('h2');
    titular2.classList.add('titular2');
    titular2.textContent = 'Pronostico Diario';
    const dias = document.createElement('div');
    dias.classList.add('dias');

    for (let i = 1; i <= 7; i++) {
        const semana = document.createElement('div');
        semana.classList.add('dia');
        semana.dataset.dia = `Dia${i}`;

        dias.appendChild(semana);
    }

    parte2.appendChild(titular2);
    parte2.appendChild(dias);

    return parte2;
}

function seccion3() {
    const pie = document.querySelector('.pie');
    const piepagina = document.createElement('p');
    piepagina.textContent =
        'Datos por Visual Crossing Weather API | Desarrollado por Eber Acuña Quispe';

    pie.appendChild(piepagina);
}
