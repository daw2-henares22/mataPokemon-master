import { Partidas } from '../bd/partida'
//import { Perfil } from '../bd/perfil'

export default {
  template: `
  <h1>Administración de incidencias</h1>
  <h2 class="mt-5 display-6">Partidas</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Código</th>
        <th>Created</th>
        <th>Usuario_id</th>
        <th>Puntos</th>
        <th>Tiempo</th>
      </tr>
    </thead>
    <tbody id="partidas">
    
    </tbody>
  </table>

      `,
  script: async () => {
    const partidas = await Partidas.getAll()
    let tabla = ''
    for (const partida of partidas) {
      tabla += `<tr id="${partida.id}">
        <td>${partida.id}</td>
        <td>${partida.created_at}</td>
        <td>${partida.usuario_id}</td>
        <td>${partida.puntos}</td>
        <td>${partida.tiempo}</td>
        </tr>`
    }
    const tablaPartida = document.querySelector('#partidas')
    tablaPartida.innerHTML = tabla
  }
}
