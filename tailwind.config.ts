
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				navy: {
					light: '#112240',
					DEFAULT: '#0A192F',
					dark: '#020C1B',
				},
				tech: {
					DEFAULT: '#64FFDA',
					dark: '#5CCFB0',
				},
				slate: {
					DEFAULT: '#8892B0',
					light: '#CCD6F6',
					lightest: '#E6F1FF',
				}
			},
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'skill-bar-fill': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: 'var(--skill-percent)'
					}
				},
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' }
                },
                'tilt': {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(2deg)' },
                    '75%': { transform: 'rotate(-2deg)' }
                },
                'move-background': {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '100% 100%' }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                'shimmer': {
                    '0%': {
                        'background-position': '-500px 0'
                    },
                    '100%': {
                        'background-position': '500px 0'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'skill-bar-fill': 'skill-bar-fill 1s ease-out forwards',
                'float-slow': 'float-slow 6s ease-in-out infinite',
                'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
                'tilt': 'tilt 10s ease-in-out infinite',
                'move-background': 'move-background 40s ease infinite',
                'gradient-x': 'gradient-x 3s ease infinite',
                'shimmer': 'shimmer 2s infinite linear'
			},
            backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain',
                '200%': '200%'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
