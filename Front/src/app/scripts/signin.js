const registroForm = window.opener.document.getElementById("registro-form");

registroForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que se envíe el formulario por defecto

  const nombre = registroForm.querySelector("#nombre").value;
  const numeroCelular = registroForm.querySelector("#celular").value;
  const contraseña = registroForm.querySelector("#contraseña").value;

  // Aquí puedes realizar cualquier lógica adicional, como enviar los datos a un servidor

  const nuevoUsuario = {
    nombre: nombre,
    numeroCell: numeroCelular,
    password: contraseña
  };
  agregarUsuarioEnServidor([nuevoUsuario]);
  window.close();
});

async function agregarUsuarioEnServidor(usuarios) {
  try {
    const response = await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuarios)
    });

    if (response.ok) {
      alert('Usuario registrado correctamente.');
      // Puedes realizar alguna acción adicional después de agregar el usuario, como redireccionar a otra página.
    } else {
      alert('Error al registrar el usuario.');
    }
  } catch (error) {
    console.error('Error al agregar el usuario:', error);
  }
}