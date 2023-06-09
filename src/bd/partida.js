import { supabase } from './supabase.js'

export class Partidas {
  constructor (id = null, puntos = null, tiempo = null, usuario_id = null, created_at = null) {
    this.id = id
    this.puntos = puntos
    this.tiempo = tiempo
    this.usuario_id = usuario_id
    this.created_at = created_at
  }

  static async getAll () {
    const { data: partida, error } = await supabase
      .from('partidas')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    return partida.map(({ id, puntos, tiempo, usuario_id, created_at }) => {
      return new Partidas(id, puntos, tiempo, usuario_id, created_at)
    })
  }

  static async getById (id) {
    const { data: partida, error } = await supabase
      .from('partidas')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return new Partidas(partida.id, partida.puntos, partida.tiempo, partida.usuario_id, partida.created_at)
  }

  static async getByUserId (id) {
    const { data: partida, error } = await supabase
      .from('partidas')
      .select('*')
      .eq('user_id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return new Partidas(partida.id, partida.puntos, partida.tiempo, partida.usuario_id, partida.created_at)
  }

  static async create (perfilData) {
    const { error } = await supabase
      .from('partidas')
      .insert(perfilData)
      .select()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
  
  static async delete (id) {
    const { error } = await supabase
      .from('partidas')
      .delete()
      .eq('id', id)

    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
