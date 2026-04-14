import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Switch,
  Stack,
  SelectChangeEvent,
} from '@mui/material';
import { GlassCard } from './GlassCard';

export const ExampleForm: React.FC = () => {
  const [role, setRole] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [terms, setTerms] = useState(false);

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Form submitted! Check console for values (if this was a real app).');
  };

  return (
    <GlassCard sx={{ p: 4, maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Registration
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Experience the Liquid Glass Design system applied to standard MUI form components.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            placeholder="Enter your name"
          />

          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
            placeholder="you@example.com"
          />

          <FormControl fullWidth variant="outlined">
            <InputLabel id="role-select-label">Select Role</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={role}
              label="Select Role"
              onChange={handleRoleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="designer">Designer</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1">Enable Notifications</Typography>
            <Switch
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              color="primary"
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                color="primary"
              />
            }
            label="I agree to the terms and conditions"
          />

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button variant="outlined" color="inherit" fullWidth>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!terms}
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </Box>
    </GlassCard>
  );
};
