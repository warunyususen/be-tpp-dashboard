# BE-TPP Admin Dashboard

Smart Air Quality Control Dashboard - Multi-Device Management for BE-TPP SmartFlow Fans

**Version:** 1.1.0 | **Last Updated:** 2025-01-14

## 🆕 What's New (v1.1.0)

### Phase 15.5 - Per-Client Architecture
- **Multi-Client per Device** - Support multiple ESP32 clients per QP Serial
- **Unified Device Selector** - Single dropdown for all pages with online/offline status
- **Improved Status Tracking** - Accurate Online/Offline detection based on MQTT state
- **MQTT State Sync** - Auto-update all pages on connect/disconnect
- **Last Seen** - Accurate timestamp across all pages
- **Stats Display** - Shows "X Devices (Y Clients)" format

## 🚀 Features

- **Multi-Device Support** - Manage 100+ devices from single dashboard
- **Per-Client Architecture** - Track individual ESP32 boards independently
- **Real-time Monitoring** - Live sensor data via MQTT WebSocket
- **PWA Support** - Install as native app on mobile/desktop
- **Offline Mode** - Basic functionality when disconnected
- **Cyberpunk Theme** - Dark/Light mode with neon aesthetics
- **Warning System** - Audio alerts for danger conditions

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
├── index.html              # Login page (PWA start)
├── dashboard.html          # Main application
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (v1.1.0)
├── favicon.ico             # Browser favicon
├── icon-192.png            # PWA icon 192x192
├── icon-192-maskable.png
├── icon-512.png            # PWA icon 512x512
├── icon-512-maskable.png
├── apple-touch-icon.png    # iOS icon
└── BE_logo.svg             # Logo
```

## 🌐 GitHub Pages

This dashboard is hosted on GitHub Pages:
- Login: `https://YOUR_USERNAME.github.io/be-tpp-dashboard/` or `index.html`
- Dashboard: `https://YOUR_USERNAME.github.io/be-tpp-dashboard/dashboard.html`

## 📊 Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.1.0 | 2025-01-14 | Per-Client Architecture, Unified Device Selector, MQTT State Sync, Last Seen Fix |
| v1.0.0 | 2025-01-01 | Initial Release with Multi-Device Support |

## 🔄 Updating

When updating the PWA:
1. Upload new `dashboard.html` and `sw.js` to GitHub
2. Service Worker will detect version change
3. Users may need to refresh once or restart app

## 📄 License

Private - BE-TPP Project

---

Made with ❤️ for BE-TPP Smart Air Quality System
