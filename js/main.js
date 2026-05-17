
// ===============================
// 🍔 MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // baja → oculta
    nav.style.top = "-80px";
  } else {
    // sube → muestra
    nav.style.top = "0";
  }

  lastScroll = currentScroll;
});


const video = document.getElementById("miVideo");

/* PAUSAR AUTOMÁTICAMENTE
   CUANDO SALE DE PANTALLA */

window.addEventListener("scroll", () => {

  const rect = video.getBoundingClientRect();

  const visible =
    rect.top < window.innerHeight &&
    rect.bottom > 0;

  if(!visible){
    video.pause();
  }

});
// ===============================
// 🎨 DATA
// ===============================
const artworks = [
  { img: "Img/Abstracto.jpg", title: "Abstracto", desc: "Abstracto · 70x70 cm", year: "2020", tipo: "Lienzo", categoria: "Abstracto" },

  { img: "Img/Bluerox.jpg", title: "Bluerox", desc: "Abstracto · 80x60 cm", year: "2022", tipo: "Lienzo", categoria: "Abstracto" },

  { img: "Img/Chelaa.jpg", title: "Chelaa", desc: "Retrato · 60x50 cm", year: "2022", tipo: "Lienzo", categoria: "Retrato" },

  { img: "Img/choco-cacao.avif", title: "Chocó Cacao", desc: "Paisaje · 60x50 cm", year: "2023", tipo: "Cuadro", categoria: "Paisaje" },

  { img: "Img/Crisiro.jpg", title: "Crisiro", desc: "Retrato · 70x70 cm", year: "2021", tipo: "Lienzo", categoria: "Retrato" },

  { img: "Img/Cuaren.jpg", title: "Cuarentena", desc: "Abstracto · 70x70 cm", year: "2021", tipo: "Cuadro", categoria: "Abstracto" },

  { img: "Img/Emper_Ch.jpg", title: "Emperador", desc: "Retrato · 80x60 cm", year: "2022", tipo: "Lienzo", categoria: "Retrato" },

  { img: "Img/Espatula.jpg", title: "Espátula", desc: "Técnica · 50x50 cm", year: "2020", tipo: "Lienzo", categoria: "Abstracto" },

  { img: "Img/Estudio.jpg", title: "Estudio", desc: "Abstracto · 70x70 cm", year: "2020", tipo: "Lienzo", categoria: "Abstracto" },

  { img: "Img/Hijos_Mios.jpg", title: "Hijos Míos", desc: "Familiar · 80x60 cm", year: "2023", tipo: "Cuadro", categoria: "Retrato" },

  { img: "Img/Madera.jpg", title: "Madera", desc: "Naturaleza · 60x40 cm", year: "2021", tipo: "Lienzo", categoria: "Paisaje" },

  { img: "Img/Marina_BT.jpg", title: "Marina", desc: "Paisaje · 70x50 cm", year: "2022", tipo: "Lienzo", categoria: "Paisaje" },

  { img: "Img/Maternidad.jpg", title: "Maternidad", desc: "Figura · 60x50 cm", year: "2023", tipo: "Cuadro", categoria: "Figura" },

  { img: "Img/Mosmart.jpg", title: "Mosmart", desc: "Arte moderno · 70x60 cm", year: "2022", tipo: "Lienzo", categoria: "Abstracto" },

  { img: "Img/Ocean.jpg", title: "Ocean", desc: "Paisaje · 80x60 cm", year: "2021", tipo: "Lienzo", categoria: "Paisaje" },

  { img: "Img/Retrato 01.jpg", title: "Retrato 01", desc: "Retrato · 50x40 cm", year: "2022", tipo: "Lienzo", categoria: "Retrato" },

  { img: "Img/Retrato 02.jpg", title: "Retrato 02", desc: "Retrato · 50x40 cm", year: "2022", tipo: "Lienzo", categoria: "Retrato" },

  { img: "Img/Retrato 03.jpg", title: "Retrato 03", desc: "Retrato · 50x40 cm", year: "2022", tipo: "Lienzo", categoria: "Retrato" },

  { img: "Img/Tambor.jpg", title: "Tambor", desc: "Cultura · 60x50 cm", year: "2023", tipo: "Cuadro", categoria: "Cultura" },

  { img: "Img/Zarr.jpg", title: "Zarr", desc: "Abstracto · 70x70 cm", year: "2021", tipo: "Lienzo", categoria: "Abstracto" }
];

// ===============================
// ⚙️ VARIABLES
// ===============================
const galleryContainer = document.getElementById("gallery-container");
const pagination = document.getElementById("pagination");



let currentPage = 1;
const itemsPerPage = artworks.length;

// ===============================
// 🖼️ RENDER GALERÍA (SOLO UNA VEZ)
// ===============================
function renderGallery() {
  galleryContainer.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const items = artworks.slice(start, start + itemsPerPage);

  items.forEach(art => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${art.img}" alt="${art.title}">

      <div class="card-overlay">
        <h3>${art.title}</h3>
        <p>${art.desc}</p>

        <div class="card-info">
          <span>${art.year}</span>
          <span>${art.tipo}</span>
        </div>

        <div class="acciones">
          <button class="btn-ver">Ver</button>
        </div>
      </div>
    `;

    // 👉 MODAL
    card.querySelector(".btn-ver").onclick = () => openModal(art);

    galleryContainer.appendChild(card);
  });

  renderPagination();
}

// ===============================
// 📄 PAGINACIÓN
// ===============================
function renderPagination() {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(artworks.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    if (i === currentPage) btn.classList.add("active");

    btn.onclick = () => {
      currentPage = i;
      renderGallery();
    };

    pagination.appendChild(btn);
  }
}

// ===============================
// 🪟 MODAL + SLIDER
// ===============================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("modal-caption");

let currentIndex = 0;

// abrir modal
function openModal(art) {
  currentIndex = artworks.indexOf(art);
  showImage();
  modal.style.display = "block";
}



// mostrar imagen actual
function showImage() {
  const art = artworks[currentIndex];

  modalImg.src = art.img;

  caption.innerHTML = `
    <h2>${art.title}</h2>
    <p>${art.desc}</p>
    <small>${art.year} • ${art.tipo}</small>
  `;
}

// siguiente
function nextImage() {
  currentIndex = (currentIndex + 1) % artworks.length;
  showImage();
}

// anterior
function prevImage() {
  currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
  showImage();
}

// botones
document.querySelector(".next").onclick = nextImage;
document.querySelector(".prev").onclick = prevImage;

// cerrar
document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

// cerrar afuera
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// teclado ⌨️
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") modal.style.display = "none";
  }
});

// ===============================
// 🚀 INIT
// ===============================
renderGallery();