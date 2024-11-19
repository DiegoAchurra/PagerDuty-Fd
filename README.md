
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

## Questions and Answers

1. **If you have a user requirement to create a new page, what are the steps you take to create the solution focusing on (UI, UX, FE)?**
   - *Answer*: First, gather and analyze the requirements. Then create wireframes or mockups to design the UI/UX, typically using tools like Figma or Canva. Implement the design using frameworks like Bootstrap and React Libraries for creating responsive, accessible, and reusable components. Ensure a good user experience with performance optimization and user feedback mechanisms.


2. **Do you have experience using state management libraries? Can you explain how you used it?**
   - *Answer*: Yes, I extensively use Redux and Context API. For instance, in my GuardianesCL project, I used Context API to manage state for volunteer schedules and shift alerts efficiently.


3. **What are some of the code best practices you use in your experience?**
   - *Answer*: I try to always based my code considering SOLID, DRY and KISS. Writing clean, commented code and adhering to a consistent structure (e.g., using numbered sections in views) are also key. In projects like RedMaestra, these practices allowed seamless integration of new modules without disrupting existing functionality.


4. **What are some ways to style components? Can you provide an explanation of each?**
   - *Answer*: 
      - CSS Modules: Scoped CSS for specific components.
      - Styled Components: Write CSS directly in JavaScript.
      - Tailwind CSS: Utility-first framework for rapid, consistent styling.
      - External CSS: Link separate CSS files for global styles.


5. **Describe 3 ways to pass information from a component to its parent component.**
   - *Answer*: 
      1. Callback functions: The parent passes a function to the child which calls it with data.
      2. Props drilling: Pass data through multiple components to reach the parent.
      3. Context API: Share data across components without passing props explicitly.


6. **Do you have experience in design systems? Can you please share your experience and best practices?**
   - *Answer*: Yes, I have extensive experience working with design systems. In projects like **RedMaestra**, **Guardianes**, and **Rescate Familiar**, I adhered to specific brand guidelines and created cohesive CSS styling across the entire application. This involved ensuring consistency in typography, colors, and components while following each project’s unique brandbook.  
   
   - My best practices include:
     - **Reusable Components**: Developing modular and reusable UI components to ensure maintainability and scalability.
     - **Consistency**: Strictly adhering to brandbooks to maintain a unified look and feel across different modules and pages.
     - **Accessibility**: Incorporating ARIA roles and ensuring WCAG compliance for all components.
     - **Documentation**: Keeping a clear record of styles and component usage for easier onboarding and collaboration.
     - **Frameworks**: Leveraging tools like **Tailwind CSS** or **Bootstrap** as a base while customizing them to align with the design system.

   - This approach ensures that every application I develop reflects its unique brand identity while maintaining a professional and accessible user experience.