import { s as supabase } from "./main-2f3f6440.js";
class Pokemons {
  constructor(id = null, nombre = null, tipo = null, pokedex = null, created_at = null, imagen = null) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.created_at = created_at;
    this.pokedex = pokedex;
    this.imagen = imagen;
  }
  static async getAll() {
    const { data: pokemon, error } = await supabase.from("pokemons").select("*").order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return pokemon.map(({ id, created_at, nombre, tipo, pokedex, imagen }) => {
      return new Pokemons(id, created_at, nombre, tipo, pokedex, imagen);
    });
  }
  static async getById(id) {
    const { data: pokemon, error } = await supabase.from("pokemons").select("*").eq("id", id).single();
    if (error) {
      throw new Error(error.message);
    }
    return new Pokemons(pokemon.id, pokemon.created_at, pokemon.nombre, pokemon.tipo, pokemon.pokedex, pokemon.imagen);
  }
  static async getByUserId(id) {
    const { data: pokemon, error } = await supabase.from("pokemons").select("*").eq("user_id", id).single();
    if (error) {
      throw new Error(error.message);
    }
    return new Pokemons(pokemon.id, pokemon.created_at, pokemon.nombre, pokemon.tipo, pokemon.pokedex, pokemon.imagen);
  }
  static async create(perfilData) {
    const { error } = await supabase.from("pokemons").insert(perfilData).select();
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }
  static async delete(id) {
    const { error } = await supabase.from("pokemons").delete().eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }
}
export {
  Pokemons as P
};
