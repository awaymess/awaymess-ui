import React from 'react';
import { CardContent, Typography, Avatar, Box, CardProps, styled, Card } from '@mui/material';

export interface UserCardProps extends CardProps {
  name: string;
  role?: string;
  avatarUrl?: string;
}

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  border: `2px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[2],
  marginBottom: theme.spacing(2),
}));

const UserCardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const UserCard: React.FC<UserCardProps> = ({ name, role, avatarUrl, sx, ...props }) => {
  return (
    <Card sx={{ maxWidth: 280, ...sx }} {...props}>
      <CardContent>
        <UserCardContainer>
          <StyledAvatar src={avatarUrl} alt={name} />
          <Typography variant="h6" component="div" gutterBottom>
            {name}
          </Typography>
          {role && (
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          )}
        </UserCardContainer>
      </CardContent>
    </Card>
  );
};
