# Hero Carousel, Search Bar, dan Kategori

Redesign **Hero Section** website dengan tampilan yang **compact, minimalis, modern, dan elegan** dari sisi UI/UX.

## 1. Promotional Hero Carousel

Buat **carousel banner promosi** di bagian paling atas Hero Section.

Ketentuan:
- Lebar carousel tetap **full-width / lebar seperti layout saat ini**.
- Tinggi carousel dibuat **compact namun sedikit lebih tinggi dari versi sebelumnya**, tetap jangan terlalu tinggi seperti hero banner pada umumnya.
- Isi carousel berupa **gambar banner iklan dari client**.
- Ukuran gambar banner iklan dari client:
  - Rekomendasi utama: **2800 × 960 px**.
  - Aspect ratio ideal: sekitar **2.9:1** agar aman untuk tampilan desktop dan mobile.
  - Minimum upload: **1400 × 480 px**.
  - Format: **JPG, PNG, atau WebP** dengan optimasi ukuran file.
  - Area konten penting seperti logo, teks promo, dan CTA sebaiknya berada di **safe area tengah ±70% lebar gambar**, karena gambar menggunakan `object-fit: cover` dan dapat ter-crop di sisi kiri/kanan pada ukuran layar tertentu.
  - Hindari meletakkan teks penting terlalu dekat dengan tepi gambar.
- Setiap slide hanya fokus pada tampilan gambar/banner iklan.
- Gunakan `object-fit: cover` agar gambar memenuhi area carousel dengan baik.
- Mendukung beberapa slide/banner iklan.
- Gunakan border radius yang modern dan subtle.
- Tambahkan indikator slide yang minimalis.
- Tambahkan tombol navigasi ikon kecil yang transparan/subtle di sisi carousel.
- Gunakan transisi antar-slide yang smooth.
- Mendukung autoplay pada desktop dan mobile.
- Pada mobile view, carousel **wajib bisa di-swipe manual dengan jari** seperti pola carousel marketplace modern, sekaligus tetap berjalan autoplay ketika pengguna tidak sedang berinteraksi.
- Swipe manual mobile harus tetap terasa natural: gesture horizontal mengganti slide, gesture vertikal tetap memungkinkan halaman di-scroll.
- Jangan membuat carousel terlalu dominan terhadap keseluruhan halaman.

## 2. Search Bar

Tepat di bawah carousel, buat **section pencarian** yang compact.

Ketentuan:
- Buat search bar yang minimalis tetapi tetap mudah ditemukan.
- Search bar digunakan untuk mencari item/produk yang tersedia di platform.
- Tambahkan ikon pencarian.
- Gunakan placeholder seperti **"Cari produk atau item..."**.
- Tambahkan tombol search di sisi kanan search bar, tetap compact dan tidak mendominasi.
- Gunakan border radius yang modern dengan border atau shadow yang sangat subtle.
- Search bar harus responsive dan nyaman digunakan pada desktop maupun mobile.

## 3. Kategori / Filter

Di bawah search bar, buat **section kategori dan filter** yang compact.

Ketentuan:
- Tampilkan kategori dalam bentuk **pill, chip, atau horizontal tab**.
- Sediakan kategori **"Semua"** sebagai pilihan default.
- Pengguna dapat memilih kategori untuk memfilter item/produk.
- Pada mobile, kategori dapat di-scroll secara horizontal.
- Gunakan tampilan yang minimalis dan clean.
- Buat perbedaan visual yang jelas antara kategori aktif dan tidak aktif.
- Hindari penggunaan elemen yang terlalu besar atau memenuhi banyak ruang.

## Arah UI/UX

Keseluruhan Hero Section harus memiliki tampilan:

- Compact
- Minimalis
- Elegan
- Modern
- Premium
- Clean
- Responsive
- User-friendly

Hindari hero section yang terlalu tinggi, dekorasi yang berlebihan, teks yang tidak diperlukan, dan penggunaan terlalu banyak warna.
Jarak transisi antara Hero Section dan section di bawahnya harus rapat, smooth, dan tidak terasa terlalu jauh, terutama pada mobile.

Prioritaskan hierarki visual:

**Promotional Carousel → Search Bar → Kategori / Filter**

Carousel digunakan khusus untuk menampilkan **iklan/banner promosi dari client**, sedangkan search bar dan kategori/filter digunakan untuk membantu pengguna menemukan item atau produk dengan cepat.

Buat keseluruhan layout terasa seperti **homepage marketplace modern** dengan fokus pada **kemudahan navigasi, product discovery, dan pengalaman pengguna yang sederhana namun premium**.
