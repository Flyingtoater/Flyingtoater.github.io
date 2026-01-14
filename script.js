// === Sidebar & Overlay ===
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if(menuBtn && sidebar && overlay){
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
}

// === Interactive Map Hover ===
const tooltip = document.getElementById("tooltip");
const map = document.getElementById("world-map");

if (map) {
  map.addEventListener("mousemove", (e) => {
    if (e.target.tagName === "path") {
      const country = e.target.getAttribute("title");
      tooltip.textContent = country;
      tooltip.style.opacity = 1;
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY - 25 + "px";
    } else {
      tooltip.style.opacity = 0;
    }
  });

  map.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
  });
}