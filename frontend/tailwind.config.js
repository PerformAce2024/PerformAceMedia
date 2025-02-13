export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 4s ease forwards",
        slideY: "slideY 1s ease forwards",
        slideX: "slideX 1s ease forwards",
        bounceIn: "bounceIn 0.8s both",
        blink: "blink 2s ease infinite",
        scale: "scale 0.5s linear forwards",
      },
      keyframes: {
        fadeIn1: {
          to: { opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.1" },
        },
        slideY: {
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideX: {
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        scale: {
          to: { transform: "scale(1)" },
        },
        bounceIn: {
          "0%, 20%, 40%, 60%, 80%, 100%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "20%": {
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "40%": {
            transform: "scale3d(0.9, 0.9, 0.9)",
          },
          "60%": {
            opacity: "1",
            transform: "scale3d(1.03, 1.03, 1.03)",
          },
          "80%": {
            transform: "scale3d(0.97, 0.97, 0.97)",
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
