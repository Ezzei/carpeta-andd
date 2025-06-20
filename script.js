const frases = [
    "Hola... 🙈",
    "Sé que últimamente todo ha sido algo raro entre nosotros 😶",
    "Pero no quería quedarme con las ganas de hablar contigo bien 😊",
    "Me encantaría que volvamos a tener esa confianza bonita que teníamos",
    "Y si me lo permites...",
    "¿Te gustaría salir a tomar un cafecito conmigo? ☕",
    "Solo tú y yo, como amigos... o lo que vaya naciendo, yeso"
];

const pregunta = document.getElementById('pregunta');
const botones = document.getElementById('botones');
const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const audio = document.getElementById('audio-fondo');
const iniciarBtn = document.getElementById('iniciar-btn');

let i = 0;

// Iniciar al hacer clic en el botón
iniciarBtn.addEventListener('click', () => {
    audio.play().then(() => {
        iniciarBtn.style.display = 'none';
        mostrarFrases();
    }).catch((err) => {
        pregunta.textContent = "El navegador no permitió reproducir el audio 😓";
        console.error(err);
    });
});

function mostrarFrases() {
    if (i < frases.length) {
        pregunta.textContent = frases[i];

        if (i === frases.length - 1) {
            botones.style.display = 'block';
        } else {
            botones.style.display = 'none';
        }

        i++;
        setTimeout(mostrarFrases, 3500);
    }
}

// Botón NO se escapa
btnNo.addEventListener('mouseenter', () => {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;
    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Botón SÍ da una respuesta tierna
btnSi.addEventListener('click', () => {
    pregunta.textContent = "¡yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeei!";
    botones.style.display = 'none';
});
