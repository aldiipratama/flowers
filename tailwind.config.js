/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        animate: "animate 2s linear infinite",
      },
      keyframes: {
        animate: {
          "0%, 100%": {
            color: "white",
            filter: "blur(2px)",
            "text-shadow":
              "0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff, 0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff, 0 0 3000px #00b3ff, 0 0 400px #00b3ff",
          },
          "10%, 90%": {
            color: "#111",
            filter: "blur(0)",
            "text-shadow": "none",
          },
        },
      },
    },
  },
  plugins: [],
};
