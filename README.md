# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by improperly managing dependencies.

## The Bug

The `bug.js` file contains a component that attempts to increment a state variable within the `useEffect` hook without specifying any dependencies. This causes the effect to run repeatedly, leading to an infinite loop.

## The Solution

The `bugSolution.js` file shows the correct implementation. The empty dependency array `[]` ensures that the effect runs only once after the initial render.