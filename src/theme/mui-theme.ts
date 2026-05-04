import { createTheme, ThemeOptions } from '@mui/material/styles'
import { createElement } from 'react'

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary']
    purple: Palette['primary']
    red: Palette['primary']
    orange: Palette['primary']
    green: Palette['primary']
    gray: Palette['primary']
  }
  interface PaletteOptions {
    blue?: PaletteOptions['primary']
    purple?: PaletteOptions['primary']
    red?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    green?: PaletteOptions['primary']
    gray?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blue: true
    purple: true
    red: true
    orange: true
    green: true
    gray: true
  }
}

// ─── Liquid Glass Design Tokens ──────────────────────────────────────────────

const glass = {
  light: {
    surface: 'rgba(255, 255, 255, 0.58)',
    surfaceStrong: 'rgba(255, 255, 255, 0.74)',
    surfaceSubtle: 'rgba(255, 255, 255, 0.28)',
    border: 'rgba(255, 255, 255, 0.72)',
    borderSubtle: 'rgba(255, 255, 255, 0.44)',
    shadow:
      '0 18px 44px rgba(31, 35, 45, 0.1), 0 4px 12px rgba(31, 35, 45, 0.06), inset 0 1px 0 rgba(255,255,255,0.86), inset 0 -1px 0 rgba(255,255,255,0.28)',
    shadowElevated:
      '0 28px 68px rgba(31, 35, 45, 0.16), 0 10px 24px rgba(31, 35, 45, 0.1), inset 0 1px 0 rgba(255,255,255,0.92), inset 0 -1px 0 rgba(255,255,255,0.32)',
    blur: 'blur(34px) saturate(180%) brightness(1.08)',
    tint: 'rgba(246, 248, 252, 0.44)',
  },
  dark: {
    surface: 'rgba(24, 26, 32, 0.54)',
    surfaceStrong: 'rgba(31, 33, 40, 0.72)',
    surfaceSubtle: 'rgba(255, 255, 255, 0.08)',
    border: 'rgba(255, 255, 255, 0.18)',
    borderSubtle: 'rgba(255, 255, 255, 0.1)',
    shadow:
      '0 20px 52px rgba(0, 0, 0, 0.52), 0 6px 18px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.05)',
    shadowElevated:
      '0 32px 76px rgba(0, 0, 0, 0.62), 0 12px 26px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(255,255,255,0.06)',
    blur: 'blur(34px) saturate(160%) brightness(0.9)',
    tint: 'rgba(15, 17, 22, 0.44)',
  },
} as const

const glassLayer = {
  light:
    'linear-gradient(180deg, rgba(255,255,255,0.76), rgba(255,255,255,0.34)), rgba(255,255,255,0.58)',
  lightStrong:
    'linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,0.5)), rgba(255,255,255,0.74)',
  dark:
    'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03)), rgba(24,26,32,0.54)',
  darkStrong:
    'linear-gradient(180deg, rgba(255,255,255,0.13), rgba(255,255,255,0.04)), rgba(31,33,40,0.72)',
} as const

