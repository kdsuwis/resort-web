const resortList = document.getElementById("resortList");
const lokasiSelect = document.getElementById("lokasiSelect");

const dataResort = [
  {
    id: 1,
    nama: "Bali Paradise Resort",
    lokasi: "Bali",
    harga: 1200000,
    gambar: "https://picsum.photos/id/1018/300/200"
  },
  {
    id: 2,
    nama: "Lombok Seaside",
    lokasi: "Lombok",
    harga: 950000,
    gambar: "https://picsum.photos/id/1015/300/200"
  },
  {
    id: 3,
    nama: "Raja Ampat Eco Resort",
    lokasi: "Raja Ampat",
    harga: 2000000,
    gambar: "https://picsum.photos/id/1016/300/200"
  }
];

function tampilkanResort() {
  const lokasi = lokasiSelect.value;
  resortList.innerHTML = "";

  const hasil = lokasi === "" ? dataResort : dataResort.filter(r => r.lokasi === lokasi);

  hasil.forEach(resort => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${resort.gambar}" alt="${resort.nama}">
      <h3>${resort.nama}</h3>
      <p><strong>Lokasi:</strong> ${resort.lokasi}</p>
      <p><strong>Harga:</strong> Rp${resort.harga.toLocaleString()}</p>
      <button onclick="tambahFavorit(${resort.id}, '${resort.nama.replace(/'/g, "\'")}', '${resort.gambar}')">❤️ Favorit</button>
    `;
    resortList.appendChild(card);
  });
}

function tambahFavorit(id, nama, gambar) {
  const data = JSON.parse(localStorage.getItem("favoritResort")) || [];
  if (!data.find(r => r.id === id)) {
    data.push({ id, nama, gambar });
    localStorage.setItem("favoritResort", JSON.stringify(data));
    alert("Resort ditambahkan ke favorit!");
  } else {
    alert("Sudah ada di favorit.");
  }
}
