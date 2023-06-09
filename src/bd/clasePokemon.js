import { Pokemons } from './pokemons'

export class Pokemon {
  constructor (idP = null, id = null, nombre = null, imagen = null, x = null, y = null, velocidad = null, tamaño = null, html = null, tipo = null) {
    this.idP = idP
    this.id = id
    this.nombre = nombre
    this.imagen = imagen
    this.x = x
    this.y = y
    this.velocidad = velocidad
    this.tamaño = tamaño
    this.html = html
    this.tipo = tipo
  }

  async cargaDatosPokemon () {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      const data = await response.json()
      this.nombre = data.name
      this.imagen = data.sprites.other['official-artwork'].front_default
      this.tipo = data.types[0].type.name
    } catch (error) {
      console.log(error)
    }
  }

  generaDatosAleatorios () {
    this.id = Math.floor(Math.random() * 1009)
    const min = 100
    const max = 300
    this.tamaño = Math.floor(Math.random() * (max - min + 1)) + min
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const maxX = screenWidth - this.tamaño
    const maxY = screenHeight - this.tamaño
    this.x = Math.floor(Math.random() * maxX)
    this.y = Math.floor(Math.random() * maxY)
    this.velocidad = Math.floor(Math.random() * 21) - 10
  }

  async insertaPokemon () {
    await this.generaDatosAleatorios()
    await this.cargaDatosPokemon()

    const html = `<div data-id="${this.idP}" data-nombre="${this.nombre}" data-tipo="${this.tipo}" data-imagen="${this.imagen}" style="width: ${this.tamaño}px; position: absolute; left: ${this.x}px; top: ${this.y}px;">
    <img class="w-100" src="${this.imagen}" alt="Pokemon"> 
  </div>`
    this.html = html
    const PokemonSupabase = {
      nombre: this.nombre,
      tipo: this.tipo,
      pokedex: this.id,
      imagen: this.imagen
    }
    try {
      const pokemonS = await Pokemons.create(PokemonSupabase)
    } catch (error) {
      console.log(error)
    }

    const div = document.createElement('div')
    div.innerHTML = this.html
    console.log(div)

    document.querySelector('main').append(div)
    this.observadores(div)
  }

  mataPokemon (div) {
    if (div) {
      div.style.display = 'none'
      window.puntos = window.puntos + 10
      const puntosH1 = document.querySelector('#puntosPokemon')
      const text = `Puntos: ${window.puntos}`
      puntosH1.innerHTML = text
    } else {
      console.log("No se encontró ningún elemento con data-id igual a '2'")
    }
  }

  observadores (div) {
    div.addEventListener('click', (event) => {
      this.mataPokemon(div)
    })
  }
}
