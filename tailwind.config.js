/** @type {import('tailwindcss').Config} */

/** Helper to create a color that references a CSS variable with alpha support */
function m3(varName) {
    return `rgb(var(${varName}) / <alpha-value>)`;
}

export default {
    content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Roboto Flex"', 'Roboto', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'Fira Code', 'monospace']
            },
            colors: {
                surface: {
                    DEFAULT: m3('--color-surface'),
                    dim: m3('--color-surface-dim'),
                    container: m3('--color-surface-container'),
                    'container-high': m3('--color-surface-container-high'),
                    'container-highest': m3('--color-surface-container-highest'),
                    variant: m3('--color-surface-variant')
                },
                primary: {
                    DEFAULT: m3('--color-primary'),
                    container: m3('--color-primary-container'),
                    'on-container': m3('--color-primary-on-container')
                },
                secondary: {
                    DEFAULT: m3('--color-secondary'),
                    container: m3('--color-secondary-container'),
                    'on-container': m3('--color-secondary-on-container')
                },
                tertiary: {
                    DEFAULT: m3('--color-tertiary'),
                    container: m3('--color-tertiary-container'),
                    'on-container': m3('--color-tertiary-on-container')
                },
                error: {
                    DEFAULT: m3('--color-error'),
                    container: m3('--color-error-container')
                },
                outline: {
                    DEFAULT: m3('--color-outline'),
                    variant: m3('--color-outline-variant')
                },
                'on-surface': m3('--color-on-surface'),
                'on-surface-variant': m3('--color-on-surface-variant'),
                'inverse-surface': m3('--color-inverse-surface'),
                'inverse-on-surface': m3('--color-inverse-on-surface')
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem'
            },
            boxShadow: {
                'm3-1': '0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)',
                'm3-2': '0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)',
                'm3-3': '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.30)'
            },
            fontSize: {
                'display-lg': ['3.5625rem', { lineHeight: '4rem', letterSpacing: '-0.015em', fontWeight: '400' }],
                'display-md': ['2.8125rem', { lineHeight: '3.25rem', letterSpacing: '0', fontWeight: '400' }],
                'display-sm': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '0', fontWeight: '400' }],
                'headline-lg': ['2rem', { lineHeight: '2.5rem', letterSpacing: '0', fontWeight: '400' }],
                'headline-md': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0', fontWeight: '400' }],
                'headline-sm': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0', fontWeight: '400' }],
                'title-lg': ['1.375rem', { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '500' }],
                'title-md': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.009em', fontWeight: '500' }],
                'title-sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.007em', fontWeight: '500' }],
                'body-lg': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.031em', fontWeight: '400' }],
                'body-md': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.018em', fontWeight: '400' }],
                'body-sm': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em', fontWeight: '400' }],
                'label-lg': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.006em', fontWeight: '500' }],
                'label-md': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.031em', fontWeight: '500' }],
                'label-sm': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.031em', fontWeight: '500' }]
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        }
    },
    plugins: []
};
