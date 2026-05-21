import React from 'react';
import { Card, CardProps } from '@mui/material';

export interface GlassCardProps extends CardProps {}

export const GlassCard: React.FC<GlassCardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};
