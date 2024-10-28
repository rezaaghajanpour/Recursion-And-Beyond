
# Recursion And Beyond

This project assignment, **Recursion And Beyond**, introduces students to recursive problem-solving through classic computational challenges: the Towers of Hanoi and the Minimax algorithm for Tic-Tac-Toe. Each student will implement solutions in dedicated `agent.js` files to explore recursive functions, dynamic strategies, and optimal decision-making.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Assignment Details](#assignment-details)
  - [1. Classic and Extended Towers of Hanoi](#1-classic-and-extended-towers-of-hanoi)
  - [2. Minimax Algorithm for Tic-Tac-Toe](#2-minimax-algorithm-for-tic-tac-toe)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Additional Resources](#additional-resources)

---

## Overview

In this assignment, students will focus on implementing recursive algorithms in JavaScript. The tasks include solving both standard and extended versions of the **Towers of Hanoi** and implementing the **Minimax algorithm** for an AI-powered Tic-Tac-Toe game. Both assignments are structured in their own directories within `src/components/Applications`, with each containing an `agent.js` file where students will complete their recursive implementations.

## Project Structure

Below is a simplified outline of the main project structure:

```
recursion-and-beyond/
├── public/
│   └── img/                      # Project images for Hanoi and Tic-Tac-Toe
├── src/
│   ├── components/
│   │   ├── Applications/
│   │   │   ├── Hanoi/
│   │   │   │   ├── agent.js      # Complete Hanoi problem solutions here
│   │   │   │   └── *             # Components for Hanoi problem UI
│   │   │   └── Tic Tac Toe/
│   │   │       ├── agent.js      # Complete Minimax implementation here
│   │   │       └── *             # Components for Tic-Tac-Toe game UI
│   │   └── Sections/
├── package.json                   # Project dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # Project documentation
```

## Getting Started

1. **Fork the Repository**:

   Start by forking this repository to your own GitHub account.

2. **Clone the Forked Repository**:

   ```bash
   git clone https://github.com/Aryanoor/Recursion-And-Beyond.git
   cd recursion-and-beyond
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   This starts a local server on `http://localhost:5173`, where you can interact with the application.

---

## Assignment Details

Each task is outlined below, with guidance on where to implement code.

### 1. Classic and Extended Towers of Hanoi

The **Towers of Hanoi** problem challenges students to move disks between rods while following specific rules. The **Classic Towers of Hanoi** involves three rods and a variable number of disks, whereas the **Extended Towers of Hanoi** introduces additional constraints or rods.

- **Location**: Implement recursive solutions in `src/components/Applications/Hanoi/agent.js`.
- **Requirements**:
  - Create a recursive function that outputs each move from one rod to another.
  - Extended problems may require variations in the recursive logic to accommodate extra constraints.

### 2. Minimax Algorithm for Tic-Tac-Toe

The **Minimax algorithm** is widely used in AI to ensure optimal decision-making in games. This project applies Minimax to a Tic-Tac-Toe game, allowing the AI agent to always make the best move, resulting in either a win or a tie.

- **Location**: Implement the minimax logic in `src/components/Applications/Tic Tac Toe/agent.js`.
- **Requirements**:
  - Develop a recursive algorithm that evaluates each possible move and chooses the optimal path.
  - Ensure edge cases (like a full board or guaranteed win/loss situations) are handled.

## Running the Project

To run the project in development mode:

```bash
npm run dev
```

This will launch the application and provide an interactive UI for both the Towers of Hanoi and Tic-Tac-Toe game, where you can test and verify the recursive functions.

## Testing

- Use the UI for each task to verify your solution.
- Each step or move should be checked against the expected outcomes (e.g., Hanoi steps and Tic-Tac-Toe AI moves).

## Additional Resources

- [Introduction to Recursion](https://www.geeksforgeeks.org/recursion/)
- [Towers of Hanoi Explanation](https://www.mathsisfun.com/games/towerofhanoi.html)
- [Minimax Algorithm Guide](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/)

--- 

This project offers an in-depth exploration of recursion and algorithmic thinking. Good luck, and happy coding!
