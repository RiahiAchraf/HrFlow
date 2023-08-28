# HrFlow - Job Listing Web Page Challenge

## Overview

This challenge involves developing a responsive web page using the React.js library that displays a list of jobs. The page allows users to filter job listings by categories, search for jobs using a text input, and apply various filters.


## Features

- Filter jobs by categories
- Search jobs using a text input
- Sort jobs by different criteria
- Re-order items through drag and drop
- Implement a caching system to save user filters
- Handle various app states (empty, errors, loading, success)
- Pagination with default item limit
- View optimal layout for different devices
- Hover states for interactive elements
- Toolbar for filters (search input, sorting, category filtering, reset button)
- List of clickable expandable job cards

## API Integration

- The list of jobs is retrieved using the HrFlow Searching API.

## Instructions

1. **Installation:**
   - Clone this repository: `[git@github.com:RiahiAchraf/HrFlow.git](https://github.com/RiahiAchraf/HrFlow.git)`
   - Navigate to the project directory: `cd hr-flow`

2. **Setup:**
   - Make sure to use node-version: [18.x]
   - Install dependencies: `pnpm install` or `npm install` or `yarn install` 

3. **Running the App:**
   - Start the development server: `pnpm run dev` or `npm run dev` or `yarn run dev`
   - Open your browser and navigate to `http://localhost:3000`

4. **Usage:**
   - Use the search bar to find jobs by name
   - Filter jobs by category using the dropdown
   - Sort jobs by various criteria using the sorting options ( created date, name and category )
   - Re-order items by drag and drop
   - Reset filters using the reset button
   - Navigate between pages using the pagination

5. **Testing:**
   - Run tests using: `pnpm test:open` or `npm test:open` or `yarn test:open`
   - Make sure to have a testing environment set up ( Cypress )

6. **Tech Stack:**
   - Typescript
   - Nextjs 13
   - Eslint/Prettier, lint-staged, husky and commitlint configured
   - UI libraries: Tailwindcss, Radix-ui, Shadcn
   - State management: Zustand
   - Data managment: React Query
   - Testing tool :Cypress
   - Axios
   - Dayjs
   - [And these useful of JavaScript libraries ](https://github.com/RiahiAchraf/HrFlow/blob/main/package.json)

7. **Evaluation Criteria:**
   - Ability to use HrFlow.ai's searching APIs
   - Quality of user interface design
   - Code organization and readability
   - Error handling and app robustness
   - Adherence to guidelines and requirements

8. **Error Handling:**
   - The app handles errors gracefully and provides user-friendly feedback.

9.  **Contributing:**
   - If you'd like to contribute, feel free to fork and submit a pull request.

10.  **Credits:**
    - Include any credits or references to external sources you've used.

11. **License:**
    - [HrFlow.ai]

Happy coding!

[![Powered by Vercel](./powered-by-vercel.svg)]