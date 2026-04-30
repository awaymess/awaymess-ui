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
        ? '0 18px 52px rgba(0, 0, 0, 0.54), 0 8px 20px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255,255,255,0.12)'
        : '0 18px 48px rgba(28, 32, 42, 0.14), 0 8px 18px rgba(28, 32, 42, 0.08), inset 0 1px 0 rgba(255,255,255,0.94)',
  },
}));

export const GlassCard: React.FC<GlassCardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};
