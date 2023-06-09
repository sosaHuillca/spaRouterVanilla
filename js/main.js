document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

const urlRoute = (event) => {
  event = event || window.event; 
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  const location = window.location.pathname; 
  if (location.length == 0) {
    location = "/";
  }
  const html = await fetch(`${location}`).then((response) => response.text());
  const js = await fetch(`${location}-contenido`).then((response) => response.text());
  document.querySelector("strong").innerHTML = html;
  document.querySelector("main").innerHTML = js
};

window.onpopstate = urlLocationHandler;

