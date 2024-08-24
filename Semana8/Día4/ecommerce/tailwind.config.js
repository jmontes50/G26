/** @type {import('tailwindcss').Config} */
export default {
  // deseo que tengas en cuenta la carpeta src, con cualquier carpeta adicional y cualquier archivo con esas extensiones
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // modificar la configuración y valores que maneja tailwind
    extend: {
      fontFamily: {
        // la fuente predeterminada de Tailwind es Sans
        sans: ["Jost", "sans-serif"],
        jost: ["Jost", "sans-serif"]
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}

