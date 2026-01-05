# BE-TPP Admin Dashboard

Smart Air Quality Control Dashboard - Multi-Device Management for BE-TPP SmartFlow Fans

## 🚀 Features

- **Multi-Device Support** - Manage 100+ devices from single dashboard
- **Real-time Monitoring** - Live sensor data via MQTT WebSocket
- **PWA Support** - Install as native app on mobile/desktop
- **Offline Mode** - Basic functionality when disconnected
- **Cyberpunk Theme** - Dark/Light mode with neon aesthetics

## 📱 PWA Installation

### Android (Chrome)
1. Open dashboard URL in Chrome
2. Tap "Install" button in header (or browser menu → "Add to Home Screen")
3. Confirm installation

### iOS (Safari)
1. Open dashboard URL in Safari
2. Tap Share button → "Add to Home Screen"
3. Confirm installation

### Desktop (Chrome/Edge)
1. Open dashboard URL
2. Click "Install" button in header
3. Confirm installation

## 🔧 Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Single HTML + CSS + JavaScript |
| Charts | ECharts 5.4.3 |
| MQTT | MQTT.js (WebSocket) |
| Storage | localStorage |
| PWA | Service Worker + Web App Manifest |

## 📁 Files

```
├── index.html          # Login page (PWA start)
├── dashboard.html      # Main application
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── favicon.ico        # Browser favicon
├── icon-192.png       # PWA icon 192x192
├── icon-192-maskable.png
├── icon-512.png       # PWA icon 512x512
├── icon-512-maskable.png
└── apple-touch-icon.png  # iOS icon
```

## 🌐 GitHub Pages

This dashboard is hosted on GitHub Pages:
- Login: `https://YOUR_USERNAME.github.io/be-tpp-dashboard/` or `index.html`
- Dashboard: `https://YOUR_USERNAME.github.io/be-tpp-dashboard/dashboard.html`

## 📄 License

Private - BE-TPP Project

---

Made with ❤️ for BE-TPP Smart Air Quality System
