import './styles.css';
import { loadContainer } from './display.js';
import { clima } from './datos.js';
import { llenardiario, llenargeneral } from './controller.js';

await loadContainer();

const busqueda = document.querySelector('.busqueda');
const entrada = document.getElementById('entrada');
const titular2 = document.querySelector('.titular2');

busqueda.addEventListener('click', async () => {
    const consulta = entrada.value;

    if (consulta === '') {
        alert('Debe ingresar una ciudad');
        return;
    }

    const climatotal = await clima(consulta);
    llenargeneral(climatotal);
    llenardiario(climatotal);

    titular2.textContent = 'Pronostico Diario';
    entrada.value = '';
});

console.log(await clima('lima'));
