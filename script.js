document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('recommendationForm');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const container = document.querySelector('.testimonial-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = nameInput.value.trim() || 'Anonymous';
        const message = messageInput.value.trim();

        if (message === '') {
            alert('Please enter a message.');
            return;
        }

        // Crear nueva tarjeta
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `<p>“ ${message} ”<br><br><strong>– ${name}</strong></p>`;

        container.appendChild(card);

        // Limpiar formulario
        form.reset();

        // Mostrar diálogo emergente
        showPopup('Thank you for your recommendation!');
    });

    // Función para crear el mensaje emergente
    function showPopup(message) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = message;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('show');
        }, 100);

        setTimeout(() => {
            popup.classList.remove('show');
            popup.remove();
        }, 3000);
    }
});


