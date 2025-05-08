const favoritList = document.getElementById("favoritList");
let data = JSON.parse(localStorage.getItem("favoritResort")) || [];

function render() {
  favoritList.innerHTML = "";
  if (data.length === 0) {
    favoritList.innerHTML = "<p>Belum ada resort favorit.</p>";
    return;
  }

  data.forEach((resort, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${resort.gambar}" alt="${resort.nama}">
      <h3>${resort.nama}</h3>
      <button onclick="hapusFavorit(${index})">🗑️ Hapus</button>
    `;
    favoritList.appendChild(card);
  });
}

function hapusFavorit(index) {
  if (confirm("Yakin ingin menghapus resort ini?")) {
    data.splice(index, 1);
    localStorage.setItem("favoritResort", JSON.stringify(data));
    render();
  }
}

render();
