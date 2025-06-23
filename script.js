const frases = [
  "Hola... 🙈",
  "Sé que últimamente todo ha sido algo raro entre nosotros 😶",
  "Pero no quería quedarme con las ganas de hablar contigo bien 😊",
  "Me encantaría que volvamos a tener esa confianza bonita que teníamos 👥",
  "Y si me lo permites....",
  "Si te parece bien.....",
  "O hasta aun mejor......",
  "Solo tú y yo",
  "¿Te gustaría salir a tomar un cafecito conmigo? ☕",
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

function escribirTexto(elemento, texto, velocidad = 75, callback) {
  let i = 0;

  elemento.classList.remove('typewriter');
  void elemento.offsetWidth;
  elemento.textContent = "";
  elemento.classList.add('typewriter');

  function escribir() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    } else {
      if (callback) callback();
    }
  }

  escribir();
}

function mostrarFrases() {
  if (i < frases.length) {
    escribirTexto(pregunta, frases[i], 40, () => {
      setTimeout(() => {
        pregunta.classList.add('fade-out');
        setTimeout(() => {
          pregunta.classList.remove('fade-out');
          botones.style.display = i === frases.length - 1 ? 'block' : 'none';
          i++;
          mostrarFrases();
        }, 1000); // Duración del desvanecimiento
      }, 4000); // Tiempo antes de desaparecer
    });
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
  botones.style.display = 'none';
  audioYei.play();

  const mensajesFinales = [
    "¡yeeeeeeeeeeeeeeeei! 😊",
    "sabias que ibas a decir que si :)",
    "Prometo no apresurar nada... solo quiero conocerte mejor y que volvamos a reír como antes 🫶",
    "Si el destino quiere, que sea el tiempo el que decida lo demás 💫"
  ];

  let index = 0;

  function mostrarMensajes() {
    if (index < mensajesFinales.length) {
      escribirTexto(pregunta, mensajesFinales[index], 40, () => {
        index++;
        setTimeout(mostrarMensajes, 2200);
      });
    }
  }

  mostrarMensajes();
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
