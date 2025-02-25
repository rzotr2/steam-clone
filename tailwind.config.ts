import defaultTheme from 'tailwindcss/defaultTheme';

/**defaultTheme @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './resources/**/*.tsx'
    ],
    theme: {
    	extend: {
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
                'header-active': '#1A9FFF'
    		},
    		fontSize: {
    			'size-main-heading': '2.125rem',
    			'size-sub-heading': '1.5rem',
    			'size-carousel-description': '1.3125rem',
    			'size-carousel-badge': '0.6875rem',
    			'size-header': '1rem',
    			'size-subtitle': '0.813rem',
    			'size-body': '0.875rem'
    		},
    		backgroundImage: {
    			'gradient-button-blue': 'linear-gradient(90deg, rgba(61,163,241,1) 0%, rgba(55,148,233,1) 15%, rgba(46,124,222,1) 45%, rgba(36,96,208,1) 100%)',
    			'gradient-button-blue-hover': 'linear-gradient(90deg,rgba(88,164,222,1) 0%, rgba(54,141,221,1) 29%, rgba(32,115,218,1) 63%, rgba(26,97,230,1) 100%)',
    			'gradient-button-green': 'linear-gradient(137deg, rgba(140,212,41,1) 0%, rgba(125,192,37,1) 20%, rgba(106,166,33,1) 40%)',
    			'gradient-button-green-hover': 'linear-gradient(137deg, rgba(140,212,41,1) 0%, rgba(125,192,37,1) 63%, rgba(106,166,33,1) 100%)',
    			'gradient-button-outline-hover': 'linear-gradient(90deg, rgba(79,150,190,1) 10%, rgba(67,127,162,1) 35%, rgba(59,111,141,1) 64%, rgba(54,103,131,1) 90%)',
    			'gradient-menu-blue': 'linear-gradient(90deg, #4A77B6 0%, #3B5E96 40%, #2A4375 100%)',
    			'gradient-menu-blue-hover': 'linear-gradient(120deg, rgba(61,138,202,0.2) 0%, rgba(63,123,185,0.3) 23%, rgba(72,110,161,0.2) 40%, rgba(32,61,121,0) 100%)',
    			'gradient-menu-dropdown-gray': 'linear-gradient(180deg, #484B52 0%, #3A4048 50%, #2A333C 100%)',
    			'gradient-menu-dropdown-separator-horizontal-gray': 'linear-gradient(to right, rgba(108,124,136,1), transparent)',
    			'gradient-menu-dropdown-separator-vertical-gray': 'linear-gradient(to bottom, rgba(51,51,51,1), transparent)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
};
