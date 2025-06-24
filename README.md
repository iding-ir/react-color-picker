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

## Package
- Only dependency: React.
- Color Picker uses React Context for its own internal state.
- A magnifier component represents cursor when hovered on canvas.
- Customizable through props.

## About
A mock React app that allows user to change the background of their canvas using either a:
- color picker
- text input
- color swatch

## Tech stack
- `TypeScript`.
- `React`.
- `Redux Toolkit` for state management, querying, caching, and handling effects.
- `react-colorful` for color swatch.
- `react-dropzone` for photos uploading.
- `SCSS Modules` for component-scoped styles.
- `Vite` for building the project.
- `clsx` utility lib for CSS class names.

### Folder structure

```
packages/
  |- color-candy/             # Reusable color picker package
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
