// Cargar la libreria de supabase
import { supabase } from '../bd/supabase.js'

export const pruebas = {
  template: '<h1 class="p-5">Pruebas</h1>',
  script: async () => {
    const leerTodosPerfiles = async () => {
      // READ ALL ROWS
      const { data: perfiles, error } = await supabase
        .from('perfiles')
        .select('*')
      console.log('prefiles desde supabase: ', perfiles)
      return perfiles
    }
    leerTodosPerfiles()
    
    const agregarPerfil = async () => {
      // INSERT A ROW
      const { data, error } = await supabase
        .from('perfiles')
        .insert([{
          nombre: 'Ejemplo'
        }])
    }

    const login = async () => {
      try {
        // USER LOGIN
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'pruebas@prueba.com',
          password: '123456'
        })
        if (error) {
          throw error
        }
        console.log('Usuario logueado:', data.user.email)
      } catch (error) {
        console.log('Error al iniciar sesión:', error.message)
      }
    }

    const verUsuarioLogeado = async () => {
      // GET USER
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }
    const logout = async () => {
      // USER LOGOUT
      const { error } = await supabase.auth.signOut()
    }

    // // 1. miramos usuario logeado
    console.log('detalle usuario logeado: ', await verUsuarioLogeado())

    // // 2. me logueo
    await login()
    // 3. miramos usuario logeado
    console.log('detalle usuario logeado: ', await verUsuarioLogeado())

    await logout()
  }
}
