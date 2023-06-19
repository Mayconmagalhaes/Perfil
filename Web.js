// constancia que chama o corpo
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"), // seleção de elemento
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text")

toggle.addEventListener("click", () =>{ //Evento click para o sidebar (Abrir)
    sidebar.classList.toggle("close");
});

modeSwtich.addEventListener("click", () =>{ //Evento click para o sidebar (fechar)
  sidebar.classList.remove("close")
});

modeSwtich.addEventListener("click", () =>{ //Evento click para o dark e light mode
  body.classList.toggle("dark")

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode"
  } else {
    modeText.innerText = "Dark Mode"
  }
});