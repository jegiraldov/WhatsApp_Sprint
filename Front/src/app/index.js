import './styles/style.scss';
const nuevaCuentaLink = document.querySelector(".nueva-cuenta");

nuevaCuentaLink.addEventListener("click", () => {
 
  const popupWindow = window.open("", "Registro", "width=400,height=400");

  popupWindow.document.write(`
    <html>
    <head>
      <title>Registro</title>
      
    </head>
    <body>
      <h2>Registro</h2>
      <form id="registro-form">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required>
        <label for="celular">Número de Celular:</label>
        <input type="text" id="celular" required>
        <label for="contraseña">Contraseña:</label>
        <input type="password" id="contraseña" required>
        <button type="submit">Registrarse</button>
      </form>
      <script src="signin.js"></script>
    </body>
    </html>
  `);

});




const validacion = require('../app/scripts/validacion');
validacion.validarCampos();

const getUsersFromServer = require('../app/scripts/getUsersFromServer');
getUsersFromServer.getUsersFromServer();