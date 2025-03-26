# Contributing to Pitt2PIT

Thank you for your interest in contributing to Pitt2PIT! This document provides guidelines and instructions for setting up your development environment and contributing to the project.

## Table of Contents
- [Project Overview](#project-overview)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Contributions](#making-contributions)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)

## Project Overview

Pitt2PIT is a web application designed to help University of Pittsburgh students coordinate rides to Pittsburgh International Airport. The project uses:
- Frontend: Next.js with TypeScript
- Backend: Express.js with TypeScript
- Database: PostgreSQL (hosted on Railway)

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git
- PostgreSQL (local installation optional if using Railway)

### Setting Up Your Development Environment

1. **Fork and Clone the Repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Pitt2PIT.git
   cd Pitt2PIT
   ```

2. **Set Up the Frontend**
   ```bash
   # Install dependencies
   npm install
   
   # Create a .env file and add necessary environment variables
   cp .env.example .env
   
   # Start the development server
   npm run dev
   ```

3. **Set Up the Backend**
   ```bash
   cd backend
   
   # Install dependencies
   npm install
   
   # Create a .env file and add necessary environment variables
   cp .env.example .env
   
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # Start the development server
   npm run dev
   ```

4. **Configure Git Remotes**
   ```bash
   # Add the original repository as upstream
   git remote add upstream https://github.com/denystsinyk/Pitt2PIT.git
   ```

### Environment Variables

#### Frontend (.env)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

#### Backend (.env)
```
PORT=3001
NODE_ENV=development
DATABASE_URL="your-railway-postgresql-url"
```

### Getting Environment Variables
To get access to the actual environment variables used in the project:
Ask Denys of Liam

## Project Structure

```
Pitt2PIT/
├── components/         # Shared React components
├── public/            # Static assets
├── src/              # Frontend source code
├── backend/          # Backend API server
│   ├── src/          # Backend source code
│   ├── prisma/       # Database schema and migrations
│   └── tests/        # Backend tests
└── tests/            # Frontend tests
```

## Making Contributions

1. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Write clean, maintainable code
   - Add comments where necessary
   - Update tests if needed

3. **Keep Your Fork Updated**
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin feature/your-feature-name
   ```
