import './styles.css';
import { loadContainer } from './display.js';
import { clima } from './datos.js';
import { llenardiario, llenargeneral } from './controller.js';

await loadContainer();

const busqueda = document.querySelector('.busqueda');
const entrada = document.getElementById('entrada');
const titular2 = document.querySelector('.titular2');
const dia = document.querySelectorAll('.dia');

const climainicial = await clima('lima');
titular2.textContent = 'Pronostico Diario';
llenargeneral(climainicial);
llenardiario(climainicial);

busqueda.addEventListener('click', async () => {
    dia.forEach((elemento) => {
        elemento.textContent = '';
    });

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
