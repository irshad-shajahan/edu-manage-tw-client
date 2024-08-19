# EduManage Client

Welcome to the EduManage client repository! This client is built using Vite and React, designed to work with the EduManage server application.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Modern and responsive user interface
- Efficient state management with Redux Toolkit
- Data fetching and caching with RTK Query
- Styling with Tailwind CSS
- Field validation and error handling
- Authentication and authorization
- Dashboard for different user roles (Student, Teacher, Admin)

## Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Powerful data fetching and caching tool
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in your React projects
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications for React

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/irshad-shajahan/edu-manage-tw-client.git
cd edu-manage-tw-client
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

This will start the client application in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Scripts

- `npm run dev` - Runs the app in development mode.
- `npm run build` - Builds the app for production to the `dist` folder.
- `npm run lint` - Runs ESLint to check for code quality and style issues.
- `npm run preview` - Locally preview the production build.

## Project Structure

```
src/
├── App.jsx
├── assets/
├── components/
│   ├── common/
│   ├── loaders/
│   ├── student/
│   └── teacher/
├── hooks/
├── index.css
├── main.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── redux/
│   ├── features/
│   └── store.js
├── routes/
└── utils/
```

- `components/`: Reusable React components organized by user role
- `pages/`: Components that represent pages in your application, organized by user role
- `redux/`: Redux store configuration, slices, and RTK Query APIs
- `routes/`: Application routing configuration
- `utils/`: Utility functions and helpers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Specify your license here]