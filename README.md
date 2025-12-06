# NatureMark Systems Website

A modern, professional website built with React and Tailwind CSS for NatureMark Systems - a sustainability technology company.

## 🌿 Features

- **Modern React Architecture** - Built with React 18 and functional components
- **Tailwind CSS** - Utility-first styling for rapid development
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - CSS animations and transitions for a polished feel
- **Professional UI** - Clean, organic-luxury aesthetic fitting for sustainability tech

## 📁 Project Structure

```
naturemark-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Main React application
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors

The primary color palette uses emerald/teal greens. Modify in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      emerald: {
        // Your custom colors
      }
    }
  }
}
```

### Fonts

Using Plus Jakarta Sans. Change in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

### Content

All text content is in `src/App.jsx`. Key data sections:

- `teamMembers` - Team information
- `clientsData` - Client testimonials  
- `faqData` - FAQ questions and answers
- `sustain360Problems/Results` - Sustain360 product content
- `arbortagProblems/Results` - ArborTag product content

## 📱 Pages

1. **Home** - Hero, About, Products, Testimonials, Accreditations
2. **About** - Company story, Team section
3. **Products** - Product listing page
4. **Sustain360** - Carbon intelligence platform details
5. **ArborTag** - Tree monitoring solution details
6. **Contact** - Contact form with FAQ

## 🖼️ Images

Add your images to the `public/images/` directory:

```
public/images/
├── hero-bg.png
├── about-illustration.svg
├── team-*.png
├── client-*.png
├── sustain360-*.png
├── arbortag-*.png
└── logo-*.svg
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS 3** - Styling
- **PostCSS** - CSS processing

## 📄 License

© 2025 NatureMark Systems. All rights reserved.
