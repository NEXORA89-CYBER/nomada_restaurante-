const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".menu-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.dataset.category;

    cards.forEach(card => {
      card.style.display = category === "todos" || card.dataset.category === category ? "" : "none";
    });
  });
});

const reservationForm = document.getElementById("reservationForm");
reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const people = document.getElementById("people").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !date) return;

  const message = `Hola Nómada, quiero solicitar una reserva.%0A%0ANombre: ${encodeURIComponent(name)}%0APersonas: ${encodeURIComponent(people)}%0AFecha: ${encodeURIComponent(date)}%0AHora: ${encodeURIComponent(time)}`;
  window.open(`https://wa.me/573000000000?text=${message}`, "_blank");
});
