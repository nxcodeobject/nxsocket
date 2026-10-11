// NxSocket landing — i18n ID/EN + interaksi ringan

const I18N = {
  id: {
    "meta.title": "NxSocket — Platform WebSocket untuk fitur realtime",
    "meta.desc": "NxSocket — CLI dan platform WebSocket untuk membangun fitur realtime: chat, panggilan suara/video, AI streaming, tracking, notifikasi.",
    "nav.fitur": "Fitur",
    "nav.modul": "Modul",
    "nav.arsitektur": "Arsitektur",
    "nav.demo": "Demo",
    "nav.dl": "Unduh",
    "nav.mulai": "Cara Mulai",
    "nav.faq": "FAQ",
    "nav.mulaiBtn": "Coba Sekarang",
    "hero.badge": "nxsocket v0.2.0 · Node.js ≥ 22 · MIT",
    "hero.title": "Fitur <span class=\"accent\">realtime</span> dari satu gateway",
    "hero.desc": "<strong>NxSocket</strong> — CLI dan platform WebSocket untuk membangun chat, panggilan suara/video, AI streaming, tracking, dan notifikasi. Satu server, satu token, semua modul siap pakai.",
    "hero.cta1": "Mulai dalam 15 menit",
    "hero.cta2": "Lihat modul",
    "hero.cta3": "Unduh binary",
    "install.copy": "Copy",
    "install.copied": "Tersalin ✓",
    "hero.note": "Lalu: nxsocket server — gateway dan semua modul siap dipakai.",
    "fit.title": "Kenapa NxSocket?",
    "fit.1t": "20+ modul siap pakai",
    "fit.1d": "Chat, presence, notifikasi, tracking, AI, terminal, WebRTC, meeting, feed, grup, OTP, media — tanpa membangun dari nol.",
    "fit.2t": "Gateway token",
    "fit.2d": "Akses lewat Endpoint Gateway dengan token per-user: expiry, scope, dan ACL room. Bisa di-regenerate atau dicabut.",
    "fit.3t": "Koneksi yang tahan putus",
    "fit.3d": "Heartbeat, reconnect, dan session resume — client kembali ke room yang sama tanpa memulai ulang percakapan.",
    "fit.4t": "Adapter data fleksibel",
    "fit.4d": "SQLite (default, lokal), Firebase (cloud), atau JSON ringan. Ganti lewat satu flag CLI atau environment variable.",
    "fit.5t": "Suara & video",
    "fit.5d": "Panggilan 1:1, grup mesh, sampai meeting skala besar via SFU LiveKit. Signaling WebRTC sudah termasuk.",
    "fit.6t": "Uji langsung dari HP",
    "fit.6d": "Server HTTPS self-signed + QR di terminal. Scan dari HP, mic dan kamera langsung jalan.",
    "mod.title": "Modul",
    "mod.sub": "Semua modul ini sudah tersedia dan siap dipakai di aplikasi Anda.",
    "mod.chat": "Chat <em>read receipt</em>",
    "mod.presence": "Presence",
    "mod.notif": "Notification",
    "mod.webrtc": "WebRTC 1:1",
    "mod.meeting": "Meeting mesh",
    "mod.sfu": "SFU LiveKit",
    "mod.ai": "AI streaming",
    "mod.terminal": "Terminal",
    "mod.tracking": "Tracking",
    "mod.monitoring": "Monitoring",
    "mod.progress": "Progress",
    "mod.job": "Job",
    "mod.sync": "Sync",
    "mod.feed": "Feed",
    "mod.groups": "Groups & DM",
    "mod.media": "Media",
    "mod.blocks": "Blocks",
    "mod.profile": "Profile",
    "mod.otp": "OTP",
    "mod.push": "Web Push",
    "mod.fcm": "FCM",
    "dm.title": "Demo browser",
    "dm.sub": "Buka di browser setelah nxsocket server berjalan — semua halaman demo siap pakai.",
    "dm.1": "Chat & presence",
    "dm.2": "Telepon suara",
    "dm.3": "Video call",
    "dm.4": "AI streaming",
    "dm.5": "Remote AI control",
    "dm.6": "Tracking posisi",
    "dm.7": "Progress / job / sync",
    "dm.8": "Group video call",
    "dm.9": "Meeting (mesh)",
    "dm.10": "SFU meeting (LiveKit)",
    "dm.11": "Social feed",
    "dm.12": "Groups & DM",
    "dm.13": "OTP request / verify",
    "dm.14": "QR token",
    "dl.title": "Unduh NxSocket",
    "dl.sub": "Pakai binary standalone — tanpa perlu memasang Node.js.",
    "dl.win": "Windows",
    "dl.winMeta": "Windows 10/11 x64 · ±130 MB",
    "dl.linux": "Linux",
    "dl.linuxMeta": "Linux x64 (ELF) · ±146 MB",
    "dl.usage": "Jalankan langsung — tanpa perlu memasang Node.js. Konfigurasi opsional lewat file <code>.env</code> di folder tempat binary dijalankan.",
    "dl.note": "Semua rilis ada di GitHub Releases →",
    "arch.badge": "Arsitektur",
    "arch.title": "Client tidak menyentuh server secara langsung",
    "arch.lede": "Semua akses masuk melalui <strong>Endpoint Gateway</strong> — validasi token, lalu diteruskan ke NxSocket Server yang mengelola koneksi, session, room, dan event.",
    "arch.1": "Token per-user dengan scope dan expiry",
    "arch.2": "ACL room — client hanya boleh masuk room yang diizinkan",
    "arch.3": "Adapter SQLite / Firebase / JSON untuk penyimpanan",
    "arch.4": "Rate limit per koneksi (default 60 pesan / 10 detik)",
    "st.title": "Cara mulai",
    "st.1t": "Pasang CLI",
    "st.1a": "Setelah mengubah kode, jalankan <code>npm run build</code> lagi.",
    "st.2t": "Lihat endpoint & token",
    "st.2a": "Menampilkan URL lokal, URL jaringan, dan token gateway.",
    "st.3t": "Jalankan server",
    "st.3a": "Default: port 7080, path /v1, adapter SQLite.",
    "st.4t": "Buka demo",
    "st.4a": "Atau uji semua modul dari CLI: <code>npm run example:demo</code>.",
    "cl.title": "Client API",
    "cl.protoTitle": "Event protokol",
    "cl.protoNote": "Detail lengkap ada di PROTOCOL.md.",
    "cli.title": "Perintah CLI",
    "cli.srv": "Server",
    "cli.gw": "Gateway & token",
    "faq.title": "Pertanyaan umum",
    "faq.1q": "Butuh Node.js versi berapa?",
    "faq.1a": "Node.js 22 atau lebih baru.",
    "faq.2q": "Port 7080 sudah dipakai (EADDRINUSE)?",
    "faq.2a": "Matikan proses lama atau ganti port: <code>nxsocket server --port 3090</code>.",
    "faq.3q": "Connect gagal dengan 401?",
    "faq.3a": "Token salah, sudah di-regenerate, atau di-revoke. Buat/ambil token baru lewat nxsocket gateway token list.",
    "faq.4q": "Token berbeda tiap folder?",
    "faq.4a": "Folder <code>data/</code> mengikuti direktori kerja (cwd). Samakan dengan flag <code>--data-dir</code> atau jalankan dari folder proyek yang sama.",
    "faq.5q": "Panggilan tersambung tapi tidak ada suara?",
    "faq.5a": "Pakai nxsocket server --https (bukan HTTP), izinkan mic di kedua perangkat, lalu ketuk tombol \"Aktifkan suara\" di halaman.",
    "faq.6q": "Bisa diakses dari luar rumah?",
    "faq.6a": "Ya — lewat Cloudflare Tunnel (npm run tunnel), Tailscale, atau reverse proxy seperti Caddy/Nginx di depannya.",
    "foot.slogan": "Nusantara eXtreme Development Object Model",
    "foot.link1": "GitHub",
    "foot.link2": "Sponsor",
    "foot.copy": "Lisensi MIT · © 2026 NxSocket",
  },
  en: {
    "meta.title": "NxSocket — WebSocket platform for realtime features",
    "meta.desc": "NxSocket — CLI and WebSocket platform for building realtime features: chat, voice/video calls, AI streaming, tracking, notifications.",
    "nav.fitur": "Features",
    "nav.modul": "Modules",
    "nav.arsitektur": "Architecture",
    "nav.demo": "Demos",
    "nav.dl": "Download",
    "nav.mulai": "Get Started",
    "nav.faq": "FAQ",
    "nav.mulaiBtn": "Try it now",
    "hero.badge": "nxsocket v0.2.0 · Node.js ≥ 22 · MIT",
    "hero.title": "<span class=\"accent\">Realtime</span> features from one gateway",
    "hero.desc": "<strong>NxSocket</strong> — a CLI and WebSocket platform for building chat, voice/video calls, AI streaming, tracking, and notifications. One server, one token, every module ready to use.",
    "hero.cta1": "Start in 15 minutes",
    "hero.cta2": "See modules",
    "hero.cta3": "Download binary",
    "install.copy": "Copy",
    "install.copied": "Copied ✓",
    "hero.note": "Then: nxsocket server — the gateway and every module ready to use.",
    "fit.title": "Why NxSocket?",
    "fit.1t": "20+ ready modules",
    "fit.1d": "Chat, presence, notifications, tracking, AI, terminal, WebRTC, meetings, feed, groups, OTP, media — no need to build from scratch.",
    "fit.2t": "Gateway tokens",
    "fit.2d": "Access goes through the Endpoint Gateway with per-user tokens: expiry, scopes, and room ACL. Regenerate or revoke anytime.",
    "fit.3t": "Connection that survives drops",
    "fit.3d": "Heartbeat, reconnect, and session resume — clients return to the same rooms without restarting the conversation.",
    "fit.4t": "Flexible data adapters",
    "fit.4d": "SQLite (default, local), Firebase (cloud), or lightweight JSON. Switch with a single CLI flag or environment variable.",
    "fit.5t": "Voice & video",
    "fit.5d": "1:1 calls, mesh groups, up to large meetings via LiveKit SFU. WebRTC signaling included.",
    "fit.6t": "Test straight from your phone",
    "fit.6d": "Self-signed HTTPS server plus a QR code in the terminal. Scan it and mic plus camera just work.",
    "mod.title": "Modules",
    "mod.sub": "Every module below is available and ready to use in your app.",
    "mod.chat": "Chat <em>read receipt</em>",
    "mod.presence": "Presence",
    "mod.notif": "Notification",
    "mod.webrtc": "WebRTC 1:1",
    "mod.meeting": "Meeting mesh",
    "mod.sfu": "SFU LiveKit",
    "mod.ai": "AI streaming",
    "mod.terminal": "Terminal",
    "mod.tracking": "Tracking",
    "mod.monitoring": "Monitoring",
    "mod.progress": "Progress",
    "mod.job": "Job",
    "mod.sync": "Sync",
    "mod.feed": "Feed",
    "mod.groups": "Groups & DM",
    "mod.media": "Media",
    "mod.blocks": "Blocks",
    "mod.profile": "Profile",
    "mod.otp": "OTP",
    "mod.push": "Web Push",
    "mod.fcm": "FCM",
    "dm.title": "Demo browser",
    "dm.sub": "Open in the browser after nxsocket server is running — every demo page is ready to use.",
    "dm.1": "Chat & presence",
    "dm.2": "Voice call",
    "dm.3": "Video call",
    "dm.4": "AI streaming",
    "dm.5": "Remote AI control",
    "dm.6": "Location tracking",
    "dm.7": "Progress / job / sync",
    "dm.8": "Group video call",
    "dm.9": "Meeting (mesh)",
    "dm.10": "SFU meeting (LiveKit)",
    "dm.11": "Social feed",
    "dm.12": "Groups & DM",
    "dm.13": "OTP request / verify",
    "dm.14": "QR token",
    "dl.title": "Download NxSocket",
    "dl.sub": "Use a standalone binary — no Node.js install needed.",
    "dl.win": "Windows",
    "dl.winMeta": "Windows 10/11 x64 · ~130 MB",
    "dl.linux": "Linux",
    "dl.linuxMeta": "Linux x64 (ELF) · ~146 MB",
    "dl.usage": "Run it directly — no Node.js install needed. Optional configuration via a <code>.env</code> file in the folder where you run the binary.",
    "dl.note": "All releases on GitHub Releases →",
    "arch.badge": "Architecture",
    "arch.title": "Clients never touch the server directly",
    "arch.lede": "All access goes through the <strong>Endpoint Gateway</strong> — token validation, then forwarded to the NxSocket Server which manages connections, sessions, rooms, and events.",
    "arch.1": "Per-user tokens with scopes and expiry",
    "arch.2": "Room ACL — clients may only join allowed rooms",
    "arch.3": "SQLite / Firebase / JSON storage adapters",
    "arch.4": "Per-connection rate limit (default 60 messages / 10 seconds)",
    "st.title": "Get started",
    "st.1t": "Install the CLI",
    "st.1a": "After changing code, run <code>npm run build</code> again.",
    "st.2t": "Check endpoint & token",
    "st.2a": "Shows the local URL, network URL, and gateway token.",
    "st.3t": "Run the server",
    "st.3a": "Defaults: port 7080, path /v1, SQLite adapter.",
    "st.4t": "Open a demo",
    "st.4a": "Or test every module from the CLI: <code>npm run example:demo</code>.",
    "cl.title": "Client API",
    "cl.protoTitle": "Protocol events",
    "cl.protoNote": "Full details live in PROTOCOL.md.",
    "cli.title": "CLI commands",
    "cli.srv": "Server",
    "cli.gw": "Gateway & tokens",
    "faq.title": "FAQ",
    "faq.1q": "Which Node.js version is required?",
    "faq.1a": "Node.js 22 or newer.",
    "faq.2q": "Port 7080 already in use (EADDRINUSE)?",
    "faq.2a": "Stop the old process or change the port: <code>nxsocket server --port 3090</code>.",
    "faq.3q": "Connection fails with 401?",
    "faq.3a": "The token is wrong, regenerated, or revoked. Create or fetch a new one with nxsocket gateway token list.",
    "faq.4q": "Token differs per folder?",
    "faq.4a": "The <code>data/</code> folder follows the working directory (cwd). Align it with <code>--data-dir</code> or run from the same project folder.",
    "faq.5q": "Call connects but there's no audio?",
    "faq.5a": "Use nxsocket server --https (not HTTP), allow the mic on both devices, then tap the \"Enable audio\" button on the page.",
    "faq.6q": "Can it be reached from outside my home?",
    "faq.6a": "Yes — via Cloudflare Tunnel (npm run tunnel), Tailscale, or a reverse proxy such as Caddy/Nginx in front of it.",
    "foot.slogan": "Nusantara eXtreme Development Object Model",
    "foot.link1": "GitHub",
    "foot.link2": "Sponsor",
    "foot.copy": "MIT License · © 2026 NxSocket",
  },
};

function setLang(lang) {
  if (!I18N[lang]) lang = "id";
  document.documentElement.lang = lang;
  try { localStorage.setItem("nxsocket-lang", lang); } catch {}

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((rule) => {
      const [attr, key] = rule.split("|");
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];
}

// Salin perintah instalasi
const copyBtn = document.getElementById("copy-install");
const installCmd = document.getElementById("install-cmd");
if (copyBtn && installCmd) {
  const label = () => copyBtn.querySelector("span") || copyBtn;
  copyBtn.addEventListener("click", async () => {
    const text = installCmd.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    const lang = document.documentElement.lang === "en" ? "en" : "id";
    label().textContent = I18N[lang]["install.copied"];
    copyBtn.classList.add("done");
    setTimeout(() => {
      label().textContent = I18N[lang]["install.copy"];
      copyBtn.classList.remove("done");
    }, 1800);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });

  let saved = null;
  try { saved = localStorage.getItem("nxsocket-lang"); } catch {}
  if (saved) {
    setLang(saved);
  } else {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    setLang(browserLang === "id" ? "id" : "en");
  }
});
