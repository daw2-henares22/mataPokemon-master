import { supabase } from './supabase.js'

export class User {
  constructor (id = null, email = null, password = null) {
    this.id = id
    this.email = email
    this.password = password
  }

  static async create (userData) {
    const { data, error } = await supabase.auth.signUp(userData)

    if (error) {
      throw new Error(error.message)
    }
    console.log('usuario creado correctamente ', data)
    return new User(data.user.id, data.user.email)
  }

  static async login (userData) {
    const { data, error } = await supabase.auth.signInWithPassword(userData)
    if (error) {
      throw new Error(error.message)
    }
    return new User(data.user.id, data.user.email)
  }

  static async logout () {
    // USER LOGOUT
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  static async getUser () {
    // GET USER
    const { data: { user } } = await supabase.auth.getUser()
    if (user) return new User(user.id, user.email)
  }
}
