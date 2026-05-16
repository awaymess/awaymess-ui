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
        ? '0 17px 45px rgba(0, 0, 0, 0.56), 0 8px 40px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255,255,255,0.1)'
        : '0 17px 45px rgba(0, 0, 0, 0.2), 0 8px 40px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.38)',
  },
}));

export const GlassCard: React.FC<GlassCardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};
