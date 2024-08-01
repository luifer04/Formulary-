// Se añade un eventListener al formulario para interceptar el envío
document.getElementById('cuestionarioForm').addEventListener('submit', function(event) {
    // Se previene el comportamiento por defecto del formulario
    event.preventDefault();

    // Se recogen los valores de los campos del formulario y se almacenan en un objeto formData
    const formData = {
        question1: document.getElementById('question1').value,
        question2: document.getElementById('question2').value,
        question3: document.getElementById('question3').value,
        question4: document.getElementById('question4').value,
        question5: document.getElementById('question5').value,
        question6: document.getElementById('question6').value,
        question7: document.getElementById('question7').value,
        question8: document.getElementById('question8').value,
        question9: document.getElementById('question9').value,
        question10: document.getElementById('question10').value,
    };

    // Se envían los datos al servidor usando Fetch API
    fetch('http://www.google.com/intl/es-419/privacy', { // Reemplaza con la URL de tu servidor
        method: 'POST', // Especificando el método HTTP
        headers: {
            'Content-Type': 'application/json' // Los headers de la petición
        },
        body: JSON.stringify(formData) // El cuerpo de la petición en formato JSON
    })
    .then(response => response.json())
    .then(data => {
        // Se maneja la respuesta del servidor
        console.log('Success:', data);
        // Se actualiza el contenido del párrafo con id respuesta para informar al usuario del éxito del envío
        document.getElementById('respuesta').innerText = 'Cuestionario enviado con éxito';
    })
    .catch((error) => {
        // Manejo de errores
        console.error('Error:', error);
        // Se actualiza el contenido del párrafo con id respuesta para informar al usuario del fallo del envío
        document.getElementById('respuesta').innerText = 'Hubo un error al enviar el cuestionario';
    });
});