import defaultTheme from 'tailwindcss/defaultTheme';

/**defaultTheme @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.tsx'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
