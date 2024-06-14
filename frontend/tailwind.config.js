/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: ["./index.html","./src/**/*.{js,jsx}",
  "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite()
  ],
}

