import { supabase } from './supabase.js'
export class Perfil {
  constructor (id = null, created_at = null, nombre = null, apellidos = null, user_id = null,  avatar = null, nick = null, rol = null) {
    this.id = id
    this.created_at = created_at
    this.nombre = nombre
    this.apellidos = apellidos
    this.user_id = user_id
    this.avatar = avatar
    this.nick = nick 
    this.rol = rol
  }

  static async getAll () {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    return perfil.map(({ id, created_at, nombre, apellidos, user_id, avatar, nick, rol }) => {
      return new Perfil(id, created_at, nombre, apellidos, user_id,  avatar, nick, rol)
    })
  }

  static async getById (id) {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return new Perfil(perfil.id, perfil.created_at, perfil.nombre, perfil.apellidos, perfil.user_id, perfil.avatar, perfil.nick, perfil.rol)
  }

  static async getByUserId (id) {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('user_id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return new Perfil(perfil.id, perfil.created_at, perfil.nombre, perfil.apellidos, perfil.user_id,  perfil.avatar, perfil.nick, perfil.rol)
  }

  static async create (perfilData) {
    const { error } = await supabase
      .from('perfiles')
      .insert(perfilData)
      .select()
    if (error) {
      throw new Error(error.message)
    }
    return new Perfil(perfilData.id, perfilData.created_at, perfilData.nombre, perfilData.apellidos, perfilData.user_id,  perfilData.avatar, perfilData.nick, perfilData.rol)
  }

  async update () {
    const { error } = await supabase
      .from('perfiles')
      .update({
        nombre: this.nombre,
        apellidos: this.apellidos,
        nick: this.nick,
        avatar: this.avatar
      })
      .eq('id', this.id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  static async delete (id) {
    const { error } = await supabase
      .from('perfiles')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}