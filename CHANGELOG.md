# Changelog

Semua perubahan penting pada project ini wajib dicatat di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) dan versi mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Aturan

- Setiap perubahan kode, UI, data, konfigurasi, atau dokumentasi wajib menambah entry di bagian `Unreleased` atau langsung pada versi baru.
- Setiap perubahan yang siap disimpan wajib menaikkan versi di `package.json`.
- Gunakan kategori: `Added`, `Changed`, `Fixed`, `Removed`, `Security`, atau `Deprecated`.
- Versi patch (`x.y.Z`) untuk bugfix, polish UI, dan perubahan internal yang kompatibel.
- Versi minor (`x.Y.z`) untuk fitur baru yang kompatibel.
- Versi major (`X.y.z`) untuk breaking change.

## [Unreleased]

## [0.8.6] - 2026-08-08

### Changed

- Memindahkan wrapper `Card` ke halaman login dan menghapus nested card dari `AccountAuthPanel` agar struktur UI lebih bersih.

## [0.8.5] - 2026-08-08

### Changed

- Memperbaiki wrapper panel autentikasi dan CTA partner di halaman `/login` agar lebih rapi serta nyaman digunakan pada mobile.

## [0.8.4] - 2026-08-08

### Changed

- Memperbaiki UI/UX card form partner dengan typography responsif, touch target input yang lebih nyaman, spacing mobile, dan CTA yang lebih jelas.

## [0.8.3] - 2026-08-08

### Changed

- Mengoptimalkan UI/UX halaman `/partner/join` dengan rasio desktop 60:40, card form yang lebih terarah, dan menyembunyikan section informasi kiri pada mobile.

## [0.8.2] - 2026-08-08

### Changed

- Menyesuaikan rasio section kiri dan panel autentikasi kanan halaman `/login` menjadi sekitar 60:40 pada desktop.

## [0.8.1] - 2026-08-08

### Fixed

- Memperbaiki error Server/Client Component pada CTA Join Now dengan mengganti penggunaan `as={Link}` menjadi link navigasi langsung.

## [0.8.0] - 2026-08-08

### Added

- Menambahkan halaman onboarding partner di `/partner/join` dengan form pengajuan dan informasi manfaat partner.

### Changed

- Mengarahkan CTA Join Partner dari header dan halaman login ke `/partner/join`.

## [0.7.0] - 2026-08-08

### Added

- Menambahkan tombol Login with Google dan Register with Google pada panel autentikasi.

## [0.6.2] - 2026-08-08

### Changed

- Menyembunyikan section informasi kiri pada tampilan mobile agar form autentikasi menjadi fokus utama.

## [0.6.1] - 2026-08-08

### Changed

- Menyesuaikan proporsi section kiri dan kanan halaman `/login` menjadi sekitar 80:30 pada desktop.

## [0.6.0] - 2026-08-08

### Changed

- Mengubah panel autentikasi `/login` menjadi form login default dengan toggle UX untuk menampilkan form register secara interaktif.

## [0.5.0] - 2026-08-04

### Added

- Menambahkan form register pada halaman `/login`.

### Changed

- Mempercantik tampilan halaman login dengan background dekoratif, trust signals, benefit cards, dan layout form login/register baru.

## [0.4.1] - 2026-08-02

### Changed

- Merapikan styling CTA header dan mengubah `Join Partner` menjadi link ke `/#partner-program`.

## [0.4.0] - 2026-08-02

### Added

- Menambahkan halaman login baru di `/login`.

### Changed

- Mengubah tombol Login di header desktop dan mobile agar mengarah ke halaman `/login`.

## [0.3.0] - 2026-08-02

### Added

- Menambahkan slug dan halaman detail deal di `/deals/[slug]`.
- Menambahkan slug dan halaman detail directory di `/directory/[slug]`.

### Changed

- Mengubah `DealCard` dan `DirectoryCard` agar seluruh card dapat diklik menuju halaman detail.

## [0.2.0] - 2026-08-02

### Added

- Menambahkan slug event berbasis nama event untuk URL detail.
- Menambahkan halaman detail event di `/events/[slug]`.

### Changed

- Mengubah `EventCard` agar seluruh card dapat diklik menuju halaman detail event.

## [0.1.2] - 2026-08-02

### Added

- Menambahkan loading skeleton pada hero promo carousel sampai gambar selesai dimuat.
- Menambahkan loading skeleton saat tombol `Muat Lebih Banyak` digunakan di event, directory, deals, dan all results.

## [0.1.1] - 2026-08-02

### Added

- Menambahkan pencarian interaktif dan tombol `Muat Lebih Banyak` pada halaman all results.
- Menambahkan komponen client `AllResultsExplorer` untuk filter, search, empty state, dan pagination hasil gabungan.
- Menambahkan file changelog dan aturan wajib update changelog/version untuk perubahan berikutnya.

### Changed

- Mengubah halaman all results agar menggunakan seluruh data dari `directories`, `events`, dan `deals`, bukan subset manual.
- Mengubah search/filter hero menjadi sticky bar terpisah agar tetap menempel saat scroll melewati hero carousel.
