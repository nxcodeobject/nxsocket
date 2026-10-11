# NxSocket — Website

Landing page promosi **NxSocket** (CLI + platform WebSocket untuk fitur realtime).

## Repo & URL

- **Repo GitHub**: https://github.com/nxcodeobject/nxsocket
- **Folder kerja**: `D:\Framework\CLI\NxSocket\website\`
- **Pratinjau lokal**: http://localhost:8088/
- **Proyek induk (source)**: `D:\Framework\CLI\NxSocket\` (TypeScript, CLI `nxsocket`)

## Struktur

```
index.html   landing page (hero, fitur, modul, arsitektur, demo, cara mulai, FAQ)
style.css    tema gelap + aksen hijau NxSocket, responsif (termasuk grid demo .dm-grid)
index.js     i18n ID/EN (localStorage + deteksi bahasa browser), tombol copy
logo.svg     logo (salinan dari public/icons/nxsocket.svg)
```

## Isi halaman

1. Hero — tagline + mockup terminal (`gateway info`, `server`) + copy perintah
2. Kenapa NxSocket — 6 kartu (modul, gateway token, reconnect/resume, adapter, suara-video, uji dari HP)
3. Modul — chip 21 modul (chat, presence, WebRTC, meeting, SFU, AI, OTP, FCM, …)
4. Arsitektur — alur Client → Gateway → Server + diagram
5. Demo browser — 14 tautan ke `http://127.0.0.1:7080` (`/v1/demo` … `/v1/demo12`, `/v1/otp`, `/v1/qr`)
6. Cara mulai — 4 langkah (install/build/link → gateway info → server → buka demo)
7. Client API + tabel event protokol
8. Perintah CLI (server & gateway/token)
9. FAQ — 6 pertanyaan umum + troubleshooting
10. Footer — GitHub, Sponsor

## Catatan

- Bekerja HANYA di folder `website/`; jangan mencampur source proyek induk.
- Demo mengarah ke `http://127.0.0.1:7080/...` (server NxSocket), bukan ke port 8088.
- Tema mengikuti pola website NxDOM CLI: gelap, switch bahasa ID/EN di navbar,
  tombol Sponsor (https://github.com/sponsors/iyanrsaleh).
- Materi bersumber dari `README.md`, `PROTOCOL.md`, `CHANGELOG.md`, `public/README.md`.

## Riwayat keputusan

- Halaman awal belum punya section **Demo browser** meski `style.css` sudah menyiapkan
  kelas `.demos` / `.dm` / `.dm-path` / `.dm-name` → dilengkapi: section `#demo`
  (14 tautan) di `index.html`, grid `.dm-grid` di `style.css`, dan kamus `dm.*`
  (ID/EN) + tautan navbar `nav.demo` di `index.js`. ✅ SUDAH DIEKSEKUSI
- Repo GitHub `nxcodeobject/nxsocket` disiapkan untuk memuat folder `website/` ini
  sebagai root situs (statis, tanpa build step).
