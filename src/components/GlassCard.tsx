import React from 'react';
import { Card, CardProps, styled } from '@mui/material';

export interface GlassCardProps extends CardProps {
  // Add custom props here if needed
}

const StyledCard = styled(Card)(({ theme }) => ({
  // The theme already has glass styles for Card defined in mui-theme.ts, 
  // but we can add more specific customizations here.
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

export const GlassCard: React.FC<GlassCardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};
