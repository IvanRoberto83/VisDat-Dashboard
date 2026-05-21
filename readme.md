# Command Center — Polresta Yogyakarta

## Tugas Dashboard Mata Kuliah Visualisasi Data

### Kelompok:
- 71230986 - Ivan Roberto Halim
- 71230994 - Putu Gde Kenzie Carlen Mataram

 Dashboard ini memvisualisasikan data dummy real-time berisi peta insiden, data personel, kapasitas unit, dan log operasional dari Kepolisian Resor Kota Yogyakarta.

## Struktur File

```
├── main.html    # Struktur antarmuka (HTML)
├── style.css    # Tema dan tata letak visual
└── script.js    # Data, logika interaksi, dan render komponen
```

## Fitur Utama

- **Peta Interaktif DIY** — Visualisasi insiden, pos polisi, dan unit patroli di seluruh wilayah DIY (Kota Yogyakarta, Sleman, Bantul, Kulonprogo, Gunungkidul). Marker dapat diklik untuk melihat detail insiden.
- **Panel Insiden Aktif** — Daftar 12 insiden dengan badge prioritas (Kritis / Tinggi / Sedang / Rendah), lokasi, dan waktu kejadian.
- **Ringkasan Statistik** — Jumlah insiden aktif, personel bertugas, laporan masuk, dan unit patroli ditampilkan di panel kiri.
- **Trend Kejahatan 7 Hari** — Grafik garis menggunakan Chart.js.
- **Kapasitas Unit** — Bar kapasitas per satuan (Anti-Teror, AHH, Binmas, Lantas, Reskrim, Sabhara).
- **Panel Pos & Unit** — Tab untuk melihat data Pos Polisi dan Unit Khusus beserta statistik personel.
- **Log Operasional** — Timeline kronologis tindakan dan kejadian terbaru.
- **Deploy Unit** — Saat insiden dipilih, panel deploy muncul untuk mengirim unit ke TKP; aksi tercatat otomatis ke log operasional.
- **Jam Real-Time** — Jam dan tanggal diperbarui setiap detik.
- **Filter Tampilan Peta** — Tombol filter untuk menampilkan semua marker, hanya insiden, hanya personel, atau hanya patroli.

## Teknologi

- HTML5, CSS3, Vanilla JavaScript (ES6+)
- SVG untuk peta wilayah DIY
- Chart.js untuk grafik trend
- Tidak menggunakan framework frontend

## Wilayah yang Dicakup

- Kota Yogyakarta
- Sleman
- Bantul
- Kulonprogo
- Gunungkidul 