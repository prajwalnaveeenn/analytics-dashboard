# Comprehensive Analytics Dashboard

## Overview
The **Comprehensive Analytics Dashboard** is a Next.js-based web application that provides users with interactive data insights. It integrates multiple APIs to deliver real-time information on weather, news, stocks, and movies in a structured and visually appealing manner.

## Features
- **Weather Forecast:** Get real-time weather updates and a 7-day forecast with interactive charts.
- **News Aggregation:** Browse categorized news articles with filtering, pagination, and detailed views.
- **Stock Market Analysis:** Track stock trends with live data, interactive charts, and historical insights.
- **Movie Information:** Discover trending movies and shows with details like ratings and descriptions.
- **Modern UI:** Built with **Next.js, React, TypeScript, Tailwind CSS, and SCSS** for an optimized user experience.

## Tech Stack
- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS, SCSS
- **State Management:** Redux Toolkit, RTK Query
- **Charts & Animations:** Chart.js, Recharts, Three.js, Lottie
- **APIs Used:** OpenWeatherMap, NewsAPI, Alpha Vantage, and a movie API

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/analytics-dashboard.git
   cd analytics-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file and add your API keys:
   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=your_key_here
   NEXT_PUBLIC_NEWS_API_KEY=your_key_here
   NEXT_PUBLIC_STOCKS_API_KEY=your_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

## Folder Structure
```
📦 analytics-dashboard
├── 📂 components       # Reusable UI components
├── 📂 pages            # Application routes
├── 📂 styles           # Global styles and SCSS modules
├── 📂 hooks            # Custom React hooks
├── 📂 store            # Redux state management
├── 📂 utils            # Helper functions
├── 📂 public           # Static assets
└── README.md          # Project documentation
```

## Future Enhancements
- Implement user authentication for a personalized experience.
- Add more APIs for extended analytics and data sources.
- Improve accessibility and performance optimizations.

## Contributing
Feel free to fork this project, submit issues, or contribute by creating pull requests!

## License
This project is licensed under the **MIT License**.

---
