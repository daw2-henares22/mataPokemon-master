// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Importamos componentes header y footer

import { footer } from './componentes/footer.js'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/router'
import { header } from './componentes/header'
import { pruebas } from './vistas/pruebas.js'
//import { Pokemon } from './clases/pokemon'
document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('footer').innerHTML = footer.template
document.querySelector('main').innerHTML = pruebas.template

//document.querySelector('#main').innerHTML = new Pokemon
enrutador.observadorRutas()
//enrutador.router()
// Cargamos la página home
window.location = '#/home'



