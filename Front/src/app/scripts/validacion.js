document.querySelector('#iniciar-sesion').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que se realice la acción por defecto del formulario
    validarCampos(); // Llama a la función para validar los campos del formulario
  });

  async function validarCampos() {
    const numeroCelular = document.getElementById('numero-celular').value;
    const contraseña = document.getElementById('password').value;
  
    if (numeroCelular === '' || contraseña === '') {
      alert('Por favor, completa todos los campos.'); // Muestra una alerta si hay campos vacíos
      return;
    }
  
    // Realiza la validación del número de celular y la contraseña
    const usuarios = await getUsersFromServer(); // Obtiene los usuarios del servidor (puedes implementar esta función)
    const usuarioEncontrado = usuarios.find(usuario => usuario.numeroCell === numeroCelular);
  
    if (!usuarioEncontrado) {
      alert('El número ingresado no existe.'); // Muestra una alerta si el número de celular no existe
      return;
    }
  
    if (usuarioEncontrado.password !== contraseña) {
      alert('La contraseña ingresada es incorrecta.'); // Muestra una alerta si la contraseña es incorrecta
      return;
    }
  
    alert('Bienvenido ' + usuarioEncontrado.nombre); // Muestra una alerta de bienvenida
    window.location.href = 'Home.html';
  }  
  const URL_API = 'http://localhost:5000/usuarios';

  const getUsersFromServer = async () => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      return null;
    }
    
}

