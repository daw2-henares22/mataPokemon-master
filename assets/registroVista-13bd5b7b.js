import { U as User, P as Perfil } from "./main-2f3f6440.js";
const registroVista = {
  template: `
    <div
    class="vh-100 d-flex align-items-center justify-content-center"
    style="padding-top: 100px"
  >
    <div class="col-12 col-md-4">
        <h1 class="text-center display-4 p-2">Registro</h1>
        <form id="form_registro" class="p-3" novalidate>
            <label class="mt-3 form-label fs-5 text-black" for="nombre">Nombre: </label>
            <input type="text" class="form-control display-6" value="" id="nombreRegistro" placeholder ="Rubén" required />
            <div class="invalid-feedback">El nombre no es correcto</div>
  
            <label class="mt-3 form-label fs-5 text-black" for="apellidos">Apellidos: </label>
            <input type="text" class="form-control" value="" id="apellidosRegistro" placeholder = "Henares Hidalgo" required />
            <div class="invalid-feedback">Este campo no es correcto</div>

            <label class="mt-3 form-label fs-5 text-black" for="apellidos">Nick: </label>
            <input type="text" class="form-control" value="" id="nickRegistro" placeholder = "AshKechup" required />
            <div class="invalid-feedback">Este campo no es correcto</div>
  
            <label class="mt-3 form-label fs-5 text-black" for="email">Email</label>
            <input
                type="email"
                class="form-control"
                id="emailRegistro"
                value=""
                placeholder = "email@gmail.com"
                required
            />
            <div class="invalid-feedback">El email no es correcto</div>
  
            <label class="text-black mt-3 form-label fs-5" for="nick">Contraseña: </label>
            <input
                type="password"
                class="form-control"
                id="contraseñaRegistro"
                value=""
                pattern="[A-Za-z]{8,}"
                placeholder = "Contraseña"
                required
            />
  
            <div class="invalid-feedback">
                La contraseña debe contener 8 letras o más que deben ser mayusculas y minusculas, no se aceptan signos ni números
            </div>
  
            <button type="submit" class="mt-5 btn btn-primary w-100">
                Enviar
            </button>
        </form>
    </div>
  </div>
      `,
  script: () => {
    document.querySelector("#form_registro").addEventListener("submit", async function(e) {
      e.preventDefault();
      try {
        const usuario = {
          email: document.querySelector("#emailRegistro").value,
          password: document.querySelector("#contraseñaRegistro").value
        };
        const nuevoUser = await User.create(usuario);
        const perfilData = {
          nombre: document.querySelector("#nombreRegistro").value,
          apellidos: document.querySelector("#apellidosRegistro").value,
          nick: document.querySelector("#nickRegistro").value,
          rol: "registrado",
          user_id: nuevoUser.id
          // Tomamos el id que nos devuelve el registro
        };
        await Perfil.create(perfilData);
        alert("Usuario creado con éxito");
        window.location.href = "/#/login";
      } catch (error) {
        console.log(error);
        alert("Error al crear usuario");
      }
    });
  }
};
export {
  registroVista as default
};
