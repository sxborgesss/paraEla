//carrossel
const slidesEl = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const indicators = document.querySelectorAll('.indicator');
let index = 0;
let intervalo;

function mostrarProximo() {
  index = (index + 1) % totalSlides;
  atualizarCarrossel();
}

function atualizarCarrossel() {
  const deslocamento = -index * 100;
  slidesEl.style.transform = `translateX(${deslocamento}%)`;
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    atualizarCarrossel();
  });
});

function iniciarCarrossel() {
  intervalo = setInterval(mostrarProximo, 3000);
}

function pararCarrossel() {
  clearInterval(intervalo);
}

const carousel = document.querySelector('.carrossel');
carousel.addEventListener('mouseenter', pararCarrossel);
carousel.addEventListener('mouseleave', iniciarCarrossel);

iniciarCarrossel();


//corações drop
const heartBg = document.querySelector('.heart-background');

function createHeart() {
  const heart = document.createElement('div');
  heart.innerText = '💜';
  heart.classList.add('heart');

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

  heartBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Estilo via JS
const style = document.createElement('style');
style.innerHTML = `
  .heart {
    position: absolute;
    top: 2rem;
    font-size: 2.0rem;
    animation: fall linear forwards;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

//função data
    // Define a data inicial
    const dataInicial = new Date("2024-05-05T00:00:00");

    function atualizarTempo() {
      const agora = new Date();
      let diff = agora - dataInicial; // diferença em milissegundos

      // Converte para segundos
      let segundos = Math.floor(diff / 1000);

      const anos = Math.floor(segundos / (365 * 24 * 60 * 60));
      segundos %= 365 * 24 * 60 * 60;

      const meses = Math.floor(segundos / (30 * 24 * 60 * 60));
      segundos %= 30 * 24 * 60 * 60;

      const dias = Math.floor(segundos / (24 * 60 * 60));
      segundos %= 24 * 60 * 60;

      const horas = Math.floor(segundos / 3600);
      segundos %= 3600;

      const minutos = Math.floor(segundos / 60);
      segundos %= 60;

      // Mostra no HTML
      document.getElementById("tempo").innerHTML =
        `${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ` +
        `${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`;
    }

    // Atualiza a cada segundo
    setInterval(atualizarTempo, 1000);

    // Chama logo que carregar
    atualizarTempo();

    //função Carta
function mostrarCarta() {
    const carta = document.getElementById("Carta");

    // Ativa a classe no body para esconder o restante
    document.body.classList.add("carta-aberta");

    // Mostra a carta com transição suave
    carta.classList.add("mostrar");

    // Scroll até a carta
    setTimeout(() => {
        carta.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 200);
}

function voltarPagina() {
    const carta = document.getElementById("Carta");

    // Esconde a carta
    carta.classList.remove("mostrar");

    // Remove o modo "carta aberta"
    document.body.classList.remove("carta-aberta");

    // Espera um pouco pra transição suavizar
    setTimeout(() => {
        const container2 = document.querySelector(".container2");
        const offsetTop = container2.getBoundingClientRect().top + window.scrollY;

        // Ajusta a posição subindo 100px pra compensar o iframe
        window.scrollTo({
            top: offsetTop - 100,
            behavior: 'smooth'
        });
    }, 300);
}