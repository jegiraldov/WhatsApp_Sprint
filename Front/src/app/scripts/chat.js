import '../styles/style.scss';
import '../styles/chat.scss';

const divsContainer = document.querySelector('#divs-conteiner');
const searchInput = document.getElementById('searchInput');
let usuarios = [];

fetch('http://localhost:5000/usuarios')
  .then(response => response.json())
  .then(data => { 
    usuarios = data;
    dibujarUsuarios(data)
  });

//Evento que filtra conversaciones
let elSearch = document.getElementById("searchInput");
elSearch.addEventListener("keyup", () => {
  let value = elSearch.value.toLowerCase();
  let newList = usuarios.filter(u => u.nombre.toLowerCase().includes(value));
  console.log(newList, value)
  dibujarUsuarios(newList);
});

//Función dibujar usuarios
function dibujarUsuarios(data){
  // Limpiar el contenido actual del divs-conteiner
  divsContainer.innerHTML = '';

  // Iterar sobre los datos de los usuarios
  data.forEach(usuario => {
    dibujarUsuario(usuario)
  });
}

// Dibujar un usuario
function dibujarUsuario(usuario){
  const divMensajes = document.createElement('div');
    divMensajes.classList.add('div-mensajes');

    const img = document.createElement('img');
    img.src = usuario.urlFoto;
    img.alt = 'contacto__sinperfil';

    const mensajes = document.createElement('div');
    mensajes.classList.add('mensajes');

    const mensajeUsuario = document.createElement('div');
    mensajeUsuario.classList.add('mensaje-usuario');
    mensajeUsuario.addEventListener("click", ()=>{
      clickUsuario(usuario);
    });

    const usuariosVisto = document.createElement('p');
    usuariosVisto.classList.add('usuarios-visto', 'titulo', 'usuarios-no-visto');
    usuariosVisto.textContent = usuario.nombre;


    const visto = document.createElement('span');
    visto.classList.add('visto');
    const vistoIcon = document.createElement('i');
    vistoIcon.classList.add('bi', 'bi-check-all');
    visto.appendChild(vistoIcon);

    const usuarioVisto = document.createElement('span');
    usuarioVisto.classList.add('usuario-visto', 'usuario-no-visto');
    usuarioVisto.textContent = usuario.estado;

    mensajeUsuario.appendChild(usuariosVisto);
    mensajeUsuario.appendChild(visto);
    mensajeUsuario.appendChild(usuarioVisto);

    const horarios = document.createElement('div');
    horarios.classList.add('horarios');

    const horaMensaje = document.createElement('span');
    horaMensaje.classList.add('hora-mensaje');
    horaMensaje.textContent = obtenerHoraMensaje();

    horarios.appendChild(horaMensaje);

    mensajes.appendChild(mensajeUsuario);
    mensajes.appendChild(horarios);

    divMensajes.appendChild(img);
    divMensajes.appendChild(mensajes);


    divsContainer.appendChild(divMensajes);
}

// Función para obtener la hora del mensaje
function obtenerHoraMensaje() {

  const date = new Date();
  const hora = date.getHours();
  const minutos = date.getMinutes();

  return `${hora}:${minutos}`;
}

//Función para traer mensajes
const traerMensajes = async (usuario) =>{
  const response = await fetch ('http://localhost:5000/mensajes');
  const data = await response.json();

  const mensajes = data.find(conv => conv.idUser2 == usuario.id)

  return mensajes ? mensajes.conversaciones : [];
}


