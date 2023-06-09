export const menuSuperior = {
  template: `
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul id="menuSuperior" class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="#/proyectos">Proyectos</a>
        </li>
        
      </ul>
    </div>
  `,
  script: (perfilLogueado) => {
    const items = {
      anonimo: `
   
      `,
      registrado: `
      <li class="nav-item">
        <a class="nav-link text-light" href="#/perfiles">Perfiles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/partidas">Partidas</a>
      </li>
      <li><hr /></li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/pokemons">Pokemons</a>
      </li>
      `,
      alumno: `
      <li class="nav-item">
        <a class="nav-link text-light" href="#/proyectos">Proyectos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/recursos">Recursos</a>
      </li>
      <li><hr /></li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/adminUsuarios">Admin</a>
      </li>
      `,
      profesor: `
      <li class="nav-item">
        <a class="nav-link text-light" href="#/proyectos">Proyectos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/recursos">Recursos</a>
      </li>
      <li><hr /></li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/adminUsuarios">Admin</a>
      </li>
      `,
      admin: `
      <li class="nav-item">
        <a class="nav-link text-light" href="#/proyectos">Proyectos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/recursos">Recursos</a>
      </li>
      <li><hr /></li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/adminUsuarios">Admin</a>
      </li>
      `
    }
    if (perfilLogueado !== 'anonimo') {
      const rol = perfilLogueado.rol
      document.querySelector('#menuSuperior').innerHTML = items[rol]
    } else {
      document.querySelector('#menuSuperior').innerHTML = items.anonimo
    }
  }
}
