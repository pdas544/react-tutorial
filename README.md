# React For Beginners

A simple React project to demonstrate the basics of React.js, including components, props, state, and event handling.

1) One component always returns a single parent element.
2) Parent **Element** can have multiple child elements.
3) Must close all tags inside a JSX file.
4) classes are defined using **className** attribute instead of class.
5) for attribute is defined using **htmlFor** attribute instead of for.

## Expressions in JSX
 - You can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`.
 - Variables are evaluated inside the curly braces.
 - Components are created using the following steps:
   - register the component using the arrow function (check componenets/Greet.jsx)
   - export the component
   - call the component inside App.jsx file
   - the component file ends with .jsx extension

## Hooks
- Functions starting with `use` keyword are known as Hooks. Two types of hooks: built-in and user-defined.
- `useState` hook allows the component to remember information and display it.
- Step 1: `import { useState } from 'react';`
- Step 2: `function MyButton(){ const [count, setCount] = useState(0);`
- useState gives two things, count: Initial value with 0, setCount: function to change the value.