import { formEditarPerfil } from './formEditarPerfil'
import { User } from '../bd/user'
import { Perfil } from '../bd/perfiles'
import { menuSuperior } from './menuSuperior'
import { menuUsuario } from './menuUsuario'

export const header = {
  template: `
  
<!-- Navbar  -->
<nav class="navbar navbar-expand-sm bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="#/home">
      <img
        src="/recursos/avatar.png"
        alt="Logo"
        width="30"
        height="30"
        class="d-inline-block align-text-top me-2"
      />
      <span class="text-white">Vanilla Games</span>
    
    </a>
    
    <button
      class="navbar-toggler ms-auto
      "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
    </button>
    ${menuSuperior.template}
    ${menuUsuario.template}
  </div>
</nav>

//Modals
${formEditarPerfil.template}
  `,
  script: async () => {
    try {
      const usuarioLogueado = await User.getUser()
      if (usuarioLogueado) {
        const perfilLogueado = await Perfil.getByUserId(usuarioLogueado.id)
        menuSuperior.script(perfilLogueado)
        menuUsuario.script(perfilLogueado)
        formEditarPerfil.script(perfilLogueado)
      } else {
        menuSuperior.script('anonimo')
        menuUsuario.script('anonimo')
      }
    } catch (error) {
    }
  }
}
