# Notifications

This application raises notifications using the HTML5 Notification API.

## Configuration

```yaml
---
kind: application
metadata:
  name: Notifications
  namespace: Examples
  description: Example Notifications Application
spec:
  url: https://desktop-examples.github.io/notifications
  window:
    autoHideMenuBar: true
    backgroundColor: "#1d1d26"
    height: 110
    title: Notifications
    titleBarStyle: hidden
    width: 380
```

## Quick Start

Install dependencies and start the application.

```bash
npm install
npm start
```

## Building from source

To install all dependencies and build run:

```bash
git clone https://github.com/desktop-examples/notifications.git
cd core
npm install
npm run build
```
