
export const enrutador = {
    rutas: {
      home: import('../vistas/homeVista.js'),
      // Usuarios
      registro: import('../vistas/registroVista.js'),
      login: import('../vistas/loginVista.js'),
      perfiles: import('../vistas/perfil.js'),
      pokemons: import('../vistas/juegoPokemon.js'),
      partidas: import('../vistas/partida.js')
    },
  
    router: async () => {
      const pathCompleto = window.location.hash
      const path = pathCompleto.split('/')[1]
      const parametro = pathCompleto.split('/')[2]
  
      const componenteVista = await enrutador.rutas[path]
      if (componenteVista) {
        try {
          const vista = await componenteVista.default
          document.querySelector('main').innerHTML = vista.template
          vista.script(parametro)
        } catch (error) {
          console.log(error)
        }
      }
    },
  
    observadorRutas: () => {
      document.body.addEventListener('click', event => {
  
        const link = event.target
        if (link.tagName === 'A') {
          const href = link.getAttribute('href')
          window.history.pushState({ path: href }, '', href)
          enrutador.router()
        }
      })
  
      window.addEventListener('popstate', (e) => {
        console.log('evento popstate - Te estás moviendo por el historial')
        enrutador.router()
      })
    }
  }