//función que detecta click usuario y dibuja en el chat
function dibujarMensajes (usuario, mensajes){
  const element = document.getElementById('chat');
  let html = `
  <div class="rightSide">
    <div class="header">
      <div class="imgText">
      <div class="userImg">
          <img src="${usuario.urlFoto}" class="cover">
      </div>
        <h4>${usuario.nombre}<br><span>Online</span></h4>
      </div> 
        <ul>
          <img src="https://img.icons8.com/?size=512&id=132&format=png" id = 'search'>
          <button>
          <img src="https://img.icons8.com/?size=512&id=23543&format=png" id=="close">
        </button>
        </ul>
    </div>

    <div class="chatBox">`

    // dinámico
    for (let i = 0; i < mensajes.length; i++) {
      html += `
        <div class="message ${mensajes[i].sendBy == 1 ? 'my_message' : 'friend_message'}">
            <p>${mensajes[i].message} <span>${mensajes[i].date}</span></p>
        </div>
        `;
    }
    // final
    html += `
    </div>
    <div class="chatbox_input">
        <img src="https://img.icons8.com/?size=512&id=7868&format=png" alt="Emojie feliz">
        <img src="https://img.icons8.com/?size=512&id=b28zVZDT4qz3&format=png" alt="Gancho">
        <input type="text" placeholder="Escribe un mensaje" id="mensajeInput">
        <button id="enviarMensajeButton">
          <img src="https://img.icons8.com/?size=512&id=59854&format=png">
        </button>
        <img src="https://img.icons8.com/?size=512&id=9622&format=png" alt="micrófono">
    </div>
  </div> `

  element.innerHTML = html;
}

//-------------ENVIAR MENSAJE----------

//función que detecta click usuario y dibuja en el chat
async function clickUsuario(usuario) {
  let mensajes = await traerMensajes(usuario);
  dibujarMensajes(usuario, mensajes);

  const mensajeInput = document.getElementById('mensajeInput');
  const botonEnviar = document.getElementById('enviarMensajeButton');

  botonEnviar.addEventListener('click', () => {
    enviarMensaje(usuario, mensajeInput.value);
  });

  mensajeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      enviarMensaje(usuario, mensajeInput.value);
    }
  });
}

// ...

//-------------FUNCIÓN PARA ENVIAR MENSAJE----------
function enviarMensaje(usuario, mensaje) {
  const chatBox = document.querySelector('.chatBox');
  const mensajeNuevo = `
    <div class="message my_message">
      <p>${mensaje} <span>${obtenerHoraMensaje()}</span></p>
    </div>
  `;
  chatBox.insertAdjacentHTML('beforeend', mensajeNuevo);
  // Limpia el contenido del campo de entrada de mensajes
  document.getElementById('mensajeInput').value = '';
}






// Obtenemos las clases de las secciones para aparecer y desaparecer 
// const conversationsSection = document.querySelector('.contenido__izquierda');
// const messagesSection = document.querySelector('.contenido-general--contenido__derecho');

// ------------------//Solución que me dió ChatGPT3 para qie se muestre los chat al hacerle click en mobile
// conversationsSection.addEventListener('click', function(event) {
//   const conversation = event.target.closest('.div-mensajes');

//   if (conversation) {
//     // Ocultar el listado de conversaciones y mostrar la ventana de mensajes
//     conversationsSection.style.display = 'none';
//     messagesSection.style.display = 'block';

//     // Obtener el usuario asociado a la conversación seleccionada
//     const usuario = getUsuarioFromConversation(conversation);

//     // Cargar los mensajes del usuario en la ventana de mensajes
//     cargarMensajes(usuario);
//   }
// });

// function getUsuarioFromConversation(conversation) {
//   const usuarioId = conversation.dataset.usuarioId;
//   // Buscar el usuario en tu lista de usuarios disponibles
//   // y devolver el objeto usuario correspondiente
//   return usuarios.find(usuario => usuario.id === usuarioId);
// }

// function cargarMensajes(usuario) {

//   // Solicitud utilizando fetch:
//   fetch(`http://localhost:5000/mensajes/${usuarios.id}`)
//     .then(response => response.json())
//     .then(data => {
//       const mensajes = data.mensajes;
//       // Llamar a la función dibujarMensajes para mostrar los mensajes en la ventana de mensajes
//       dibujarMensajes(usuario, mensajes);
//     })
//     .catch(error => {
//       console.error('Error al cargar los mensajes:', error);
//     });
// }



