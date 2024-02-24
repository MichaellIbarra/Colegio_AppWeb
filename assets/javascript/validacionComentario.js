document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario
    const formulario = document.getElementById('contact-form');

    // Agrega un evento al formulario para manejar el envío
    formulario.addEventListener('submit', function (event) {
        // Detén el envío del formulario predeterminado
        event.preventDefault();

        // Realiza la validación de los campos
        if (validarCampos()) {
            // Si la validación es exitosa, muestra el SweetAlert
            Swal.fire({
                title: '¡Enviado!',
                text: 'Tu mensaje ha sido enviado correctamente.',
                icon: 'success',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'btn-success'
                }
            }).then((result) => {
                // Verifica si el usuario hizo clic en "OK"
                if (result.isConfirmed) {
                    // Envía el formulario de manera asíncrona
                    formulario.submit();
                }
            });
        }
    });

    function validarCampos() {
        const nombre_completo = document.getElementById('nombre_completo').value;
        const correo = document.getElementById('correo').value;
        const comentario = document.getElementById('comentario').value;

        if (nombre_completo.trim() === '' || correo.trim() === '' || comentario.trim() === '') {
            Swal.fire({
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos.',
                icon: 'warning',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'btn-warning'
                }
            });
            return false;
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            Swal.fire({
                title: 'Formato de correo inválido',
                text: 'Por favor, ingresa una dirección de correo válida.',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'btn-danger'
                }
            });
            return false;
        }

        // Validación de longitud del mensaje
        if (comentario.length > 255) {
            Swal.fire({
                title: 'Mensaje demasiado largo',
                text: 'El mensaje debe tener como máximo 255 caracteres.',
                icon: 'warning',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'btn-warning'
                }
            });
            return false;
        }

        if (nombre_completo.length > 90) {
            Swal.fire({
                title: 'Nombre demasiado largo',
                text: 'El Nombre debe tener como máximo 90 caracteres.',
                icon: 'warning',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'btn-warning'
                }
            });
            return false;
        }


        // Validación exitosa
        return true;
    }
});
