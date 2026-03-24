# College Explorer App


## create an expo app by run this code
```
npx create-expo-app@latest app_name

```
---
## After that follow the official documentation to apply tailwindcss using nativewind ->  https://www.nativewind.dev/docs/getting-started/installation
## Then you need to update the tailwind.config.js by this (Warning: If you don't implement this tailwind css not working)
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
---

## Get started

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npx expo start
```

---

## Features

* View list of universities
* Open detailed university information
* Styled using NativeWind
* Navigation using Expo Router

---

## Project Structure

```bash
app/
  (screens)
      _layout.tsx
      index.tsx    (This is the home screen where all the listed university will show)

   details
      [id].tsx     (Here is the detailed university screen)

constants/
  data.ts
```

---

## Tech Stack

* Expo (React Native)
* Expo Router
* NativeWind (Tailwind CSS)
* TypeScript


---

## Author

Soumya Panda
