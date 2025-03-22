# Internship Assignment - PopX React App

## Overview
This project is part of an internship assignment that involves building a React.js application with Material-UI for styling. The app includes a signup page and an account settings page, where users can enter their details and view their profile information.

## Features
- **User Signup**: A form to collect user details such as name, email, phone number, password, and company name.
- **Profile Display**: After signup, users can see their profile information, including a randomly generated profile picture.
- **Styled Components**: The app uses `styled-components` for custom styling and Material-UI for UI enhancements.
- **React Router Integration**: Navigation between signup and account settings pages using `react-router-dom`.
- **Animations**: Smooth transitions and animations using `framer-motion` for a better user experience.

## Tech Stack
- React.js
- Material-UI (MUI)
- Styled-Components
- React Router
- Framer Motion (for animations)

## Installation & Setup

### Prerequisites
Ensure you have Node.js and npm installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Govarthan30/popx-app.git
   cd popx-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install required packages:
   ```bash
   npm install @mui/material @mui/icons-material @mui/styled-engine @emotion/react @emotion/styled styled-components react-router-dom framer-motion 
   ```

### Running the Project
```bash
npm start
```

## Folder Structure
```
popx-app/
│── src/
│   ├── components/
│   │   ├── SignupPage.js
│   │   ├── AccountSettings.js
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

## Deployment
The project can be deployed using **Vercel** or **Netlify** for quick hosting.

## Animations & Transitions
- **Page Load Animation**: The account settings and signup pages now have smooth fade-in and slide-in effects.
- **Profile Section Animation**: The profile section scales into view when loaded.
- **Button Hover Effects**: Buttons change colors with animated transitions for a better UX.
- **Input Focus Effects**: Inputs smoothly transition their label positions when focused.

With these enhancements, the user experience is now more interactive and visually appealing.
