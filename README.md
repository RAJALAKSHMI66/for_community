# SafeGuard - Pandemic Response Toolkit

<div align="center">
  <img src="public/favicon.png" alt="SafeGuard Logo" width="120" height="120">
  
  **A comprehensive web application for pandemic preparedness and community resilience**
  
  [![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**SafeGuard** is an open-source pandemic response toolkit designed to help communities navigate health crises effectively. Built with accessibility and ease-of-use in mind, it provides essential resources for healthcare access, mental health support, real-time information, and community assistance—all in one unified platform.

The application is localized for **India**, featuring healthcare facilities across Delhi NCR, emergency contacts (112), and support for multiple languages including English, Hindi, and Tamil.

---

## 🎯 Problem Statement

During pandemics and health emergencies, communities face critical challenges:

1. **Fragmented Information**: Health resources, testing centers, and vaccination sites are scattered across multiple platforms
2. **Mental Health Crisis**: Isolation and uncertainty lead to increased anxiety and depression, with limited access to support
3. **Misinformation**: False information spreads rapidly, causing panic and poor health decisions
4. **Community Disconnect**: Vulnerable populations struggle to get help while willing volunteers can't find those in need
5. **Language Barriers**: Critical health information isn't accessible in local languages

---

## 💡 Solution

SafeGuard addresses these challenges through a unified, accessible platform:

### 🏥 Healthcare Access
- **Facility Finder**: Locate nearby hospitals, clinics, and testing centers with real-time wait times
- **Geolocation Search**: "Near Me" functionality to find the closest healthcare facilities
- **Service Filtering**: Search by specific services (COVID testing, vaccination, telemedicine, emergency care)
- **Direct Contact**: One-tap calling to healthcare facilities and emergency services (112)

### 🧠 Mental Health Support
- **Therapist Booking**: Connect with licensed mental health professionals for virtual sessions
- **Self-Help Guides**: Evidence-based techniques for managing stress and anxiety
- **Mood Tracker**: Monitor emotional patterns over time to identify triggers
- **Support Groups**: Join community support sessions for shared experiences

### 📰 Information Hub
- **Verified Updates**: Curated, fact-checked pandemic information from official sources
- **Myth Busting**: Clear debunking of common misconceptions
- **Prevention Guidelines**: Practical tips for staying safe
- **Local Statistics**: Region-specific data and trends

### 🤝 Community Support
- **Offer Help**: Volunteers can list services they're willing to provide
- **Request Help**: Those in need can request assistance from the community
- **Social Feed**: Share experiences, tips, and encouragement
- **Neighbor Network**: Connect with people in your area for mutual support

### 🌐 Accessibility
- **Multi-language Support**: English, Hindi, and Tamil
- **Dark/Light Themes**: Comfortable viewing in any environment
- **Guest Access**: Use core features without creating an account
- **Mobile Responsive**: Full functionality on all device sizes

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Guest Login** | Access the platform without registration |
| **Healthcare Search** | Find hospitals, clinics, and testing centers |
| **Near Me** | Location-based facility discovery |
| **Telemedicine** | Virtual doctor consultations |
| **Vaccine Booking** | Schedule vaccination appointments |
| **Symptom Checker** | Assess symptoms and get guidance |
| **Mood Tracking** | Monitor mental health patterns |
| **Therapist Sessions** | Book mental health professionals |
| **Support Groups** | Join community support sessions |
| **Community Posts** | Share and interact with community |
| **Offer/Request Help** | Neighbor-to-neighbor assistance |
| **Emergency Calling** | One-tap access to 112 |
| **Multi-language** | English, Hindi, Tamil support |
| **Dark Mode** | Eye-friendly dark theme (default) |

---

## 🛠 Tech Stack

### Frontend
- **React 18** - UI component library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **Lucide Icons** - Beautiful icon set
- **CSS Variables** - Theming with design tokens

### State Management
- **React Context** - Theme and language management
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling

### Testing
- **Vitest** - Unit testing framework
- **Testing Library** - Component testing

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/safeguard.git
cd safeguard

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
bun run build
```

---

## 📁 Project Structure

```
safeguard/
├── public/                 # Static assets
│   ├── favicon.png        # App favicon
│   └── robots.txt         # SEO configuration
├── src/
│   ├── components/        # Reusable components
│   │   ├── home/         # Homepage sections
│   │   ├── layout/       # Header, Footer
│   │   └── ui/           # shadcn/ui components
│   ├── contexts/         # React contexts
│   │   └── ThemeContext  # Theme & language
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Route pages
│   │   ├── Index.tsx     # Homepage
│   │   ├── Healthcare.tsx # Healthcare finder
│   │   ├── MentalHealth.tsx # Mental health resources
│   │   ├── InfoHub.tsx   # Information center
│   │   ├── Community.tsx # Community support
│   │   └── Login.tsx     # Authentication
│   ├── test/             # Test configuration
│   ├── App.tsx           # App root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles & tokens
├── docs/                  # Documentation
│   └── PROJECT_DESCRIPTION.md
├── index.html            # HTML template
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

---

## 🎨 Design System

SafeGuard uses a carefully crafted design system with semantic color tokens:

| Token | Purpose |
|-------|---------|
| `--primary` | Primary brand color (teal) |
| `--secondary` | Secondary actions |
| `--accent` | Highlights and accents |
| `--success` | Positive feedback |
| `--warning` | Caution states |
| `--destructive` | Error and danger |
| `--muted` | Subdued elements |

Both light and dark themes are fully supported with automatic system preference detection.

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Ideas
- Add more Indian cities and healthcare facilities
- Implement real-time data from health APIs
- Add more language translations
- Improve accessibility features
- Create mobile app versions

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Healthcare data based on public information from Indian hospitals
- Icons provided by [Lucide](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

---

<div align="center">
  <strong>Built with ❤️ for community resilience</strong>
  <br><br>
  <a href="#safeguard---pandemic-response-toolkit">Back to top ↑</a>
</div>
