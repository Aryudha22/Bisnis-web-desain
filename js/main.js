function renderKeranjang() {
  const list = document.getElementById("keranjang");
  const totalSpan = document.getElementById("total");
  list.innerHTML = "";
  let total = 0;
  keranjang.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp ${item.harga}`;
    list.appendChild(li);
    total += item.harga;
  });
  totalSpan.textContent = total;
}

function prosesCheckout() {
  const metode = document.getElementById("metode").value;
  if (metode === "") {
    alert("Silakan pilih metode pembayaran terlebih dahulu.");
    return;
  }

  if (keranjang.length === 0) {
    alert("Keranjang kosong, silakan pilih jasa terlebih dahulu.");
    return;
  }

  let konfirmasi = confirm("Apakah Anda yakin ingin menyelesaikan pesanan?");
  if (konfirmasi) {
    let pesan = "Halo Admin, saya ingin memesan jasa berikut:\n";
    keranjang.forEach((item, i) => {
      pesan += `${i + 1}. ${item.nama} - Rp ${item.harga}\n`;
    });
    let total = keranjang.reduce((acc, item) => acc + item.harga, 0);
    pesan += `Total: Rp ${total}\nMetode Pembayaran: ${metode}`;

    let urlWA = "https://wa.me/6281274365441?text=" + encodeURIComponent(pesan);
    window.open(urlWA, "_blank");

    keranjang = [];
    renderKeranjang();
    document.getElementById("metode").value = "";
  }
}
