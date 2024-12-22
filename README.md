# Index

- [Updates](#update)
- [About](#about)
- [Tech stack](#tech-stack)
- [Structure](#structure)
- [Decision making](#decision-making)
- [Choosing libraries](#choosing-libraries)
- [Areas for improvement](#areas-for-improvement)
- [Installation](#installation)
- [Run](#run)

## Update
In recent development, the following changes are made:
- Color Picker is converted to a re-usable package with its own internal state (Redux Context)
- A magnifier is added to the color picker.
- Some optional props are exposed to users (magnifier radius, grid size, width of color preview rim, etc.)
- Some comments are added to the package to briefly explain the API.

## About
A mock React app that allows user to change the background of their canvas using either a:
- color picker
- text input
- color swatch

## Tech stack
- `TypeScript`.
- `React`.
- `Redux Toolkit` for state management, querying, caching, and handling effects.
- `react-colorful` for color picker.
- `react-dropzone` for uploading photos
- `SCSS Modules` for component-scoped styles.
- `Vite` for building the project.
- `clsx` utility lib for CSS class names.

## Structure
I used Vite to build the application. [Why Vite?](https://vite.dev/guide/why).

I followed the folder structure that mirrors Redux Toolkit [Feature-based State Structure](https://redux.js.org/tutorials/essentials/part-2-app-structure).

I set up:
  - ESLint and TypeScript for static checking/testing.
  - Prettier for keeping the code tidy.
  - sort imports to keep the code organized.
  - SCSS modules to prefix class names with component names.

  ### Folder structure

```
public/                       # Public files and assets (Vite convention)
src/                          # App files and assets
  |- app/                     # Redux Toolkit folder that hosts store provider, hooks and the store.
  |- components/              # React components
  |- constants/               # Default values and app constants to hard-coded avoid magic numbers.
  |- features/                # RTK convention
     |- background/                  # Feature folder (RTK convention)
        |- components/               # Feature-related components (RTK convention)
        |- background-slice.tsx      # Slice configuration (actions, reducers and selectors)
        |- background-middleware.ts  # Managing effects using RTK Listener Middlewares
        |- index.ts                  # Types, tests, constants and other feature related files can go here.
     |- colorPicker/
     |- photo/
  |- hooks/                         # React hooks
  |- methods/                       # App methods
  |- styles/                        # General styles.
  |- types/                         # Type declarations that may not belong to features.
  |- utils/                         # Good practice to keep reusable functions in utils
```

## Decision making
### Vite
For this project I preferred Vite over Create React App, Parcel, Webpack, etc. Reasoning:
- Ease of setting up a front-end app and abstracting configurations.
- Having its own compiler engine.
- Built-in test library.
- Additional features similar to Lerna.js
- Being modular and extendable by the community

### Redux Toolkit
Main reasons to use:
- Avoiding Redux boilerplates.
- Introducing more structure to the folder and state trees.
- Built in features like Listener Middlewares, RTK Query, Built-in Thunk, caching...
- Better dev experience and easier debugging using browser extensions.

### SCSS Modules
I prefer SCSS Modules to CSS, CSS in JS, BEM, etc. for these reasons:
- It scopes styles to a module/component.
- It comes with all advantages of a pre-processor like SASS.
- Unlike SASS, it's written like CSS
- Unlike CSS in JS, it respects division of concerns.
- Unlike BEM, it respect semantic naming.
- Unlike Pure CSS, it takes less code.

### Canvas technologies
Unlike [Canvas Editor](https://github.com/iding-ir/react-canvas-editor), I didn't use external libraries to render canvas.
This was mainly because:
- Assignment requirements.
- CF uses canvas technologies at a lower level.

## Choosing libraries
I choose the tooling based on the requirements and resources.

Generally speaking, when deciding on a library, I consider:
- How reliable the developer is and how is the future of the library like.
- How strong the community is.
- How often it is maintained.
- If I develop it myself, do I have the resources to update, maintain and document it regularly?
- What might the learning curves for the new devs be if I develop it myself?

For these reasons I used `react-dropzone`, `react-colorful` and `clsx` in this assignment, but I didn't invest in creating a universal color picker from the scratch either.

## Areas for improvement
- Writing tests: unit, integration, e2e.
- Improve accessibility.
- Error handling and error boundary.
- Move app logics out of some component to keep them clean and reusable.
- Use advanced React techniques like Ref Forwarding in some cases.

## Installation

Install dependencies:
```
yarn install
```

## Run

Dev environment:
```
yarn dev
```
