# Express + TypeScript Starter

A minimal, reusable backend starter template built with **Node.js, Express.js, and TypeScript**.

Use this template to quickly start a new backend project without configuring Express and TypeScript from scratch every time.

## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **TypeScript** – Type-safe JavaScript
- **tsx** – Run TypeScript directly with automatic restarting during development
- **dotenv** – Load environment variables

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/express-typescript-starter.git
cd express-typescript-starter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

```env
PORT=3000
```

If the repository contains `.env.example`, you can copy it to `.env` and modify the values.

### 4. Start the development server

```bash
npm run dev
```

The server should be available at:

```text
http://localhost:3000
```

### 5. Build and run

Compile TypeScript:

```bash
npm run build
```

Run the compiled JavaScript:

```bash
npm start
```

## Available Scripts

| Command            | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `npm run dev`      | Start development server with auto-restart using tsx      |
| `npm run build`    | Compile TypeScript using tsc                              |
| `npm start`        | Run compiled JavaScript                                   |
| `npx tsc --noEmit` | Check for TypeScript errors without generating JavaScript |

## Example HTTP Request

Once the server is running, test an existing endpoint using curl:

```bash
curl -i http://localhost:3000/
```

Update the URL if your server uses a different route or port.

## Environment Variables

Keep secrets and local configuration in a `.env` file.

Never commit your `.env` file to GitHub. Instead, commit a `.env.example` file containing placeholder values.

## Using This Starter

You can use this repository as the foundation for your next Node.js backend project.

1. Click **Use this template** on GitHub, or clone the repository.
2. Create your new project.
3. Update the project name in `package.json`.
4. Add your routes, controllers, services, and database configuration as needed.
5. Start building.
