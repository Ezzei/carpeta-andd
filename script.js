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
const lluvia = document.getElementById('lluvia');
const audioYei = document.getElementById('audio-yei');

let i = 0;

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
    botones.style.display = i === frases.length - 1 ? 'block' : 'none';
    i++;
    setTimeout(mostrarFrases, 3500);
  }
}

function moverBotonNo() {
  const contenedor = document.querySelector('.contenedor');
  const contWidth = contenedor.offsetWidth;
  const contHeight = contenedor.offsetHeight;

  const btnWidth = btnNo.offsetWidth;
  const btnHeight = btnNo.offsetHeight;

  const maxX = contWidth - btnWidth;
  const maxY = contHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btnNo.style.position = "absolute";
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
}

btnNo.addEventListener('mouseenter', moverBotonNo);
btnNo.addEventListener('touchstart', moverBotonNo);

btnSi.addEventListener('click', () => {
  pregunta.textContent = "¡yeeeeeeeeeeeeeeeei!";
  botones.style.display = 'none';
  audioYei.play();
});

function crearLluvia() {
  for (let i = 0; i < 100; i++) {
    const gota = document.createElement('div');
    gota.classList.add('gota');
    gota.style.left = Math.random() * 100 + 'vw';
    gota.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
    gota.style.top = '-' + Math.random() * 100 + 'px';
    lluvia.appendChild(gota);
  }
}

crearLluvia();
