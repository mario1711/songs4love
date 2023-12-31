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
//1
createCard(
  cardContainer,
  "Título 7",
  "https://open.spotify.com/embed/track/6tu2FHuKL9C8pwNrityweQ?utm_source=generator",
  "100%",
  352,
  "2023-12-31T01:18:10"
);
//2
createCard(
  cardContainer,
  "Título 1",
  "https://open.spotify.com/embed/track/70LcF31zb1H0PyJoS1Sx1r?utm_source=generator",
  "100%",
  352,
  "2024-01-01T20:00:00"
);
//3
createCard(
  cardContainer,
  "Título 2",
  "https://open.spotify.com/embed/track/3k3NWokhRRkEPhCzPmV8TW?utm_source=generator",
  "100%",
  352,
  "2024-01-02T20:00:00"
);
//4
createCard(
  cardContainer,
  "Título 4",
  "https://open.spotify.com/embed/track/3jjujdWJ72nww5eGnfs2E7?utm_source=generator",
  "100%",
  352,
  "2024-01-03T20:00:00"
);
//5
createCard(
  cardContainer,
  "Título 5",
  "https://open.spotify.com/embed/track/66iygyOSvvoQQsKJ1vEXfT?utm_source=generator",
  "100%",
  352,
  "2024-01-04T20:00:00"
);
//6
createCard(
  cardContainer,
  "Título 6",
  "https://open.spotify.com/embed/track/3bP3RLXPFnGM4vtiXmmadq?utm_source=generator",
  "100%",
  352,
  "2024-01-05T20:00:00"
);
//7
createCard(
  cardContainer,
  "Título 8",
  "https://open.spotify.com/embed/track/0Wui9qdWQt5zhH0ZYXmrVq?utm_source=generator",
  "100%",
  352,
  "2024-01-06T20:00:00"
);
//8
createCard(
  cardContainer,
  "Título 9",
  "https://open.spotify.com/embed/track/3SdTKo2uVsxFblQjpScoHy?utm_source=generator",
  "100%",
  352,
  "2024-01-07T20:00:00"
);
//9
createCard(
  cardContainer,
  "Título 11",
  "https://open.spotify.com/embed/track/1EKZmfqveHKe78Isfk07w4?utm_source=generator",
  "100%",
  352,
  "2024-01-08T20:00:00"
);
//10
createCard(
  cardContainer,
  "Título 10",
  "https://open.spotify.com/embed/track/0zlnHTHiBQ68ZCAmTw5ozm?utm_source=generator",
  "100%",
  352,
  "2024-01-09T20:00:00"
);
//11
createCard(
  cardContainer,
  "Título 10",
  "https://open.spotify.com/embed/track/6ft9PAgNOjmZ2kFVP7LGqb?utm_source=generator",
  "100%",
  352,
  "2024-01-10T20:00:00"
);
//12
createCard(
  cardContainer,
  "Título 3",
  "https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator",
  "100%",
  352,
  "2024-01-11T20:00:00"
);
