/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#3B434E',
                white: '#FFFFFF',
                primary: '#7653FC',
                red: '#FC836D',
                green: '#1DC37E',
                'green-light': '#C8F8E4',
            },
        },
    },
    plugins: [],
}