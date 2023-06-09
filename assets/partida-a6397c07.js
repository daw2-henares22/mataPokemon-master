import { P as Partidas } from "./partida-6fac8258.js";
import "./main-2f3f6440.js";
const partida = {
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
    const partidas = await Partidas.getAll();
    let tabla = "";
    for (const partida2 of partidas) {
      tabla += `<tr id="${partida2.id}">
        <td>${partida2.id}</td>
        <td>${partida2.created_at}</td>
        <td>${partida2.usuario_id}</td>
        <td>${partida2.puntos}</td>
        <td>${partida2.tiempo}</td>
        </tr>`;
    }
    const tablaPartida = document.querySelector("#partidas");
    tablaPartida.innerHTML = tabla;
  }
};
export {
  partida as default
};
