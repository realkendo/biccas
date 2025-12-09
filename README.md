# Biccas

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses **React 19**, **Tailwind CSS** for styling, and **Axios** for API requests.

## Prerequisites

Before you begin, ensure you have met the following requirements:
*   **Node.js**: Install the latest stable version of Node.js (v18 or later recommended).
*   **npm**: This project uses npm as the package manager.

## Getting Started

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd biccas
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Project

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the file.

## Login Instructions

To test the application without creating a new account, you can use the built-in **Demo Users** feature on the login page:

1.  Navigate to the Login page (default page or via `/login`).
2.  Click the **"Show Demo Users"** button below the login form.
3.  Wait for the demo users to load (fetched from the API).
4.  Click the **"Use Credentials"** button on any user card. This will automatically fill the email and password fields.
5.  Click **"Log In"** to access the dashboard.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

After building, you can start the production server:

```bash
npm start
```

## Linting

To run the linter and fix basic issues:

```bash
npm run lint
```

## Project Structure

*   `src/app`: Contains the application routes and pages (App Router).
*   `src/components`: Reusable UI components.
*   `src/utils`: Utility functions and API configurations (e.g., Axios setup).
*   `public`: Static assets like images and fonts.

## Technologies Used

*   **[Next.js](https://nextjs.org/)**: The React Framework for the Web.
*   **[React](https://react.dev/)**: The library for web and native user interfaces.
*   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework.
*   **[Axios](https://axios-http.com/)**: Promise based HTTP client for the browser and node.js.
