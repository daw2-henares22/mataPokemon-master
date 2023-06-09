import { Perfil } from '../bd/perfiles'

export default {
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
    const perfiles = await Perfil.getAll()
    let tabla = ''
    for (const perfil of perfiles) {
      tabla += `<tr id="${perfil.id}">
        <td>${perfil.id}</td>
        <td>${perfil.created_at}</td>
        <td>${perfil.nombre}</td>
        <td>${perfil.apellidos}</td>
        <td>${perfil.user_id}</td>
        <td>${perfil.avatar}</td>
        <td>${perfil.nick}</td>
        </tr>`
    }
    const tablaPerfil = document.querySelector('#perfiles')
    tablaPerfil.innerHTML = tabla
  }
}