// ─── Shared base theme options ────────────────────────────────────────────────

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#007AFF', // Apple system blue
      light: '#47A3FF',
      dark: '#0055CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5856D6', // Apple indigo/purple
      light: '#7B79E6',
      dark: '#3E3CAA',
      contrastText: '#FFFFFF',
    },
    blue: {
      main: '#007AFF',
      light: '#47A3FF',
      dark: '#0055CC',
      contrastText: '#FFFFFF',
    },
    purple: {
      main: '#5856D6',
      light: '#7B79E6',
      dark: '#3E3CAA',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF3B30', // Apple red
      light: '#FF7A73',
      dark: '#C9251B',
    },
    red: {
      main: '#FF3B30',
      light: '#FF7A73',
      dark: '#C9251B',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9500', // Apple orange
      light: '#FFB340',
      dark: '#C97200',
    },
    orange: {
      main: '#FF9500',
      light: '#FFB340',
      dark: '#C97200',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#34C759', // Apple green
      light: '#6FD98B',
      dark: '#248A3D',
    },
    green: {
      main: '#34C759',
      light: '#6FD98B',
      dark: '#248A3D',
      contrastText: '#FFFFFF',
    },
    gray: {
      main: '#8E8E93', // Apple gray
      light: '#AEAEB2',
      dark: '#636366',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F7FB',
      paper: glass.light.surface,
    },
    text: {
      primary: '#1C1C1E',
      secondary: '#6C6C70',
    },
    divider: 'rgba(60, 60, 67, 0.12)',
  },
  typography: {
    fontFamily:
      '"SF Pro Text", "SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.008em',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    // ── Button ──────────────────────────────────────────────────────────────
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
          boxShadow: 'none',
          letterSpacing: '-0.01em',
          transition: 'background-color 0.18s ease, border-color 0.18s ease, opacity 0.18s ease',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': { opacity: 0.92 },
          '&.MuiButton-iconOnly': {
            minWidth: 0,
            padding: '8px',
            lineHeight: 0,
            '& .MuiButton-startIcon, & .MuiButton-endIcon': {
              margin: 0,
            },
          },
        },
        contained: {
          backgroundColor: '#0A84FF',
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0))',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: '#007AFF',
            backgroundImage:
              'linear-gradient(180deg, rgba(255,255,255,0.24), rgba(255,255,255,0))',
            borderColor: 'rgba(0, 0, 0, 0.16)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -1px 0 rgba(0,0,0,0.14)',
          },
          '&.MuiButton-containedPrimary, &.MuiButton-colorPrimary, &.MuiButton-containedBlue, &.MuiButton-colorBlue': {
            backgroundColor: '#0A84FF',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#007AFF' },
          },
          '&.MuiButton-containedSecondary, &.MuiButton-colorSecondary, &.MuiButton-containedPurple, &.MuiButton-colorPurple': {
            backgroundColor: '#5856D6',
            color: '#FFFFFF',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.12)',
            '&:hover': {
              backgroundColor: '#4B49C7',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -1px 0 rgba(0,0,0,0.14)',
            },
          },
          '&.MuiButton-containedSuccess, &.MuiButton-colorSuccess, &.MuiButton-containedGreen, &.MuiButton-colorGreen': {
            backgroundColor: '#34C759',
            color: '#FFFFFF',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.12)',
            '&:hover': {
              backgroundColor: '#2FB34F',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -1px 0 rgba(0,0,0,0.14)',
            },
          },
          '&.MuiButton-containedError, &.MuiButton-colorError, &.MuiButton-containedRed, &.MuiButton-colorRed': {
            backgroundColor: '#FF3B30',
            color: '#FFFFFF',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.12)',
            '&:hover': {
              backgroundColor: '#E9342A',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -1px 0 rgba(0,0,0,0.14)',
            },
          },
          '&.MuiButton-containedWarning, &.MuiButton-colorWarning, &.MuiButton-containedOrange, &.MuiButton-colorOrange': {
            backgroundColor: '#FF9500',
            color: '#1C1C1E',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.36), inset 0 -1px 0 rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#E68600',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(0,0,0,0.12)',
            },
          },
          '&.MuiButton-containedGray, &.MuiButton-colorGray': {
            backgroundColor: '#8E8E93',
            color: '#FFFFFF',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.12)',
            '&:hover': {
              backgroundColor: '#7C7C82',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -1px 0 rgba(0,0,0,0.14)',
            },
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: 'rgba(60, 60, 67, 0.24)',
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          backgroundColor: 'rgba(255, 255, 255, 0.42)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.68)',
          '&:hover': {
            borderColor: 'rgba(60, 60, 67, 0.34)',
            backgroundColor: 'rgba(255, 255, 255, 0.56)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(60, 60, 67, 0.08)',
          },
        },
        sizeMedium: { height: 36.5 },
        sizeSmall: { height: 32 },
      },
    },

    // ── Card ────────────────────────────────────────────────────────────────
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: 18,
          background: glassLayer.light,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: `1px solid ${glass.light.border}`,
          boxShadow: glass.light.shadow,
          backgroundClip: 'padding-box',
        },
      },
    },

    // ── Paper ───────────────────────────────────────────────────────────────
    MuiPaper: {
      styleOverrides: {
        root: {
          background: glassLayer.light,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: `1px solid ${glass.light.border}`,
          backgroundClip: 'padding-box',
        },
        elevation0: { boxShadow: 'none' },
        elevation1: { boxShadow: glass.light.shadow },
        elevation2: { boxShadow: glass.light.shadowElevated },
      },
    },

    // ── Chip ────────────────────────────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
          fontSize: '0.75rem',
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
          '&.MuiChip-clickable.MuiChip-filled:hover': {
            backgroundColor: 'rgba(142, 142, 147, 0.22)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorPrimary:hover, &.MuiChip-clickable.MuiChip-filledPrimary:hover': {
            backgroundColor: 'rgba(0, 122, 255, 0.18)',
            color: '#005CC8',
            borderColor: 'rgba(0, 122, 255, 0.32)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorSuccess:hover, &.MuiChip-clickable.MuiChip-filledSuccess:hover': {
            backgroundColor: 'rgba(52, 199, 89, 0.22)',
            color: '#1A7A35',
            borderColor: 'rgba(52, 199, 89, 0.34)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorWarning:hover, &.MuiChip-clickable.MuiChip-filledWarning:hover': {
            backgroundColor: 'rgba(255, 149, 0, 0.2)',
            color: '#8A5000',
            borderColor: 'rgba(255, 149, 0, 0.34)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorError:hover, &.MuiChip-clickable.MuiChip-filledError:hover': {
            backgroundColor: 'rgba(255, 59, 48, 0.2)',
            color: '#A0190F',
            borderColor: 'rgba(255, 59, 48, 0.32)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorSecondary:hover, &.MuiChip-clickable.MuiChip-filledSecondary:hover': {
            backgroundColor: 'rgba(88, 86, 214, 0.2)',
            color: '#3E3CAA',
            borderColor: 'rgba(88, 86, 214, 0.34)',
          },
        },
        filled: {
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.48), rgba(255,255,255,0.22)), rgba(142, 142, 147, 0.14)',
          border: '1px solid rgba(255,255,255,0.58)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.76), 0 2px 6px rgba(31,35,45,0.05)',
        },
        colorSuccess: {
          backgroundColor: 'rgba(52, 199, 89, 0.15)',
          color: '#1A7A35',
          border: '1px solid rgba(52, 199, 89, 0.25)',
        },
        colorWarning: {
          backgroundColor: 'rgba(255, 149, 0, 0.12)',
          color: '#8A5000',
          border: '1px solid rgba(255, 149, 0, 0.25)',
        },
        colorError: {
          backgroundColor: 'rgba(255, 59, 48, 0.12)',
          color: '#A0190F',
          border: '1px solid rgba(255, 59, 48, 0.25)',
        },
        colorPrimary: {
          backgroundColor: 'rgba(0, 122, 255, 0.12)',
          color: '#005CC8',
          border: '1px solid rgba(0, 122, 255, 0.25)',
        },
      },
    },

    // ── TextField / OutlinedInput ────────────────────────────────────────────
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            background: 'rgba(255,255,255,0.46)',
            backdropFilter: 'blur(24px) saturate(170%)',
            WebkitBackdropFilter: 'blur(24px) saturate(170%)',
            transition: 'box-shadow 0.2s ease, background 0.2s ease',
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.48), inset 0 1px 0 rgba(255,255,255,0.74)',
            '& fieldset': {
              borderColor: 'rgba(60, 60, 67, 0.2)',
              borderWidth: 1,
              transition: 'border-color 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(60, 60, 67, 0.3)',
            },
            '&.Mui-focused': {
              background: 'rgba(255,255,255,0.68)',
              boxShadow:
                '0 0 0 3px rgba(10, 132, 255, 0.16), 0 0 0 1px rgba(255,255,255,0.68), inset 0 1px 0 rgba(255,255,255,0.86)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0A84FF',
              borderWidth: 1.5,
            },
          },
          '& input[type="date"]': {
            paddingTop: 10,
            paddingBottom: 10,
          },
          '& input[type="date"]::-webkit-calendar-picker-indicator': {
            opacity: 0.6,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: 'rgba(255,255,255,0.46)',
          backdropFilter: 'blur(24px) saturate(170%)',
          WebkitBackdropFilter: 'blur(24px) saturate(170%)',
          transition: 'box-shadow 0.2s ease, background 0.2s ease',
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.48), inset 0 1px 0 rgba(255,255,255,0.74)',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(60, 60, 67, 0.3)',
          },
          '&.Mui-focused': {
            background: 'rgba(255,255,255,0.68)',
            boxShadow:
              '0 0 0 3px rgba(10, 132, 255, 0.16), 0 0 0 1px rgba(255,255,255,0.68), inset 0 1px 0 rgba(255,255,255,0.86)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0A84FF',
            borderWidth: 1.5,
          },
        },
        notchedOutline: {
          borderColor: 'rgba(60, 60, 67, 0.2)',
          transition: 'border-color 0.2s ease',
        },
      },
    },

    MuiFilledInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
          backgroundColor: 'rgba(235, 238, 243, 0.58)',
          backdropFilter: 'blur(22px) saturate(160%)',
          WebkitBackdropFilter: 'blur(22px) saturate(160%)',
          boxShadow:
            '0 0 0 1px rgba(60,60,67,0.08), inset 0 1px 0 rgba(255,255,255,0.62)',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(229, 233, 239, 0.7)',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(255, 255, 255, 0.62)',
            boxShadow:
              '0 0 0 3px rgba(10, 132, 255, 0.16), 0 0 0 1px rgba(60,60,67,0.1), inset 0 1px 0 rgba(255,255,255,0.82)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(229, 231, 235, 0.5)',
          },
          '&:before, &:after': {
            display: 'none',
          },
        },
      },
    },

    // ── Select ───────────────────────────────────────────────────────────────
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            boxShadow: glass.light.shadowElevated,
          },
        },
      },
    },

    // ── Menu / Popover ───────────────────────────────────────────────────────
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          background: glassLayer.lightStrong,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: `1px solid ${glass.light.border}`,
          boxShadow: glass.light.shadowElevated,
          backgroundClip: 'padding-box',
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          marginInline: 6,
          transition: 'background 0.15s ease',
          '&:hover': {
            background: 'rgba(60, 60, 67, 0.08)',
          },
          '&.Mui-selected': {
            background: 'rgba(10, 132, 255, 0.14)',
            '&:hover': {
              background: 'rgba(10, 132, 255, 0.2)',
            },
          },
        },
      },
    },

    // ── Dialog ───────────────────────────────────────────────────────────────
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 22,
          background: glassLayer.lightStrong,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: `1px solid ${glass.light.border}`,
          boxShadow: glass.light.shadowElevated,
          backgroundClip: 'padding-box',
        },
      },
    },

    // ── Drawer ───────────────────────────────────────────────────────────────
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: glassLayer.lightStrong,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: `1px solid ${glass.light.borderSubtle}`,
          backgroundClip: 'padding-box',
        },
      },
    },

    // ── AppBar ───────────────────────────────────────────────────────────────
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.42)), rgba(248, 250, 253, 0.5)',
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          borderBottom: `1px solid rgba(255, 255, 255, 0.52)`,
          boxShadow: '0 1px 0 rgba(31,35,45,0.04), inset 0 -1px 0 rgba(255,255,255,0.28)',
          color: '#1C1C1E',
        },
      },
    },

    // ── Checkbox ─────────────────────────────────────────────────────────────
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        icon: createElement('span', { className: 'AwaymessCheckboxIcon' }),
        checkedIcon: createElement(
          'span',
          { className: 'AwaymessCheckboxIcon AwaymessCheckboxIcon-checked' },
          createElement('span', { className: 'AwaymessCheckboxTick' })
        ),
        indeterminateIcon: createElement(
          'span',
          { className: 'AwaymessCheckboxIcon AwaymessCheckboxIcon-checked' },
          createElement('span', { className: 'AwaymessCheckboxDash' })
        ),
      },
      styleOverrides: {
        root: {
          padding: 4,
          borderRadius: 8,
          transition: 'background 0.15s ease',
          '& .AwaymessCheckboxIcon': {
            width: 18,
            height: 18,
            borderRadius: 5,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(120, 120, 128, 0.34)',
            boxShadow:
              'inset 0 0 0 1.75px rgba(60, 60, 67, 0.24), inset 0 1px 0 rgba(255,255,255,0.35)',
            transition:
              'background-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease',
          },
          '& .AwaymessCheckboxIcon-checked': {
            backgroundColor: 'currentColor',
            boxShadow:
              '0 3px 8px color-mix(in srgb, currentColor 28%, transparent), 0 0 0 1px color-mix(in srgb, currentColor 36%, transparent), inset 0 1px 0 rgba(255,255,255,0.28)',
          },
          '& .AwaymessCheckboxTick': {
            width: 9,
            height: 5,
            borderLeft: '2.25px solid #FFFFFF',
            borderBottom: '2.25px solid #FFFFFF',
            borderRadius: 1,
            transform: 'translateY(-0.5px) rotate(-45deg)',
          },
          '& .AwaymessCheckboxDash': {
            width: 9,
            height: 2.25,
            borderRadius: 999,
            backgroundColor: '#FFFFFF',
          },
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, currentColor 10%, transparent)',
          },
          '&:active .AwaymessCheckboxIcon': {
            transform: 'scale(0.96)',
          },
          '&.Mui-disabled .AwaymessCheckboxIcon': {
            backgroundColor: 'rgba(120, 120, 128, 0.18)',
            boxShadow: 'inset 0 0 0 2px rgba(120, 120, 128, 0.22)',
          },
        },
      },
    },

    // ── Tabs ─────────────────────────────────────────────────────────────────
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 44,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.32), rgba(255,255,255,0.12)), rgba(120, 120, 128, 0.12)',
          backdropFilter: 'blur(20px) saturate(170%)',
          WebkitBackdropFilter: 'blur(20px) saturate(170%)',
          borderRadius: 14,
          padding: '4px',
          borderBottom: 0,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
          '&:before, &:after': {
            display: 'none',
          },
          '& .MuiTabs-flexContainer, & .MuiTabs-list': {
            position: 'relative',
            zIndex: 1,
          },
        },
        indicator: {
          height: '100%',
          borderRadius: 10,
          background: glassLayer.lightStrong,
          backdropFilter: 'blur(22px) saturate(170%)',
          WebkitBackdropFilter: 'blur(22px) saturate(170%)',
          boxShadow:
            '0 8px 18px rgba(31,35,45,0.08), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.35)',
          zIndex: 0,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 36,
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 10,
          paddingInline: 16,
          zIndex: 1,
          transition: 'color 0.2s ease',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#3A3A3C',
          },
          '&.Mui-selected': {
            fontWeight: 600,
            color: '#1C1C1E',
          },
        },
      },
    },

    // ── Stepper ───────────────────────────────────────────────────────────────
    MuiStepper: {
      styleOverrides: {
        root: { paddingBlock: 8 },
      },
    },

    MuiStepLabel: {
      styleOverrides: {
        label: { fontWeight: 600 },
      },
    },

    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: 'rgba(142, 142, 147, 0.3)',
          '&.Mui-active': {
            color: '#007AFF',
            filter: 'drop-shadow(0 2px 6px rgba(0, 122, 255, 0.4))',
          },
          '&.Mui-completed': { color: '#34C759' },
        },
        text: { fontWeight: 700, fill: '#FFFFFF' },
      },
    },

    MuiStepConnector: {
      styleOverrides: {
        root: {
          '& .MuiStepConnector-line': {
            borderColor: 'rgba(142, 142, 147, 0.25)',
            borderTopWidth: 2,
            borderRadius: 999,
          },
          '&.Mui-active .MuiStepConnector-line': { borderColor: '#007AFF' },
          '&.Mui-completed .MuiStepConnector-line': { borderColor: '#34C759' },
        },
      },
    },

    // ── Autocomplete ─────────────────────────────────────────────────────────
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          background: glassLayer.lightStrong,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: `1px solid ${glass.light.border}`,
          boxShadow: glass.light.shadowElevated,
          backgroundClip: 'padding-box',
        },
        option: {
          borderRadius: 10,
          marginInline: 6,
          marginBlock: 2,
          '&[aria-selected="true"]': {
            background: 'rgba(0, 122, 255, 0.12) !important',
          },
          '&.Mui-focused': {
            background: 'rgba(0, 122, 255, 0.08) !important',
          },
        },
      },
    },

    // ── Switch ────────────────────────────────────────────────────────────────
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 50,
          height: 28,
          padding: 0,
        },
        switchBase: {
          padding: 3,
          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&.Mui-checked': {
            transform: 'translateX(22px)',
            color: '#FFFFFF',
            '& + .MuiSwitch-track': {
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.26), rgba(255,255,255,0)), linear-gradient(135deg, #34D058, #30D158)',
              opacity: 1,
              borderColor: 'rgba(35, 170, 72, 0.36)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.08)',
            },
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 1,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.18)), rgba(120, 120, 128, 0.14)',
            borderColor: 'rgba(60, 60, 67, 0.1)',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.78), rgba(245,246,248,0.58))',
            borderColor: 'rgba(60, 60, 67, 0.08)',
          },
        },
        thumb: {
          width: 22,
          height: 22,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(244,244,246,0.9))',
          border: '1px solid rgba(60, 60, 67, 0.14)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.86)',
        },
        track: {
          borderRadius: 14,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.06)), rgba(120, 120, 128, 0.28)',
          opacity: 1,
          transition: 'background 0.25s ease, opacity 0.25s ease',
          border: '1px solid rgba(60, 60, 67, 0.16)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.42)',
        },
      },
    },

    // ── Table ─────────────────────────────────────────────────────────────────
    MuiTableCell: {
      styleOverrides: {
        head: {
          background: 'rgba(245, 248, 255, 0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          color: '#6C6C70',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          borderBottom: '1px solid rgba(60, 60, 67, 0.1)',
        },
        body: {
          fontSize: '0.875rem',
          color: '#1C1C1E',
          borderBottom: '1px solid rgba(60, 60, 67, 0.06)',
        },
      },
    },

    // ── Tooltip ───────────────────────────────────────────────────────────────
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 10,
          background:
            'linear-gradient(180deg, rgba(60,60,67,0.72), rgba(28,28,30,0.68)), rgba(28,28,30,0.74)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          fontSize: '0.75rem',
          fontWeight: 500,
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow:
            '0 10px 28px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.12)',
        },
      },
    },

    // ── Snackbar / Alert ──────────────────────────────────────────────────────
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: '1px solid rgba(255,255,255,0.56)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.72), 0 8px 24px rgba(31,35,45,0.06)',
          '&.MuiAlert-standardSuccess': {
            background: 'rgba(52, 199, 89, 0.12)',
            borderColor: 'rgba(52, 199, 89, 0.25)',
          },
          '&.MuiAlert-standardError': {
            background: 'rgba(255, 59, 48, 0.10)',
            borderColor: 'rgba(255, 59, 48, 0.22)',
          },
          '&.MuiAlert-standardWarning': {
            background: 'rgba(255, 149, 0, 0.10)',
            borderColor: 'rgba(255, 149, 0, 0.22)',
          },
          '&.MuiAlert-standardInfo': {
            background: 'rgba(0, 122, 255, 0.10)',
            borderColor: 'rgba(0, 122, 255, 0.22)',
          },
        },
      },
    },

    // ── LinearProgress ────────────────────────────────────────────────────────
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          background: 'rgba(0, 0, 0, 0.07)',
          height: 5,
        },
        bar: {
          borderRadius: 999,
          background: 'linear-gradient(90deg, #47A3FF, #007AFF)',
        },
      },
    },

    // ── Divider ───────────────────────────────────────────────────────────────
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(60, 60, 67, 0.1)',
        },
      },
    },
  },
}

