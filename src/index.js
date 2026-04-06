import './styles.css';
import { loadContainer } from './display.js';
import { clima } from './datos.js';
import { llenardiario, llenargeneral } from './controller.js';

await loadContainer();

const busqueda = document.querySelector('.busqueda');
const entrada = document.getElementById('entrada');

busqueda.addEventListener('click', async () => {
    const consulta = entrada.value;

    const climatotal = await clima(consulta);
    llenargeneral(climatotal);
    llenardiario(climatotal);
});
