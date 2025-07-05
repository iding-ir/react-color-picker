# Index

- [About](#about)
- [Color Picker package](#color-picker-package)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Tech stack](#tech-stack)
- [Folder structure](#folder-structure)
- [Installation](#installation)
- [Run](#run)

## About
This repository consists of:
### 1. A React color picker package:
- Has no dependency other than React.
- It allows user to pick color from canvas.
- It is optimized for performance through `React ref`, `throttling`, and use of GPU through `translate3d`, etc.
### 2. A demo React App that consumes this package:
Featuring file upload, canvas display and color swatch.

## Color Picker package
- Only dependency: React.
- Color Picker uses React Context for its own internal state.
- A magnifier component represents cursor when hovered on canvas.
- Customizable through props.

## Screenshots

![Butterfly](https://raw.githubusercontent.com/iding-ir/react-color-picker/refs/heads/master/screenshots/butterfly.png)

![Cat](https://raw.githubusercontent.com/iding-ir/react-color-picker/refs/heads/master/screenshots/cat.png)

## Usage

```jsx
// radius: lense grid radius in number of items
// size: size of a grid item in pixels
// width: width of lense border for color preview
<ColorCandyProvider radius={7} size={10} width={18}>
  {children}
</ColorCandyProvider>
```

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
src/                          # Mock app files and assets
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
