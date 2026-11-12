// Fungsi untuk menghitung diskon berdasarkan subtotal dan status
function hitungDiskon(subtotal, status) {
    let diskonPersen = 0;

    // Menentukan diskon berdasarkan subtotal menggunakan if / else if / else
    if (subtotal < 50000) {
        diskonPersen = 0;
    } else if (subtotal >= 50000 && subtotal <= 99999) {
        diskonPersen = 5;
    } else {
        diskonPersen = 10;
    }

    // Tambahan diskon 5% jika status member
    if (status === "Member") {
        diskonPersen += 5;
    }

    return diskonPersen;
}

// Fungsi utama yang dipanggil oleh tombol Hitung
function hitungBelanja() {
    // Mengambil nilai input menggunakan getElementById() dan mengubah nilai angka dengan Number()
    let namaBarang = document.getElementById("namaBarang").value.trim();
    let harga = Number(document.getElementById("harga").value);
    let jumlah = Number(document.getElementById("jumlah").value);
    let status = document.getElementById("status").value;
    let elemenHasil = document.getElementById("hasil");

    // Validasi: jika nama barang kosong, harga <= 0, atau jumlah <= 0
    if (namaBarang === "" || harga <= 0 || jumlah <= 0) {
        elemenHasil.innerHTML = "<span style='color: red; font-weight: bold;'>Lengkapi semua data dengan benar!</span>";
        return; // Menghentikan proses
    }

    // Hitung subtotal
    let subtotal = harga * jumlah;

    // Panggil fungsi hitungDiskon
    let diskonPersen = hitungDiskon(subtotal, status);

    // Hitung nominal diskon dan total bayar
    let nominalDiskon = (diskonPersen / 100) * subtotal;
    let totalBayar = subtotal - nominalDiskon;

    // Membuat simulasi pembelian 1 sampai 5 buah menggunakan perulangan for
    let teksSimulasi = "<br><br><strong>Simulasi untuk " + namaBarang + " (harga satuan Rp" + harga.toLocaleString("id-ID") + "):</strong><br>";
    for (let i = 1; i <= 5; i++) {
        let simulasiSubtotal = harga * i;
        teksSimulasi += `${i} buah = Rp${simulasiSubtotal.toLocaleString("id-ID")}<br>`;
    }

    // Tampilkan hasil ke elemen kosong ber-id "hasil" dengan gaya teks hijau dan tebal
    elemenHasil.innerHTML = `
        <div class="teks-hasil">
            Barang: <strong>${namaBarang}</strong><br>
            Subtotal Rp${subtotal.toLocaleString("id-ID")}, 
            diskon ${diskonPersen}% (Rp${nominalDiskon.toLocaleString("id-ID")}), 
            total bayar Rp${totalBayar.toLocaleString("id-ID")}
        </div>
        ${teksSimulasi}
    `;
}