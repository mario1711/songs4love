/* localStorage.clear();
function createCard(title, spotifyUrl, width, height) {
  const cardContainer = document.getElementById("cards-container");

  const card = document.createElement("div");
  card.className =
    "relative w-full m-2 sm:w-auto mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-2xl cursor-pointer";

  const cardId = `card-${title.replace(/\s+/g, "-").toLowerCase()}`; // Genera un ID único para cada tarjeta

  // Recuperar el estado de revealed del localStorage
  const isRevealed = localStorage.getItem(cardId) === "true";

  // Div de cobertura inicialmente visible o no, según el estado recuperado
  const cover = document.createElement("div");
  cover.className = "cover";
  if (isRevealed) {
    card.classList.add("revealed");
    cover.style.opacity = "0";
  }

  const cardHeader = document.createElement("div");
  cardHeader.className = "flex p-2 gap-1";
  const colors = ["red", "yellow", "green"];
  colors.forEach((color) => {
    const circle = document.createElement("div");
    circle.className = color === "box" ? `circle ${color}` : color;
    const span = document.createElement("span");
    span.className = `bg-${color}-500 inline-block w-3 h-3 rounded-full`;
    circle.appendChild(span);
    cardHeader.appendChild(circle);
  });

  const cardContent = document.createElement("div");
  cardContent.className = "card__content";
  const iframe = document.createElement("iframe");
  iframe.className = "w-full h-64 sm:h-96 rounded-md";
  iframe.src = spotifyUrl;
  iframe.width = "100%";
  iframe.height = height;
  iframe.frameBorder = "0";
  iframe.allowfullscreen = true;
  iframe.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  iframe.loading = "lazy";

  cardContent.appendChild(iframe);
  card.appendChild(cover);
  card.appendChild(cardHeader);
  card.appendChild(cardContent);

  // Añadir evento de clic para revelar contenido
  card.addEventListener("click", function () {
    card.classList.add("revealed"); // Añade la clase 'revealed' al hacer clic
    cover.style.opacity = "0"; // Cambia la opacidad del cover a 0 al hacer clic
    // Almacena el estado de revealed en el localStorage
    localStorage.setItem(cardId, "true");
  });

  cardContainer.appendChild(card);
}

// Crear las tarjetas como antes
createCard(
  "Título 1",
  "https://open.spotify.com/embed/track/70LcF31zb1H0PyJoS1Sx1r?utm_source=generator",
  "100%",
  352
);
createCard(
  "Título 2",
  "https://open.spotify.com/embed/track/3k3NWokhRRkEPhCzPmV8TW?utm_source=generator",
  "100%",
  352
);
createCard(
  "Título 3",
  "https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator",
  "100%",
  352
); 
createCard(
  "Título 3",
  "https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator",
  "100%",
  352
);
createCard(
  "Título 2",
  "https://open.spotify.com/embed/track/3k3NWokhRRkEPhCzPmV8TW?utm_source=generator",
  "100%",
  352
);
createCard(
  "Título 3",
  "https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator",
  "100%",
  352
); 
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////               Aqui va lo otro        ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

localStorage.clear();

function createCard(cardContainer, title, spotifyUrl, width, height, revealDateTime) {
  const card = document.createElement("div"); //aqui se crea la caarta
  card.className = //con su estilo
    "relative w-full m-2 sm:w-auto mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-2xl cursor-pointer";

  const cardId = `card-${title.replace(/\s+/g, "-").toLowerCase()}`; //le anade un id para identificarlo
  const revealDateTimeObject = new Date(revealDateTime); //utiliza la fecha pasada como parametro
  const isRevealed = localStorage.getItem(cardId) === "true" || Date.now() >= revealDateTimeObject.getTime(); //aqui se crea un boleano para saver si ya esta revalada

  const cover = document.createElement("div");
  cover.className = "cover";
  if (isRevealed) {
    card.classList.add("revealed");
    cover.style.opacity = "0";
  }

  const cardHeader = document.createElement("div");
  cardHeader.className = "flex p-2 gap-1";
  const colors = ["red", "yellow", "green"];
  colors.forEach((color) => {
    const circle = document.createElement("div");
    circle.className = color === "box" ? `circle ${color}` : color;
    const span = document.createElement("span");
    span.className = `bg-${color}-500 inline-block w-3 h-3 rounded-full`;
    circle.appendChild(span);
    cardHeader.appendChild(circle);
  });

  const cardContent = document.createElement("div");
  cardContent.className = "card__content";
  const iframe = document.createElement("iframe");
  iframe.className = "w-full h-64 sm:h-96 rounded-md";
  iframe.src = spotifyUrl;
  iframe.width = "100%";
  iframe.height = height;
  iframe.frameBorder = "0";
  iframe.allowfullscreen = true;
  iframe.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  iframe.loading = "lazy";

  cardContent.appendChild(iframe);
  card.appendChild(cover);
  card.appendChild(cardHeader);
  card.appendChild(cardContent);

  const countdownContainer = document.createElement("div");
  countdownContainer.className = "absolute top-0 right-0 m-2 p-2 bg-black text-white";
  card.appendChild(countdownContainer);

  function updateCountdown() {
    const now = Date.now();
    const timeRemaining = revealDateTimeObject.getTime() - now;

    if (timeRemaining <= 0) {
      countdownContainer.innerHTML = "Haz clic para revelar";
      card.addEventListener("click", revealCard);
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      countdownContainer.innerHTML = `Tiempo restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      setTimeout(updateCountdown, 1000);
    }
  }

  function revealCard() {
    card.classList.add("revealed");
    cover.style.opacity = "0";
    countdownContainer.innerHTML = "Ya revelada";
    localStorage.setItem(cardId, "true");
  }

  cardContainer.appendChild(card);

  if (!localStorage.getItem(cardId)) {
    updateCountdown();
  } else {
    countdownContainer.innerHTML = "Ya revelada";
  }
}

const cardContainer = document.getElementById("cards-container");


createCard(
  cardContainer,
  "Título 1",
  "https://open.spotify.com/embed/track/70LcF31zb1H0PyJoS1Sx1r?utm_source=generator",
  "100%",
  352,
  "2023-12-30T21:10:00"
);

createCard(
  cardContainer,
  "Título 2",
  "https://open.spotify.com/embed/track/3k3NWokhRRkEPhCzPmV8TW?utm_source=generator",
  "100%",
  352,
  "2024-02-01T18:00:00"
);

createCard(
  cardContainer,
  "Título 3",
  "https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator",
  "100%",
  352,
  "2024-03-01T15:30:00"
);


