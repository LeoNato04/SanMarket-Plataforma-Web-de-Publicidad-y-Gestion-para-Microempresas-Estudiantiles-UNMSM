// Importa los módulos necesarios de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Configuración de tu aplicación web Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBgbmkxgRJ74qT0l-UM1ZeMw4yY0UY4g6U",
  authDomain: "sanmarket-d2ffb.firebaseapp.com",
  projectId: "sanmarket-d2ffb",
  storageBucket: "sanmarket-d2ffb.appspot.com",
  messagingSenderId: "173571345194",
  appId: "1:173571345194:web:4939908ba14df9dbca6c53",
  measurementId: "G-GPPSMT21NM"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtén los valores del formulario
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // Guarda los datos en la base de datos
    set(ref(db, 'user/' + username), {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password // Guarda la contraseña también
    }).then(() => {
        // Mensaje de éxito
        alert("Te registraste correctamente!");
    }).catch((error) => {
        // Maneja los errores
        console.error("Error al escribir en la base de datos: ", error);
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
    });
});
