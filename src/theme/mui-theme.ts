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
    surface: 'rgba(255, 255, 255, 0.74)',
    surfaceStrong: 'rgba(255, 255, 255, 0.9)',
    surfaceSubtle: 'rgba(255, 255, 255, 0.42)',
    border: 'rgba(255, 255, 255, 0.68)',
    borderSubtle: 'rgba(210, 214, 224, 0.66)',
    shadow:
      '0 8px 24px rgba(28, 32, 42, 0.09), 0 2px 6px rgba(28, 32, 42, 0.05), inset 0 1px 0 rgba(255,255,255,0.92)',
    shadowElevated:
      '0 18px 48px rgba(28, 32, 42, 0.14), 0 8px 18px rgba(28, 32, 42, 0.08), inset 0 1px 0 rgba(255,255,255,0.94)',
    blur: 'blur(24px) saturate(120%) brightness(1.02)',
    tint: 'rgba(244, 245, 248, 0.62)',
  },
  dark: {
    surface: 'rgba(34, 35, 40, 0.74)',
    surfaceStrong: 'rgba(40, 41, 46, 0.9)',
    surfaceSubtle: 'rgba(255, 255, 255, 0.07)',
    border: 'rgba(255, 255, 255, 0.16)',
    borderSubtle: 'rgba(255, 255, 255, 0.11)',
    shadow:
      '0 8px 28px rgba(0, 0, 0, 0.42), 0 2px 8px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255,255,255,0.1)',
    shadowElevated:
      '0 18px 52px rgba(0, 0, 0, 0.54), 0 8px 20px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255,255,255,0.12)',
    blur: 'blur(24px) saturate(112%) brightness(0.94)',
    tint: 'rgba(24, 25, 30, 0.52)',
  },
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
      default: '#EEF2F8',
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
          transition: 'background-color 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease',
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
          backgroundImage: 'none',
          boxShadow: '0 4px 12px rgba(10, 132, 255, 0.24)',
          '&:hover': {
            backgroundColor: '#007AFF',
            backgroundImage: 'none',
            boxShadow: '0 6px 16px rgba(10, 132, 255, 0.32)',
          },
          '&.MuiButton-containedPrimary, &.MuiButton-colorPrimary, &.MuiButton-containedBlue, &.MuiButton-colorBlue': {
            backgroundColor: '#0A84FF',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#007AFF' },
          },
          '&.MuiButton-containedSecondary, &.MuiButton-colorSecondary, &.MuiButton-containedPurple, &.MuiButton-colorPurple': {
            backgroundColor: '#5856D6',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(88, 86, 214, 0.24)',
            '&:hover': {
              backgroundColor: '#4B49C7',
              boxShadow: '0 6px 16px rgba(88, 86, 214, 0.32)',
            },
          },
          '&.MuiButton-containedSuccess, &.MuiButton-colorSuccess, &.MuiButton-containedGreen, &.MuiButton-colorGreen': {
            backgroundColor: '#34C759',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(52, 199, 89, 0.24)',
            '&:hover': {
              backgroundColor: '#2FB34F',
              boxShadow: '0 6px 16px rgba(52, 199, 89, 0.32)',
            },
          },
          '&.MuiButton-containedError, &.MuiButton-colorError, &.MuiButton-containedRed, &.MuiButton-colorRed': {
            backgroundColor: '#FF3B30',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(255, 59, 48, 0.24)',
            '&:hover': {
              backgroundColor: '#E9342A',
              boxShadow: '0 6px 16px rgba(255, 59, 48, 0.32)',
            },
          },
          '&.MuiButton-containedWarning, &.MuiButton-colorWarning, &.MuiButton-containedOrange, &.MuiButton-colorOrange': {
            backgroundColor: '#FF9500',
            color: '#1C1C1E',
            boxShadow: '0 4px 12px rgba(255, 149, 0, 0.24)',
            '&:hover': {
              backgroundColor: '#E68600',
              boxShadow: '0 6px 16px rgba(255, 149, 0, 0.32)',
            },
          },
          '&.MuiButton-containedGray, &.MuiButton-colorGray': {
            backgroundColor: '#8E8E93',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(142, 142, 147, 0.24)',
            '&:hover': {
              backgroundColor: '#7C7C82',
              boxShadow: '0 6px 16px rgba(142, 142, 147, 0.32)',
            },
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: 'rgba(60, 60, 67, 0.2)',
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          backgroundColor: 'rgba(255, 255, 255, 0.34)',
          '&:hover': {
            borderColor: 'rgba(60, 60, 67, 0.28)',
            backgroundColor: 'rgba(255, 255, 255, 0.46)',
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
          background: glass.light.surface,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: `1px solid ${glass.light.border}`,
          boxShadow: glass.light.shadow,
          backgroundImage: 'none',
        },
      },
    },

    // ── Paper ───────────────────────────────────────────────────────────────
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: glass.light.surface,
          backdropFilter: glass.light.blur,
          WebkitBackdropFilter: glass.light.blur,
          border: `1px solid ${glass.light.border}`,
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
          backdropFilter: 'blur(12px) saturate(160%)',
          WebkitBackdropFilter: 'blur(12px) saturate(160%)',
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
          background: 'rgba(142, 142, 147, 0.15)',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
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
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(16px) saturate(145%)',
            WebkitBackdropFilter: 'blur(16px) saturate(145%)',
            transition: 'box-shadow 0.2s ease, background 0.2s ease',
            '& fieldset': {
              borderColor: 'rgba(60, 60, 67, 0.2)',
              borderWidth: 1,
              transition: 'border-color 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(60, 60, 67, 0.3)',
            },
            '&.Mui-focused': {
              background: 'rgba(255,255,255,0.75)',
              boxShadow: '0 0 0 3px rgba(10, 132, 255, 0.16)',
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
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(16px) saturate(145%)',
          WebkitBackdropFilter: 'blur(16px) saturate(145%)',
          transition: 'box-shadow 0.2s ease, background 0.2s ease',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(60, 60, 67, 0.3)',
          },
          '&.Mui-focused': {
            background: 'rgba(255,255,255,0.75)',
            boxShadow: '0 0 0 3px rgba(10, 132, 255, 0.16)',
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
          backgroundColor: 'rgba(229, 231, 235, 0.82)',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(221, 224, 229, 0.95)',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(255, 255, 255, 0.82)',
            boxShadow: '0 0 0 3px rgba(10, 132, 255, 0.16)',
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
          background: glass.light.surfaceStrong,
          backdropFilter: 'blur(28px) saturate(122%)',
          WebkitBackdropFilter: 'blur(28px) saturate(122%)',
          border: `1px solid ${glass.light.border}`,
          boxShadow: glass.light.shadowElevated,
          backgroundImage: 'none',
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
          background: glass.light.surfaceStrong,
          backdropFilter: 'blur(34px) saturate(145%)',
          WebkitBackdropFilter: 'blur(34px) saturate(145%)',
          border: `1px solid ${glass.light.border}`,
          boxShadow: glass.light.shadowElevated,
          backgroundImage: 'none',
        },
      },
    },

    // ── Drawer ───────────────────────────────────────────────────────────────
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: glass.light.surfaceStrong,
          backdropFilter: 'blur(28px) saturate(145%)',
          WebkitBackdropFilter: 'blur(28px) saturate(145%)',
          border: `1px solid ${glass.light.borderSubtle}`,
          backgroundImage: 'none',
        },
      },
    },

    // ── AppBar ───────────────────────────────────────────────────────────────
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background: 'rgba(248, 248, 250, 0.72)',
          backdropFilter: 'blur(24px) saturate(140%) brightness(1.02)',
          WebkitBackdropFilter: 'blur(24px) saturate(140%) brightness(1.02)',
          borderBottom: `1px solid rgba(60, 60, 67, 0.12)`,
          boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
          color: '#1C1C1E',
          backgroundImage: 'none',
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
              '0 3px 8px rgba(0, 122, 255, 0.22), inset 0 1px 0 rgba(255,255,255,0.28)',
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
            backgroundColor: 'rgba(0, 122, 255, 0.08)',
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
          background: 'rgba(120, 120, 128, 0.16)',
          borderRadius: 14,
          padding: '4px',
          borderBottom: 0,
          boxShadow: 'none',
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
          background: glass.light.surfaceStrong,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.85)',
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
          background: glass.light.surfaceStrong,
          backdropFilter: 'blur(32px) saturate(200%)',
          WebkitBackdropFilter: 'blur(32px) saturate(200%)',
          border: `1px solid ${glass.light.border}`,
          boxShadow: glass.light.shadowElevated,
          backgroundImage: 'none',
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
              background: 'linear-gradient(135deg, #34D058, #34C759)',
              opacity: 1,
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.15)',
            },
          },
        },
        thumb: {
          width: 22,
          height: 22,
          boxShadow:
            '0 2px 6px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)',
        },
        track: {
          borderRadius: 14,
          background: 'rgba(120, 120, 128, 0.32)',
          opacity: 1,
          transition: 'background 0.25s ease, opacity 0.25s ease',
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
          background: 'rgba(28, 28, 30, 0.82)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          fontSize: '0.75rem',
          fontWeight: 500,
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        },
      },
    },

    // ── Snackbar / Alert ──────────────────────────────────────────────────────
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.4)',
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
      default: '#0E111B',
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
          background: glass.dark.surface,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: `1px solid ${glass.dark.border}`,
          boxShadow: glass.dark.shadow,
          backgroundImage: 'none',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: glass.dark.surface,
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          border: `1px solid ${glass.dark.border}`,
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
            backdropFilter: 'blur(16px) saturate(130%)',
            WebkitBackdropFilter: 'blur(16px) saturate(130%)',
            transition: 'box-shadow 0.2s ease, background 0.2s ease',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.14)',
              borderWidth: 1,
              transition: 'border-color 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.26)',
            },
            '&.Mui-focused': {
              background: 'rgba(255,255,255,0.10)',
              boxShadow: '0 0 0 3px rgba(10, 132, 255, 0.22)',
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
          backdropFilter: 'blur(16px) saturate(130%)',
          WebkitBackdropFilter: 'blur(16px) saturate(130%)',
          transition: 'box-shadow 0.2s ease, background 0.2s ease',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.26)',
          },
          '&.Mui-focused': {
            background: 'rgba(255,255,255,0.10)',
            boxShadow: '0 0 0 3px rgba(10, 132, 255, 0.22)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0A84FF',
            borderWidth: 1.5,
          },
        },
        notchedOutline: {
          borderColor: 'rgba(255, 255, 255, 0.14)',
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
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.11)',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(255,255,255,0.13)',
            boxShadow: '0 0 0 3px rgba(10, 132, 255, 0.22)',
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
          background: glass.dark.surfaceStrong,
          backdropFilter: 'blur(28px) saturate(112%)',
          WebkitBackdropFilter: 'blur(28px) saturate(112%)',
          border: `1px solid ${glass.dark.border}`,
          boxShadow: glass.dark.shadowElevated,
          backgroundImage: 'none',
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 22,
          background: glass.dark.surfaceStrong,
          backdropFilter: 'blur(34px) saturate(130%)',
          WebkitBackdropFilter: 'blur(34px) saturate(130%)',
          border: `1px solid ${glass.dark.border}`,
          boxShadow: glass.dark.shadowElevated,
          backgroundImage: 'none',
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: glass.dark.surfaceStrong,
          backdropFilter: 'blur(28px) saturate(130%)',
          WebkitBackdropFilter: 'blur(28px) saturate(130%)',
          border: `1px solid ${glass.dark.borderSubtle}`,
          backgroundImage: 'none',
        },
      },
    },

    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background: 'rgba(28, 28, 30, 0.68)',
          backdropFilter: 'blur(24px) saturate(112%) brightness(0.94)',
          WebkitBackdropFilter: 'blur(24px) saturate(112%) brightness(0.94)',
          borderBottom: `1px solid ${glass.dark.borderSubtle}`,
          boxShadow: '0 1px 0 rgba(255,255,255,0.04)',
          color: '#F2F2F7',
          backgroundImage: 'none',
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          background: glass.dark.surfaceStrong,
          backdropFilter: 'blur(28px) saturate(112%)',
          WebkitBackdropFilter: 'blur(28px) saturate(112%)',
          border: `1px solid ${glass.dark.border}`,
          boxShadow: glass.dark.shadowElevated,
          backgroundImage: 'none',
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
          transition: 'background-color 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease',
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
          backgroundImage: 'none',
          boxShadow: '0 4px 14px rgba(10, 132, 255, 0.36)',
          '&:hover': {
            backgroundColor: '#2994FF',
            backgroundImage: 'none',
            boxShadow: '0 6px 18px rgba(10, 132, 255, 0.44)',
          },
          '&.MuiButton-containedPrimary, &.MuiButton-colorPrimary, &.MuiButton-containedBlue, &.MuiButton-colorBlue': {
            backgroundColor: '#0A84FF',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#2994FF' },
          },
          '&.MuiButton-containedSecondary, &.MuiButton-colorSecondary, &.MuiButton-containedPurple, &.MuiButton-colorPurple': {
            backgroundColor: '#5856D6',
            color: '#FFFFFF',
            boxShadow: '0 4px 14px rgba(88, 86, 214, 0.36)',
            '&:hover': {
              backgroundColor: '#6866E8',
              boxShadow: '0 6px 18px rgba(88, 86, 214, 0.44)',
            },
          },
          '&.MuiButton-containedSuccess, &.MuiButton-colorSuccess, &.MuiButton-containedGreen, &.MuiButton-colorGreen': {
            backgroundColor: '#34C759',
            color: '#FFFFFF',
            boxShadow: '0 4px 14px rgba(52, 199, 89, 0.34)',
            '&:hover': {
              backgroundColor: '#42D967',
              boxShadow: '0 6px 18px rgba(52, 199, 89, 0.42)',
            },
          },
          '&.MuiButton-containedError, &.MuiButton-colorError, &.MuiButton-containedRed, &.MuiButton-colorRed': {
            backgroundColor: '#FF3B30',
            color: '#FFFFFF',
            boxShadow: '0 4px 14px rgba(255, 59, 48, 0.34)',
            '&:hover': {
              backgroundColor: '#FF5148',
              boxShadow: '0 6px 18px rgba(255, 59, 48, 0.42)',
            },
          },
          '&.MuiButton-containedWarning, &.MuiButton-colorWarning, &.MuiButton-containedOrange, &.MuiButton-colorOrange': {
            backgroundColor: '#FF9500',
            color: '#1C1C1E',
            boxShadow: '0 4px 14px rgba(255, 149, 0, 0.34)',
            '&:hover': {
              backgroundColor: '#FFA51F',
              boxShadow: '0 6px 18px rgba(255, 149, 0, 0.42)',
            },
          },
          '&.MuiButton-containedGray, &.MuiButton-colorGray': {
            backgroundColor: '#8E8E93',
            color: '#FFFFFF',
            boxShadow: '0 4px 14px rgba(142, 142, 147, 0.34)',
            '&:hover': {
              backgroundColor: '#AEAEB2',
              boxShadow: '0 6px 18px rgba(142, 142, 147, 0.42)',
            },
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.18)',
          backdropFilter: glass.dark.blur,
          WebkitBackdropFilter: glass.dark.blur,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.26)',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
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
          background: 'rgba(255, 255, 255, 0.14)',
          borderRadius: 14,
          padding: '4px',
          borderBottom: 0,
          boxShadow: 'none',
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
          background: glass.dark.surfaceStrong,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
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
          background: 'rgba(44, 44, 46, 0.88)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          fontSize: '0.75rem',
          fontWeight: 500,
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.45)',
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.1)',
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
          backdropFilter: 'blur(12px) saturate(160%)',
          WebkitBackdropFilter: 'blur(12px) saturate(160%)',
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
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
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
              background: 'linear-gradient(135deg, #34D058, #34C759)',
              opacity: 1,
            },
          },
        },
        thumb: {
          width: 22,
          height: 22,
          boxShadow:
            '0 2px 6px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
        },
        track: {
          borderRadius: 14,
          background: 'rgba(255, 255, 255, 0.18)',
          opacity: 1,
          transition: 'background 0.25s ease, opacity 0.25s ease',
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
