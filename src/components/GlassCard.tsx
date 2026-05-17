import React from 'react';
import { Card, CardProps, styled } from '@mui/material';

export interface GlassCardProps extends CardProps {
  // Add custom props here if needed
}

const StyledCard = styled(Card)(() => ({
  // The theme already has glass styles for Card defined in mui-theme.ts,
  // but we can add more specific customizations here.
  transition: 'border-color 0.2s ease-in-out',
}));

export const GlassCard: React.FC<GlassCardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};
