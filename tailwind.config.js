/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [{
            mytheme: {

                "primary": "#2f3e46",

                "secondary": "#84a98c",

                "accent": "#52796f",

                "neutral": "#354f52",

                "base-100": "#cad2c5",

                "info": "#06b6d4",

                "success": "#10b981",

                "warning": "#F4C152",

                "error": "#7f1d1d",
            },
        }, ],
    },
    plugins: [
        require("daisyui"),
    ],
}