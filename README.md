# spiral-vtt

A (very) minimalist Virtual Tabletop for tabletop RPGs, built to learn React, Docker, and PocketBase.

This is a constant work in progress where I add features (or break things) as I learn new stuff.

## Installation

```bash
# Clone the repo
git clone https://github.com/your-username/spiral-vtt
cd spiral-vtt

# Create PocketBase folder if needed
mkdir -p apps/api/pb_data

# Fire everything up with Docker
npm run dev
```

Then:
- Web interface: http://localhost:5173
- PocketBase admin: http://localhost:8090/_/

## Tech stack

**Frontend**
- React with Vite
- Vanilla CSS with PicoCSS

**Backend**  
- PocketBase

**Other**
- Docker
- Node.js Alpine for dev
- Volumes for data persistence

## Available scripts

```bash
npm run dev        # Start development environment
npm run prod       # Start in production mode
npm run stop       # Stop all containers
```

## Structure

```
spiral-vtt/
├── apps/
│   ├── api/          # PocketBase data (pb_data content is not committed)
│   └── web/          # React application
├── packages, tools, etc. -> are empty directories for now         
└── docker-compose.yml
```