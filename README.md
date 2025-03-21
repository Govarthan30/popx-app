# Internship Assignment - PopX React App

## Overview
This project is part of an internship assignment that involves building a React.js application with Material-UI for styling. The app includes a signup page and an account settings page, where users can enter their details and view their profile information.

## Features
- **User Signup**: A form to collect user details such as name, email, phone number, password, and company name.
- **Profile Display**: After signup, users can see their profile information, including a randomly generated profile picture.
- **Styled Components**: The app uses `styled-components` for custom styling and Material-UI for UI enhancements.
- **React Router Integration**: Navigation between signup and account settings pages using `react-router-dom`.

## Tech Stack
- React.js
- Material-UI (MUI)
- Styled-Components
- React Router

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
   npm install @mui/material @mui/icons-material @mui/styled-engine @emotion/react @emotion/styled styled-components react-router-dom  
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

---