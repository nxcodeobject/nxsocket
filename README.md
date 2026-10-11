# NxSocket — Website

Landing page promosi **NxSocket** (CLI + platform WebSocket untuk fitur realtime).

## Repo & URL

- **Repo GitHub**: https://github.com/nxcodeobject/nxsocket
- **Live (GitHub Pages)**: https://nxcodeobject.github.io/nxsocket/ — Pages source: branch `main`, path `/` (root); semua file web HARUS tetap di root repo ini.
- **Folder kerja**: `D:\Framework\CLI\NxSocket\website\`
- **Pratinjau lokal**: http://localhost:8088/
- **Proyek induk (source)**: `D:\Framework\CLI\NxSocket\` (TypeScript, CLI `nxsocket`)

## Struktur

```
index.html   landing page (hero, fitur, modul, arsitektur, demo, unduh, cara mulai, FAQ)
style.css    tema gelap + aksen hijau NxSocket, responsif (grid demo .dm-grid + kartu unduh .dl-grid)
index.js     i18n ID/EN (localStorage + deteksi bahasa browser)
logo.svg     logo (salinan dari public/icons/nxsocket.svg)
```

## Isi halaman

1. Hero — tagline + mockup terminal (`gateway info`, `server`)
2. Kenapa NxSocket — 6 kartu (modul, gateway token, reconnect/resume, adapter, suara-video, uji dari HP)
3. Modul — chip 21 modul (chat, presence, WebRTC, meeting, SFU, AI, OTP, FCM, …)
4. Arsitektur — alur Client → Gateway → Server + diagram
5. Demo browser — 14 tautan ke `http://127.0.0.1:7080` (`/v1/demo` … `/v1/demo12`, `/v1/otp`, `/v1/qr`)
6. Unduh NxSocket — 2 kartu binary standalone (Windows `.exe` + Linux x64) dari GitHub Releases + catatan cara pakai (jalan tanpa Node.js, `.env` opsional di folder kerja) + tautan semua rilis
7. Cara mulai — 4 langkah (unduh binary → gateway info → server → buka demo)
8. Client API + tabel event protokol
9. Perintah CLI (server & gateway/token)
10. FAQ — 6 pertanyaan umum + troubleshooting
11. Footer — GitHub, Sponsor

## Catatan

- Bekerja HANYA di folder `website/`; jangan mencampur source proyek induk.
- Demo mengarah ke `http://127.0.0.1:7080/...` (server NxSocket), bukan ke port 8088.
- Unduhan mengarah ke aset GitHub Release `v0.2.0` binary `nxsocket` (dibuat via `@yao-pkg/pkg`).
- Tema mengikuti pola website NxDOM CLI: gelap, switch bahasa ID/EN di navbar,
  tombol Sponsor (https://github.com/sponsors/iyanrsaleh).
- Materi bersumber dari `README.md`, `PROTOCOL.md`, `CHANGELOG.md`, `public/README.md`.

## Riwayat keputusan

- Halaman awal belum punya section **Demo browser** meski `style.css` sudah menyiapkan
  kelas `.demos` / `.dm` / `.dm-path` / `.dm-name` → dilengkapi: section `#demo`
  (14 tautan) di `index.html`, grid `.dm-grid` di `style.css`, dan kamus `dm.*`
  (ID/EN) + tautan navbar `nav.demo` di `index.js`. ✅ SUDAH DIEKSEKUSI
- Menambah section **Unduh NxSocket** (`#unduh`) dengan 2 kartu binary dari GitHub
  Releases `v0.2.0` (`nxsocket-win-x64.exe`, `nxsocket-linux-x64`) + tautan navbar
  `nav.dl` dan CTA hero `hero.cta3`; gaya `.dl-grid` / `.dl` / `.dl-os` / `.dl-file` /
  `.dl-meta` ditambah di `style.css`. ✅ SUDAH DIEKSEKUSI
- Repo GitHub `nxcodeobject/nxsocket` disiapkan untuk memuat folder `website/` ini
  sebagai root situs (statis, tanpa build step) sekaligus menampung aset rilis binary.
- **GitHub Pages diaktifkan** (branch `main`, path `/`) → live di
  https://nxcodeobject.github.io/nxsocket/ ; ditambahkan `link rel=canonical` +
  `og:url` di `index.html` dan URL live dicatat di README ini. ✅ SUDAH DIEKSEKUSI
- **Menghapus informasi khusus developer** dari halaman (pengunjung bukan pengguna
  dev): membuang `install-box` (`npm install && npm run build && npm link`) di hero
  beserta tombol copy-nya, mengganti langkah "Pasang CLI" menjadi "Unduh binary", dan
  menghapus `npm run example:demo` / `npm run tunnel` dari teks. ✅ SUDAH DIEKSEKUSI
