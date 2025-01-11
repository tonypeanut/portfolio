/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        'cellphone': '475px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors: {
        gray: {
          'color-1': '#f9fafb',
          'color-2': '#f3f4f6',
          'color-3': '#e5e7eb',
          'color-4': '#d1d5db',
          'color-5': '#6b7280',
          'color-6': '#374151', // Más intenso
          'neutral': '#ffffff', // Color neutro
          'text-1': '#1f2937',  // Contraste oscuro
          'text-2': '#ffffff',  // Contraste claro
        },
        blue: {
          'color-1': '#ebf8ff',
          'color-2': '#bee3f8',
          'color-3': '#90cdf4',
          'color-4': '#63b3ed',
          'color-5': '#3182ce',
          'color-6': '#2b6cb0', // Más intenso
          'neutral': '#f7fafc', // Color neutro ajustado, más claro
          'text-2': '#ffffff',  // Contraste claro
          'text-1': '#1e3a8a',  // Contraste oscuro
        },
        green: {
          'color-1': '#f0fff4',
          'color-2': '#c6f6d5',
          'color-3': '#9ae6b4',
          'color-4': '#68d391',
          'color-5': '#38a169',
          'color-6': '#2f855a', // Más intenso
          'neutral': '#f0fdf4', // Color neutro
          'text-1': '#065f46',  // Contraste oscuro
          'text-2': '#ffffff',  // Contraste claro
        },
        red: {
          'color-1': '#fff5f5',
          'color-2': '#fed7d7',
          'color-3': '#feb2b2',
          'color-4': '#fc8181',
          'color-5': '#e53e3e',
          'color-6': '#c53030', // Más intenso
          'neutral': '#fef2f2', // Color neutro
          'text-2': '#ffffff',  // Contraste claro
          'text-1': '#9b1c1c',  // Contraste oscuro
        },
        purple: {
          'color-1': '#faf5ff',
          'color-2': '#e9d8fd',
          'color-3': '#d6bcfa',
          'color-4': '#b794f4',
          'color-5': '#9f7aea',
          'color-6': '#6b46c1', // Más intenso
          'neutral': '#faf5ff', // Color neutro
          'text-2': '#ffffff',  // Contraste claro
          'text-1': '#5b21b6',  // Contraste oscuro
        },
      }
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addVariant }) {
      addVariant('theme-gray', '[data-theme="gray"] &');
      addVariant('theme-blue', '[data-theme="blue"] &');
      addVariant('theme-green', '[data-theme="green"] &');
      addVariant('theme-red', '[data-theme="red"] &');
      addVariant('theme-purple', '[data-theme="purple"] &');
    },
  ],
  safelist: [
    // #region theme-color:bg-color

    "theme-gray:bg-gray-color-1",
    "theme-blue:bg-blue-color-1",
    "theme-green:bg-green-color-1",
    "theme-red:bg-red-color-1",
    "theme-purple:bg-purple-color-1",

    "theme-gray:bg-gray-color-2",
    "theme-blue:bg-blue-color-2",
    "theme-green:bg-green-color-2",
    "theme-red:bg-red-color-2",
    "theme-purple:bg-purple-color-2",

    "theme-gray:bg-gray-color-3",
    "theme-blue:bg-blue-color-3",
    "theme-green:bg-green-color-3",
    "theme-red:bg-red-color-3",
    "theme-purple:bg-purple-color-3",

    "theme-gray:bg-gray-color-4",
    "theme-blue:bg-blue-color-4",
    "theme-green:bg-green-color-4",
    "theme-red:bg-red-color-4",
    "theme-purple:bg-purple-color-4",

    "theme-gray:bg-gray-color-5",
    "theme-blue:bg-blue-color-5",
    "theme-green:bg-green-color-5",
    "theme-red:bg-red-color-5",
    "theme-purple:bg-purple-color-5",

    "theme-gray:bg-gray-color-6",
    "theme-blue:bg-blue-color-6",
    "theme-green:bg-green-color-6",
    "theme-red:bg-red-color-6",
    "theme-purple:bg-purple-color-6",

    "theme-gray:bg-gray-neutral",
    "theme-blue:bg-blue-neutral",
    "theme-green:bg-green-neutral",
    "theme-red:bg-red-neutral",
    "theme-purple:bg-purple-neutral",

    "theme-gray:text-gray-text-1",
    "theme-blue:text-blue-text-1",
    "theme-green:text-green-text-1",
    "theme-red:text-red-text-1",
    "theme-purple:text-purple-text-1",

    "theme-gray:text-gray-text-2",
    "theme-blue:text-blue-text-2",
    "theme-green:text-green-text-2",
    "theme-red:text-red-text-2",
    "theme-purple:text-purple-text-2",

    // #endregion

    // #region hover:theme-color-bg-color

    "hover:theme-gray:bg-gray-color-4",
    "hover:theme-blue:bg-blue-color-4",
    "hover:theme-green:bg-green-color-4",
    "hover:theme-red:bg-red-color-4",
    "hover:theme-purple:bg-purple-color-4",

    "hover:theme-gray:bg-gray-color-6",
    "hover:theme-blue:bg-blue-color-6",
    "hover:theme-green:bg-green-color-6",
    "hover:theme-red:bg-red-color-6",
    "hover:theme-purple:bg-purple-color-6",

    // #endregion

    // #region theme-color:to-color

    "theme-gray:to-gray-color-1",
    "theme-blue:to-blue-color-1",
    "theme-green:to-green-color-1",
    "theme-red:to-red-color-1",
    "theme-purple:to-purple-color-1",

    "theme-gray:to-gray-color-2",
    "theme-blue:to-blue-color-2",
    "theme-green:to-green-color-2",
    "theme-red:to-red-color-2",
    "theme-purple:to-purple-color-2",

    "theme-gray:to-gray-color-3",
    "theme-blue:to-blue-color-3",
    "theme-green:to-green-color-3",
    "theme-red:to-red-color-3",
    "theme-purple:to-purple-color-3",

    "theme-gray:to-gray-color-4",
    "theme-blue:to-blue-color-4",
    "theme-green:to-green-color-4",
    "theme-red:to-red-color-4",
    "theme-purple:to-purple-color-4",

    "theme-gray:to-gray-color-5",
    "theme-blue:to-blue-color-5",
    "theme-green:to-green-color-5",
    "theme-red:to-red-color-5",
    "theme-purple:to-purple-color-5",

    "theme-gray:to-gray-color-6",
    "theme-blue:to-blue-color-6",
    "theme-green:to-green-color-6",
    "theme-red:to-red-color-6",
    "theme-purple:to-purple-color-6",

    // #endregion

    // #region theme-color:from-color

    "theme-gray:from-gray-color-1",
    "theme-blue:from-blue-color-1",
    "theme-green:from-green-color-1",
    "theme-red:from-red-color-1",
    "theme-purple:from-purple-color-1",

    "theme-gray:from-gray-color-2",
    "theme-blue:from-blue-color-2",
    "theme-green:from-green-color-2",
    "theme-red:from-red-color-2",
    "theme-purple:from-purple-color-2",

    "theme-gray:from-gray-color-3",
    "theme-blue:from-blue-color-3",
    "theme-green:from-green-color-3",
    "theme-red:from-red-color-3",
    "theme-purple:from-purple-color-3",

    "theme-gray:from-gray-color-4",
    "theme-blue:from-blue-color-4",
    "theme-green:from-green-color-4",
    "theme-red:from-red-color-4",
    "theme-purple:from-purple-color-4",

    "theme-gray:from-gray-color-5",
    "theme-blue:from-blue-color-5",
    "theme-green:from-green-color-5",
    "theme-red:from-red-color-5",
    "theme-purple:from-purple-color-5",

    "theme-gray:from-gray-color-6",
    "theme-blue:from-blue-color-6",
    "theme-green:from-green-color-6",
    "theme-red:from-red-color-6",
    "theme-purple:from-purple-color-6",

    // #endregion

    "bg-gray-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-red-400",
    "bg-purple-400",

    "hover:bg-gray-600",
    "hover:bg-blue-600",
    "hover:bg-green-600",
    "hover:bg-red-600",
    "hover:bg-purple-600",

  ]
};