// ─── Light Theme ─────────────────────────────────────────────────────────────

export const lightTheme = createTheme({
  ...themeOptions,
  palette: {
    mode: 'light',
    ...themeOptions.palette!,
  },
})

// ─── Dark Theme ──────────────────────────────────────────────────────────────

export const darkTheme = createTheme({
  ...themeOptions,
  palette: {
    mode: 'dark',
    ...themeOptions.palette!,
    background: {
      default: '#080A10',
      paper: glass.dark.surface,
    },
    text: {
      primary: '#F2F2F7',
      secondary: '#8E8E93',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  components: {
    ...themeOptions.components,

    // Dark-mode glass overrides
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: 18,
          background: glassLayer.dark,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: `1px solid ${glass.dark.border}`,
          boxShadow: glass.dark.shadow,
          backgroundClip: 'padding-box',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          background: glassLayer.dark,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: `1px solid ${glass.dark.border}`,
          backgroundClip: 'padding-box',
        },
        elevation0: { boxShadow: 'none' },
        elevation1: { boxShadow: glass.dark.shadow },
        elevation2: { boxShadow: glass.dark.shadowElevated },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            background: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(26px) saturate(150%)',
            WebkitBackdropFilter: 'blur(26px) saturate(150%)',
            transition: 'box-shadow 0.2s ease, background 0.2s ease',
            boxShadow:
              '0 0 0 1px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.22)',
              borderWidth: 1,
              transition: 'border-color 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.34)',
            },
            '&.Mui-focused': {
              background: 'rgba(255,255,255,0.12)',
              boxShadow:
                '0 0 0 3px rgba(10, 132, 255, 0.22), 0 0 0 1px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.16)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0A84FF',
              borderWidth: 1.5,
            },
            '& input': {
              color: '#F2F2F7',
            },
            '& input::placeholder': {
              color: 'rgba(235,235,245,0.4)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(235,235,245,0.55)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#0A84FF',
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(26px) saturate(150%)',
          WebkitBackdropFilter: 'blur(26px) saturate(150%)',
          transition: 'box-shadow 0.2s ease, background 0.2s ease',
          boxShadow:
            '0 0 0 1px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.34)',
          },
          '&.Mui-focused': {
            background: 'rgba(255,255,255,0.12)',
            boxShadow:
              '0 0 0 3px rgba(10, 132, 255, 0.22), 0 0 0 1px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.16)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0A84FF',
            borderWidth: 1.5,
          },
        },
        notchedOutline: {
          borderColor: 'rgba(255, 255, 255, 0.22)',
          transition: 'border-color 0.2s ease',
        },
      },
    },

    MuiFilledInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
          backgroundColor: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(24px) saturate(145%)',
          WebkitBackdropFilter: 'blur(24px) saturate(145%)',
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.16), inset 0 1px 0 rgba(255,255,255,0.1)',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.11)',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(255,255,255,0.13)',
            boxShadow:
              '0 0 0 3px rgba(10, 132, 255, 0.22), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.16)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(255,255,255,0.05)',
          },
          '&:before, &:after': {
            display: 'none',
          },
        },
        input: {
          color: '#F2F2F7',
          '&::placeholder': {
            color: 'rgba(235,235,245,0.4)',
          },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          background: glassLayer.darkStrong,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: `1px solid ${glass.dark.border}`,
          boxShadow: glass.dark.shadowElevated,
          backgroundClip: 'padding-box',
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 22,
          background: glassLayer.darkStrong,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: `1px solid ${glass.dark.border}`,
          boxShadow: glass.dark.shadowElevated,
          backgroundClip: 'padding-box',
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: glassLayer.darkStrong,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: `1px solid ${glass.dark.borderSubtle}`,
          backgroundClip: 'padding-box',
        },
      },
    },

    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03)), rgba(20, 22, 28, 0.56)',
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          borderBottom: `1px solid ${glass.dark.borderSubtle}`,
          boxShadow: '0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(255,255,255,0.04)',
          color: '#F2F2F7',
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          background: glassLayer.darkStrong,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: `1px solid ${glass.dark.border}`,
          boxShadow: glass.dark.shadowElevated,
          backgroundClip: 'padding-box',
        },
        option: {
          borderRadius: 10,
          marginInline: 6,
          marginBlock: 2,
          '&[aria-selected="true"]': {
            background: 'rgba(10, 132, 255, 0.22) !important',
          },
          '&.Mui-focused': {
            background: 'rgba(255, 255, 255, 0.1) !important',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
          boxShadow: 'none',
          letterSpacing: '-0.01em',
          transition: 'background-color 0.18s ease, border-color 0.18s ease, opacity 0.18s ease',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': { opacity: 0.92 },
          '&.MuiButton-iconOnly': {
            minWidth: 0,
            padding: '8px',
            lineHeight: 0,
            '& .MuiButton-startIcon, & .MuiButton-endIcon': {
              margin: 0,
            },
          },
        },
        contained: {
          backgroundColor: '#0A84FF',
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.24), rgba(255,255,255,0))',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: '#2994FF',
            backgroundImage:
              'linear-gradient(180deg, rgba(255,255,255,0.26), rgba(255,255,255,0))',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.22)',
          },
          '&.MuiButton-containedPrimary, &.MuiButton-colorPrimary, &.MuiButton-containedBlue, &.MuiButton-colorBlue': {
            backgroundColor: '#0A84FF',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#2994FF' },
          },
          '&.MuiButton-containedSecondary, &.MuiButton-colorSecondary, &.MuiButton-containedPurple, &.MuiButton-colorPurple': {
            backgroundColor: '#5856D6',
            color: '#FFFFFF',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#6866E8',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.22)',
            },
          },
          '&.MuiButton-containedSuccess, &.MuiButton-colorSuccess, &.MuiButton-containedGreen, &.MuiButton-colorGreen': {
            backgroundColor: '#34C759',
            color: '#FFFFFF',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#42D967',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.22)',
            },
          },
          '&.MuiButton-containedError, &.MuiButton-colorError, &.MuiButton-containedRed, &.MuiButton-colorRed': {
            backgroundColor: '#FF3B30',
            color: '#FFFFFF',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#FF5148',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.22)',
            },
          },
          '&.MuiButton-containedWarning, &.MuiButton-colorWarning, &.MuiButton-containedOrange, &.MuiButton-colorOrange': {
            backgroundColor: '#FF9500',
            color: '#1C1C1E',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.18)',
            '&:hover': {
              backgroundColor: '#FFA51F',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.36), inset 0 -1px 0 rgba(0,0,0,0.2)',
            },
          },
          '&.MuiButton-containedGray, &.MuiButton-colorGray': {
            backgroundColor: '#8E8E93',
            color: '#FFFFFF',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#AEAEB2',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.22)',
            },
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.24)',
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.16)',
          '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.34)',
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22)',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
        },
        sizeMedium: { height: 36.5 },
        sizeSmall: { height: 32 },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 44,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04)), rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px) saturate(150%)',
          WebkitBackdropFilter: 'blur(20px) saturate(150%)',
          borderRadius: 14,
          padding: '4px',
          borderBottom: 0,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          '&:before, &:after': {
            display: 'none',
          },
          '& .MuiTabs-flexContainer, & .MuiTabs-list': {
            position: 'relative',
            zIndex: 1,
          },
        },
        indicator: {
          height: '100%',
          borderRadius: 10,
          background: glassLayer.darkStrong,
          backdropFilter: 'blur(22px) saturate(150%)',
          WebkitBackdropFilter: 'blur(22px) saturate(150%)',
          boxShadow:
            '0 10px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.04)',
          zIndex: 0,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          marginInline: 6,
          transition: 'background 0.15s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.08)',
          },
          '&.Mui-selected': {
            background: 'rgba(10, 132, 255, 0.24)',
            '&:hover': {
              background: 'rgba(10, 132, 255, 0.3)',
            },
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#E5E5EA',
          },
          '&.Mui-selected': {
            color: '#FFFFFF',
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          color: '#8E8E93',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        },
        body: {
          fontSize: '0.875rem',
          color: '#F2F2F7',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255, 255, 255, 0.09)',
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 10,
          background:
            'linear-gradient(180deg, rgba(76,76,84,0.58), rgba(36,38,45,0.68)), rgba(28,28,30,0.78)',
          backdropFilter: 'blur(24px) saturate(160%)',
          WebkitBackdropFilter: 'blur(24px) saturate(160%)',
          fontSize: '0.75rem',
          fontWeight: 500,
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow:
            '0 12px 30px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.1)',
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 12px 30px rgba(0,0,0,0.28)',
          '&.MuiAlert-standardSuccess': {
            background: 'rgba(52, 199, 89, 0.15)',
            borderColor: 'rgba(52, 199, 89, 0.3)',
          },
          '&.MuiAlert-standardError': {
            background: 'rgba(255, 59, 48, 0.15)',
            borderColor: 'rgba(255, 59, 48, 0.3)',
          },
          '&.MuiAlert-standardWarning': {
            background: 'rgba(255, 149, 0, 0.15)',
            borderColor: 'rgba(255, 149, 0, 0.3)',
          },
          '&.MuiAlert-standardInfo': {
            background: 'rgba(0, 122, 255, 0.15)',
            borderColor: 'rgba(0, 122, 255, 0.3)',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
          fontSize: '0.75rem',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          '&.MuiChip-clickable.MuiChip-filled:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorPrimary:hover, &.MuiChip-clickable.MuiChip-filledPrimary:hover': {
            backgroundColor: 'rgba(0, 122, 255, 0.28)',
            color: '#47A3FF',
            borderColor: 'rgba(0, 122, 255, 0.44)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorSuccess:hover, &.MuiChip-clickable.MuiChip-filledSuccess:hover': {
            backgroundColor: 'rgba(52, 199, 89, 0.28)',
            color: '#6FD98B',
            borderColor: 'rgba(52, 199, 89, 0.4)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorWarning:hover, &.MuiChip-clickable.MuiChip-filledWarning:hover': {
            backgroundColor: 'rgba(255, 149, 0, 0.26)',
            color: '#FFB340',
            borderColor: 'rgba(255, 149, 0, 0.4)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorError:hover, &.MuiChip-clickable.MuiChip-filledError:hover': {
            backgroundColor: 'rgba(255, 59, 48, 0.26)',
            color: '#FF7A73',
            borderColor: 'rgba(255, 59, 48, 0.4)',
          },
          '&.MuiChip-clickable.MuiChip-filled.MuiChip-colorSecondary:hover, &.MuiChip-clickable.MuiChip-filledSecondary:hover': {
            backgroundColor: 'rgba(88, 86, 214, 0.28)',
            color: '#7B79E6',
            borderColor: 'rgba(88, 86, 214, 0.42)',
          },
        },
        filled: {
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04)), rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 8px rgba(0,0,0,0.16)',
        },
        colorSuccess: {
          backgroundColor: 'rgba(52, 199, 89, 0.2)',
          color: '#6FD98B',
          border: '1px solid rgba(52, 199, 89, 0.3)',
        },
        colorWarning: {
          backgroundColor: 'rgba(255, 149, 0, 0.18)',
          color: '#FFB340',
          border: '1px solid rgba(255, 149, 0, 0.3)',
        },
        colorError: {
          backgroundColor: 'rgba(255, 59, 48, 0.18)',
          color: '#FF7A73',
          border: '1px solid rgba(255, 59, 48, 0.3)',
        },
        colorPrimary: {
          backgroundColor: 'rgba(0, 122, 255, 0.2)',
          color: '#47A3FF',
          border: '1px solid rgba(0, 122, 255, 0.35)',
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 50,
          height: 28,
          padding: 0,
        },
        switchBase: {
          padding: 3,
          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&.Mui-checked': {
            transform: 'translateX(22px)',
            color: '#FFFFFF',
            '& + .MuiSwitch-track': {
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.24), rgba(255,255,255,0)), linear-gradient(135deg, #34D058, #30D158)',
              opacity: 1,
              borderColor: 'rgba(52, 199, 89, 0.36)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.18)',
            },
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 1,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)), rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.38), rgba(220,222,228,0.26))',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
        thumb: {
          width: 22,
          height: 22,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.94), rgba(231,232,237,0.9))',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.58)',
        },
        track: {
          borderRadius: 14,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03)), rgba(255, 255, 255, 0.14)',
          opacity: 1,
          transition: 'background 0.25s ease, opacity 0.25s ease',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          background: 'rgba(255,255,255,0.1)',
          height: 5,
        },
        bar: {
          borderRadius: 999,
          background: 'linear-gradient(90deg, #47A3FF, #007AFF)',
        },
      },
    },
  },
})
