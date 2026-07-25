# Redesign Navbar / Header

Pertahankan struktur dan layout **navbar/header yang sudah ada saat ini**, tetapi lakukan beberapa penyesuaian berikut:

- **Hapus tombol switch Dark Mode / Light Mode** beserta seluruh fungsionalitasnya.
- Website harus menggunakan **Light Mode sebagai tampilan default** secara permanen.
- **Bagian kiri navbar** berisi:
    - Logo website.
    - Menu navigasi utama dengan format **icon + label menu**.
    - Setiap menu menggunakan **icon + text** agar lebih modern dan mudah dikenali.
    - Contoh format item menu: `icon_home Home`, `icon_calendar Events`, `icon_compass Directory`.
    - Icon harus berada di sebelah kiri label menu dengan spacing yang konsisten.
- **Bagian kanan navbar** berisi:
    - Tombol **Login** dengan icon.
    - Jika user sudah login, tampilkan **Profile/User Menu** dengan icon/avatar dan dropdown menu.
- **Tampilan Mobile**:
    - Di sebelah kanan tampilkan **icon Notification**.
    - Tampilkan **icon Hamburger Menu** untuk membuka navigasi mobile.
    - Sembunyikan menu navigasi desktop dan tampilkan dalam mobile menu/drawer saat hamburger diklik.

Gunakan desain yang **compact, minimalis, modern, elegan, dan responsive**.

Pertahankan visual identity dan layout yang sudah ada saat ini. Jangan melakukan perubahan besar pada struktur navbar selain kebutuhan di atas.

Fokus pada:
- Clean UI
- Consistent spacing
- Icon yang relevan
- Responsive behavior
- Mobile-friendly navigation
- Elegant hover dan active states
- Aksesibilitas yang baik

Struktur navigasi:

**Desktop:**

`[Logo] [Icon + Menu] [Icon + Menu] [Icon + Menu] ........ [Login/Profile + Icon]`

**Mobile:**

`[Logo] ................................ [Notification Icon] [Hamburger Icon]`
