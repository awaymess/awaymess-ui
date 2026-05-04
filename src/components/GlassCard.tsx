import React from 'react';
import { Card, CardProps, styled } from '@mui/material';

export interface GlassCardProps extends CardProps {
  // Add custom props here if needed
}

const StyledCard = styled(Card)(({ theme }) => ({
  // The theme already has glass styles for Card defined in mui-theme.ts,
  // but we can add more specific customizations here.
  transition: 'box-shadow 0.2s ease-in-out',
  '&:hover': {
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 32px 76px rgba(0, 0, 0, 0.62), 0 12px 26px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(255,255,255,0.06)'
        : '0 28px 68px rgba(31, 35, 45, 0.16), 0 10px 24px rgba(31, 35, 45, 0.1), inset 0 1px 0 rgba(255,255,255,0.92), inset 0 -1px 0 rgba(255,255,255,0.32)',
  },
}));

export const GlassCard: React.FC<GlassCardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};
