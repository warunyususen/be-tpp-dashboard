# BE-TPP Admin Dashboard

Smart Air Quality Control Dashboard — Multi-Device Management for BE-TPP SmartFlow Fans

**Version:** 2.8.0 | **Last Updated:** 2026-04-15

## 🆕 What's New (v2.8.0)

### Team Device Registry Sync
- **Supabase Sync** — Device registry syncs across team members via Supabase
- **Team Member Identity** — Each member identified for edit tracking
- **Sync Indicator** — Real-time sync status in Devices tab
- **Offline Fallback** — localStorage cache when Supabase unavailable

### Splash Screen
- **3-Phase Loading** — Splash → Loading → Login
- **Brand Animation** — BE logo with teal glow effect

### Security
- **Session Guard** — Dashboard requires login via index.html
- **Dynamic Access Code** — Date-based access code rotation

## 🚀 Features

- **Multi-Device Support** — Manage 100+ devices from single dashboard
- **Per-Client Architecture** — Track individual ESP32 boards independently
- **Team Sync** — Device registry shared across team via Supabase
- **Real-time Monitoring** — Live sensor data via MQTT WebSocket
- **Historical Data** — Sensor and device status history via Supabase
- **PWA Support** — Install as native app on mobile/desktop
- **Offline Mode** — Basic functionality when disconnected

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

## 📁 Files

```
├── index.html              # Login page (PWA start)
├── dashboard.html          # Main application
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker
├── favicon.ico             # Browser favicon
├── icon-192.png            # PWA icon 192x192
├── icon-192-maskable.png
├── icon-512.png            # PWA icon 512x512
├── icon-512-maskable.png
├── apple-touch-icon.png    # iOS icon
└── BE_logo.svg             # Logo
```

## 📊 Version History

| Version | Date | Changes |
|---------|------|---------|
| v2.8.0 | 2026-04-15 | Team Device Sync, Splash Screen, Session Guard, Dynamic Access Code |
| v1.1.0 | 2025-01-14 | Per-Client Architecture, Unified Device Selector, MQTT State Sync |
| v1.0.0 | 2025-01-01 | Initial Release with Multi-Device Support |

## 🔄 Updating

When updating the PWA:
1. Upload new files to GitHub
2. Service Worker will detect version change
3. Users may need to refresh once or restart app

## 📄 License

Private — BE-TPP Project

---

Made with ❤️ for BE-TPP Smart Air Quality System
