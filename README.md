# Campaign Builder

A simplified CSAT Campaign Builder that allows users to configure a feedback popup and preview it in real time on a mobile device. Users can customize content and styling through a tabbed editor panel while seeing instant updates in a live mobile preview.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** CSS (custom properties, responsive media queries)
- **PDF Generation:** jsPDF + html2canvas
- **Lottie Animations:** @lottiefiles/dotlottie-react
- **Deployment:** Vercel / Netlify

## Folder Structure

```
Campaign_Builder/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContentTab.jsx      # Content configuration panel
│   │   ├── Home.jsx            # Landing page
│   │   ├── Logo.jsx            # SVG logo component
│   │   ├── MobilePreview.jsx   # Live mobile preview with fullscreen mode
│   │   ├── Rating.jsx          # Emoji rating widget (1–5)
│   │   └── StylingTab.jsx      # Styling configuration panel
│   ├── data/
│   │   └── defaultConfig.js    # Default state for all screens + styling
│   ├── styles/
│   │   ├── ContentTab.css
│   │   ├── Home.css
│   │   ├── MobilePreview.css
│   │   └── StylingTab.css
│   ├── App.css                 # Global layout and form styles
│   ├── App.jsx                 # Root component with routing
│   ├── index.css               # CSS reset
│   └── main.jsx                # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/jprem97/Campaign_Builder_97.git
cd Campaign_Builder_97

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Features

- **Content Tab** — Configure title, subtitle, rating options, media upload, and button text for all three screens (Initial Feedback, Feedback Form, Thank You)
- **Styling Tab** — Customize colors, font size/weight, border radius, button dimensions, and rating colors
- **Live Mobile Preview** — Real-time preview on the right side of the screen, updates instantly on every change
- **Fullscreen Mode** — View the mobile preview in fullscreen with keyboard navigation
- **PDF Download** — Export all three screens as a multi-page PDF from fullscreen mode
- **Responsive Design** — Adapts to desktop, tablet, and mobile screen sizes

## Deployment Link

[Live Demo](https://campaign-builder-97.vercel.app/)
