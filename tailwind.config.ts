import defaultTheme from 'tailwindcss/defaultTheme';
import preset from './vendor/filament/support/tailwind.config.preset';

/**defaultTheme @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './resources/**/*.tsx',
        './app/Filament/**/*.php',
        './resources/views/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
    ],
    theme: {
    	extend: {
            screens: {
                "custom-lg": "1224px",
                "custom-xl": "1355px"
            },
    		fontFamily: {
    			sans: [
    				'Figtree',
                    ...defaultTheme.fontFamily.sans
                ]
    		},
    		colors: {
    			'bg-primary': '#1A293B',
    			'bg-secondary': '#394149',
    			'bg-header': '#171d25',
    			'text-primary': '#FFFFFF',
    			'text-secondary': '#4D6479',
    			'text-outline': '#ACB2B8',
    			'text-blue': '#4CB4FF',
    			'text-dropdown': '#DCDEDF',
                'header-active': '#1A9FFF',
                'text-gray': '#e5e5e5'
    		},
    		fontSize: {
    			'size-main-heading': '2.125rem',
    			'size-sub-heading': '1.5rem',
                'size-badge-deal': '1.625rem',
    			'size-carousel-description': '1.3125rem',
    			'size-carousel-badge': '0.6875rem',
    			'size-header': '1rem',
    			'size-subtitle-lg': '0.813rem',
    			'size-subtitle-sm': '0.750rem',
    			'size-body': '0.875rem'
    		},
    		backgroundImage: {
    			'gradient-button-blue': 'linear-gradient(90deg, rgba(61,163,241,1) 0%, rgba(55,148,233,1) 15%, rgba(46,124,222,1) 45%, rgba(36,96,208,1) 100%)',
    			'gradient-button-blue-hover': 'linear-gradient(90deg,rgba(88,164,222,1) 0%, rgba(54,141,221,1) 29%, rgba(32,115,218,1) 63%, rgba(26,97,230,1) 100%)',
    			'gradient-button-green': 'linear-gradient(137deg, rgba(140,212,41,1) 0%, rgba(125,192,37,1) 20%, rgba(106,166,33,1) 40%)',
    			'gradient-button-green-hover': 'linear-gradient(137deg, rgba(140,212,41,1) 0%, rgba(125,192,37,1) 63%, rgba(106,166,33,1) 100%)',
    			'gradient-button-outline-hover': 'linear-gradient(90deg, rgba(79,150,190,1) 10%, rgba(67,127,162,1) 35%, rgba(59,111,141,1) 64%, rgba(54,103,131,1) 90%)',
    			'gradient-menu-blue': 'linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)',
    			'gradient-menu-blue-hover': 'linear-gradient(90deg, rgba(33, 162, 255, 0.25) 0%, rgba(33, 162, 255, 0.15) 50%, rgba(50, 50, 51, 0) 100%)',
    			'gradient-menu-dropdown-gray': 'linear-gradient(90deg, rgba(33, 162, 255, 0.1) 1.89%, rgba(50, 50, 51, 0) 50%), linear-gradient(180deg, #575860 11.6%, #3A4852 54.73%, #2C2D34 100%)',
    			'gradient-menu-dropdown-separator-horizontal-gray': 'linear-gradient(to right, rgba(108,124,136,1), transparent)',
    			'gradient-menu-dropdown-separator-vertical-gray': 'linear-gradient(to bottom, rgba(51,51,51,1), transparent)',
    			'gradient-store-side-menu': 'radial-gradient(circle at 0%, rgba(83,111,134,0) 20%, rgba(83,111,134,0.25) 100%)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
            boxShadow: {
                "banner-shadow": "0px 0px 23px -2px #3ED8FF"
            },
            keyframes: {
                ring: {
                    "0%": { transform: "rotate(0)" },
                    "5%": { transform: "rotate(20deg)" },
                    "10%": { transform: "rotate(-18deg)" },
                    "15%": { transform: "rotate(16deg)" },
                    "20%": { transform: "rotate(-14deg)" },
                    "25%": { transform: "rotate(12deg)" },
                    "30%": { transform: "rotate(-10deg)" },
                    "35%": { transform: "rotate(8deg)" },
                    "40%": { transform: "rotate(-6deg)" },
                    "45%": { transform: "rotate(4deg)" },
                    "50%": { transform: "rotate(-2deg)" },
                    "55%": { transform: "rotate(2deg)" },
                    "60%": { transform: "rotate(-1deg)" },
                    "65%": { transform: "rotate(1deg)" },
                    "70%": { transform: "rotate(0)" },
                    "100%": { transform: "rotate(0)" }
                },
                show: {
                    '0%' : { visibility: 'hidden', opacity: '0'},
                    '15%' : { visibility: 'visible', opacity: '0'},
                    '100%' : { visibility: 'visible', opacity: '100'},
                },

            },
    	}
    },
    plugins: [],
    presets: [preset],
};
