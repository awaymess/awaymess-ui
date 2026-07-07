import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

/**
 * Modern iOS / macOS & Lucide style Calendar Icon for DatePicker & DateTimePicker.
 * Designed with clean outline geometry, rounded corners, and zero visual clutter.
 */
export const ModernCalendarIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      fill: 'none',
      stroke: 'currentColor',
      ...props.sx,
    }}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2v4M8 2v4M3 10h18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

/**
 * Modern iOS / macOS & Lucide style Clock Icon for TimePicker & DateTimePicker.
 * Clean circular outline with crisp clock hands.
 */
export const ModernClockIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      fill: 'none',
      stroke: 'currentColor',
      ...props.sx,
    }}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M12 6v6l4 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);
