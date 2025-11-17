# Saving Games - Interactive Video Game History

A comprehensive, interactive educational website exploring video game history through timelines, lessons, galleries, and infographics.

## Project Overview

**Saving Games** is a humanities project dedicated to preserving and educating people about video game history. This interactive website features:

- **Interactive Timeline**: Browse gaming history by era and console with filtering capabilities
- **Educational Lessons**: In-depth lessons covering history, technology, business, and culture of gaming
- **Hardware Galleries**: Visual archives of classic gaming hardware and arcade cabinets
- **Data Visualizations**: Infographics showing statistics, trends, and comparisons across gaming history
- **Era-based Organization**: Content organized by major gaming eras from the Golden Age to Modern Era
- **Console Deep Dives**: Detailed information about iconic gaming consoles

## Features

### Timeline Explorer
- Filter consoles by era (Golden Age, Console Wars, 3D Revolution, etc.)
- Filter by manufacturer (Nintendo, Sony, Sega, Microsoft, Atari)
- Interactive console cards with detailed specifications
- Visual era markers with key events

### Educational Content
- 5+ comprehensive lessons covering major topics in gaming history
- Interactive quizzes to test knowledge
- Categorized by topic: History, Technology, Business, Culture
- Difficulty levels: Beginner, Intermediate, Advanced

### Image Galleries
- Hardware collections organized by era
- Classic arcade cabinet archives
- Handheld gaming evolution
- Lightbox viewer for detailed examination

### Statistics & Infographics
- Total units sold across all platforms
- Console generation breakdowns
- Manufacturer comparisons
- Best-selling console highlights

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Custom CSS with CSS variables
- **Data**: JSON-based content management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SavingGamesWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
SavingGamesWebsite/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.jsx
│   │   ├── Timeline.jsx
│   │   ├── TimelineEvent.jsx
│   │   ├── LessonCard.jsx
│   │   ├── ImageGallery.jsx
│   │   └── StatsInfographic.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── EraDetails.jsx
│   │   ├── ConsoleDetails.jsx
│   │   ├── Lessons.jsx
│   │   ├── LessonDetails.jsx
│   │   └── Gallery.jsx
│   ├── data/               # JSON data files
│   │   ├── eras.json       # Gaming eras data
│   │   ├── consoles.json   # Console specifications
│   │   ├── lessons.json    # Educational content
│   │   └── gallery.json    # Gallery collections
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Data Structure

### Eras
Each era includes:
- Name and time period
- Description of the era
- Key events
- Color theme for visual distinction

### Consoles
Each console features:
- Manufacturer and release year
- Generation classification
- Technical specifications (CPU, RAM, Graphics)
- Notable games
- Units sold
- Historical context

### Lessons
Educational lessons include:
- Category and difficulty level
- Estimated completion time
- Structured content with sections
- Key takeaways
- Interactive quiz questions

### Galleries
Gallery collections contain:
- Categorized image sets
- Era associations
- Detailed descriptions
- Historical context

## Content Areas

### Gaming Eras Covered

1. **The Golden Age of Arcade** (1978-1983)
2. **The Crash and Recovery** (1983-1985)
3. **The Console Wars** (1988-1995)
4. **The 3D Revolution** (1995-2001)
5. **Online Gaming Era** (2001-2006)
6. **The Modern Era** (2006-Present)

### Featured Consoles

- Atari 2600
- Nintendo Entertainment System (NES)
- Sega Genesis
- Super Nintendo (SNES)
- PlayStation
- Nintendo 64
- PlayStation 2
- Xbox
- Nintendo Wii
- PlayStation 4
- Nintendo Switch

## Future Enhancements

Potential additions to expand the project:

- User accounts and progress tracking
- Community contributions
- Video content integration
- Interactive game preservation database
- Developer interviews and oral histories
- Downloadable educational resources
- Mobile app version
- Multi-language support

## Contributing

This is an educational project. Contributions that improve historical accuracy, add educational value, or enhance user experience are welcome.

## License

This project is created for educational purposes as part of a humanities preservation initiative.

## Acknowledgments

This project aims to preserve and celebrate video game history as an important part of our cultural heritage.
