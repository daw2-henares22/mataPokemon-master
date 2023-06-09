import { P as Perfil } from "./main-2f3f6440.js";
const perfil = {
  template: `
  <h1>Administración de incidencias</h1>
  <h2 class="mt-5 display-6">Perfiles</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Código</th>
        <th>Created</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>User_id</th>
        <th>Avatar</th>
        <th>Nick</th>
      </tr>
    </thead>
    <tbody id="perfiles">
    
    </tbody>
  </table>

      `,
  script: async () => {
    const perfiles = await Perfil.getAll();
    let tabla = "";
    for (const perfil2 of perfiles) {
      tabla += `<tr id="${perfil2.id}">
        <td>${perfil2.id}</td>
        <td>${perfil2.created_at}</td>
        <td>${perfil2.nombre}</td>
        <td>${perfil2.apellidos}</td>
        <td>${perfil2.user_id}</td>
        <td>${perfil2.avatar}</td>
        <td>${perfil2.nick}</td>
        </tr>`;
    }
    const tablaPerfil = document.querySelector("#perfiles");
    tablaPerfil.innerHTML = tabla;
  }
};
export {
  perfil as default
};
