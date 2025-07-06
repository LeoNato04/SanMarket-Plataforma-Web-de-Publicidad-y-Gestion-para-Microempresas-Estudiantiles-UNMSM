// auth.js

// Importa los módulos necesarios de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { sendEmailVerification, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
    const auth = getAuth(app);

    // Función para actualizar la visibilidad del botón de perfil y cerrar sesión
    function actualizarVisibilidadElementos(user) {

        const perfilLink = document.getElementById("perfil-link");
        const loginLink = document.getElementById("login-link");
    
    // Manejar la visibilidad del enlace de inicio de sesión
        if (user) {
            loginLink.style.display = "none"; // Ocultar el enlace de inicio de sesión si hay usuario autenticado
            perfilLink.style.display = "block"; // Mostrar el enlace de perfil si hay usuario autenticado
        } else {
            loginLink.style.display = "block"; // Mostrar el enlace de inicio de sesión si no hay usuario autenticado
            perfilLink.style.display = "none"; // Ocultar el enlace de perfil si no hay usuario autenticado
        }
        
    }
    
    // Detectar cambios en el estado de autenticación
    document.addEventListener('DOMContentLoaded', function() {
        onAuthStateChanged(auth, (user) => {
            actualizarVisibilidadElementos(user);
        });
    
    // Manejar el clic en el botón de cerrar sesión
    document.getElementById("cerrar").addEventListener('click', (e) => {
        auth.signOut().then(() => {
            alert('Sesión Cerrada');
            window.location.href = "index.html"; // Redirigir a la página de inicio de sesión después de cerrar sesión
        }).catch((error) => {
            alert('Error al cerrar sesión');
        });
    });

    // Si es necesario)
    function habilitarEdicionPerfil() {
        // La edición de perfil si se requiere
    }
});
