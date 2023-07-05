/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/styles/style.scss":
/*!***********************************!*\
  !*** ./src/app/styles/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://maquetacion/./src/app/styles/style.scss?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/app/styles/style.scss\");\n\nconst nuevaCuentaLink = document.querySelector(\".nueva-cuenta\");\n\nnuevaCuentaLink.addEventListener(\"click\", () => {\n \n  const popupWindow = window.open(\"\", \"Registro\", \"width=400,height=400\");\n\n  popupWindow.document.write(`\n    <html>\n    <head>\n      <title>Registro</title>\n      \n    </head>\n    <body>\n      <h2>Registro</h2>\n      <form id=\"registro-form\">\n        <label for=\"nombre\">Nombre:</label>\n        <input type=\"text\" id=\"nombre\" required>\n        <label for=\"celular\">Número de Celular:</label>\n        <input type=\"text\" id=\"celular\" required>\n        <label for=\"contraseña\">Contraseña:</label>\n        <input type=\"password\" id=\"contraseña\" required>\n        <button type=\"submit\">Registrarse</button>\n      </form>\n      <script src=\"signin.js\"></script>\n    </body>\n    </html>\n  `);\n\n});\n\n\n\n\nconst validacion = __webpack_require__(/*! ../app/scripts/validacion */ \"./src/app/scripts/validacion.js\");\nvalidacion.validarCampos();\n\nconst getUsersFromServer = __webpack_require__(/*! ../app/scripts/getUsersFromServer */ \"./src/app/scripts/getUsersFromServer.js\");\ngetUsersFromServer.getUsersFromServer();\n\n//# sourceURL=webpack://maquetacion/./src/app/index.js?");

/***/ }),

/***/ "./src/app/scripts/getUsersFromServer.js":
/*!***********************************************!*\
  !*** ./src/app/scripts/getUsersFromServer.js ***!
  \***********************************************/
/***/ (() => {

eval("const URL_API = 'http://localhost:5000/usuarios'\n\nconst getUsersFromServer = async () =>{\n    const response = await fetch (URL_API);\n\n    const data = await response.json();\n    \n}\n\n\n\n//# sourceURL=webpack://maquetacion/./src/app/scripts/getUsersFromServer.js?");

/***/ }),

/***/ "./src/app/scripts/validacion.js":
/*!***************************************!*\
  !*** ./src/app/scripts/validacion.js ***!
  \***************************************/
/***/ (() => {

eval("document.querySelector('#iniciar-sesion').addEventListener('click', function(event) {\n    event.preventDefault(); // Evita que se realice la acción por defecto del formulario\n    validarCampos(); // Llama a la función para validar los campos del formulario\n  });\n\n  async function validarCampos() {\n    const numeroCelular = document.getElementById('numero-celular').value;\n    const contraseña = document.getElementById('password').value;\n  \n    if (numeroCelular === '' || contraseña === '') {\n      alert('Por favor, completa todos los campos.'); // Muestra una alerta si hay campos vacíos\n      return;\n    }\n  \n    // Realiza la validación del número de celular y la contraseña\n    const usuarios = await getUsersFromServer(); // Obtiene los usuarios del servidor (puedes implementar esta función)\n    const usuarioEncontrado = usuarios.find(usuario => usuario.numeroCell === numeroCelular);\n  \n    if (!usuarioEncontrado) {\n      alert('El número ingresado no existe.'); // Muestra una alerta si el número de celular no existe\n      return;\n    }\n  \n    if (usuarioEncontrado.password !== contraseña) {\n      alert('La contraseña ingresada es incorrecta.'); // Muestra una alerta si la contraseña es incorrecta\n      return;\n    }\n  \n    alert('Bienvenido ' + usuarioEncontrado.nombre); // Muestra una alerta de bienvenida\n    window.location.href = 'Home.html';\n  }  \n  const URL_API = 'http://localhost:5000/usuarios';\n\n  const getUsersFromServer = async () => {\n    try {\n      const response = await fetch(URL_API);\n      const data = await response.json();\n      return data;\n    } catch (error) {\n      console.error('Error al obtener los usuarios:', error);\n      return null;\n    }\n    \n}\n\n\n\n//# sourceURL=webpack://maquetacion/./src/app/scripts/validacion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;