# Overlay Pro TT - Website

Modern, responsive website for the Overlay Pro TT userscript.

## 🌐 Live Site

**Production**: https://install.creepso.com

## 🚀 Quick Start (Development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Production Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for complete deployment instructions to VPS with Docker + Traefik.

### Quick Deploy Summary:

1. **Transfer files via SFTP** to `/opt/overlay-pro-website`
2. **SSH into VPS** and run:
   ```bash
   cd /opt/overlay-pro-website
   docker compose up -d --build
   ```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker + Traefik

## 📁 Project Structure

```
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── Dockerfile            # Docker image configuration
├── docker-compose.yml    # Docker compose for deployment
├── deploy.sh            # Deployment script
└── DEPLOYMENT.md        # Detailed deployment guide
```

## 🔗 Links

- **GitHub**: [CreepsoOff/Wplace-Overlay-Pro](https://github.com/CreepsoOff/Wplace-Overlay-Pro)
- **Script**: [Install Overlay Pro TT](http://cdn.jsdelivr.net/gh/creepsooff/Wplace-Overlay-Pro@development/dist/overlay-pro-tt.user.js)
- **wplace.live**: [https://wplace.live](https://wplace.live)

## 📄 License

GPL-3.0 License - See the [main repository](https://github.com/CreepsoOff/Wplace-Overlay-Pro) for details.

---

Made with 💜 for the wplace.live community
