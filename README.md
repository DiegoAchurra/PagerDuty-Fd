
# PagerDuty Component FrontEnd

## Project Overview

This project implements an AutoComplete component using React and TypeScript as part of the PagerDuty Front End Take Home Exercise. It adheres to the following requirements:

- **Performance-focused** implementation.
- Avoids third-party libraries for core functionality.
- Utilizes TypeScript with proper interfaces.
- Simulates asynchronous filtering using PagerDuty API.
- Provides a great user experience with custom CSS.
- Highlights matching parts of text in the suggestions dropdown.
- Avoids state management libraries; only React Hooks are used.
- Functional components only.

## App Structure

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   └── AutoComplete
│   │       ├── AutoComplete.css
│   │       └── AutoComplete.tsx
│   ├── index.css
│   └── index.tsx
└── tsconfig.json
```

## Running the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/DiegoAchurra/PagerDuty-Fd.git
   cd PagerDuty-Fd
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Key Files

- **`AutoComplete.tsx`**: The main component implementing the auto-complete feature.
- **`AutoComplete.css`**: Styles for the AutoComplete component.
- **`App.tsx`**: Entry point for integrating the AutoComplete component.
- **`App.css`, `index.css`**: Global and app-specific styles.
- **`tsconfig.json`**: TypeScript configuration.

## Features

- Highlights matching text in suggestions.
- Displays "No matches" when there are no results.
- Includes a spinner for async loading simulation.
- Responsive and user-friendly design.

## Issues
- A minor issue was identified: if the user types a character and deletes it quickly while the data is still loading, the suggestions may appear even though the input field is empty. This issue is immediately resolved by any subsequent state change, such as typing another character or interacting with the component.