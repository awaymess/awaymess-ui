# @nighttt/ui

Custom MUI UI Component Library with Liquid Glass Design.

## Installation

```bash
npm install @nighttt/ui @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## Usage

### 1. Wrap your application with `LibThemeProvider`

For the library to automatically apply the Glass Design to all components, wrap your app with the provider at the root level.

```tsx
import { LibThemeProvider } from '@nighttt/ui';

function App() {
  return (
    <LibThemeProvider mode="light"> {/* or "dark" */}
      {/* Your app components */}
    </LibThemeProvider>
  );
}
```

### 2. Using Built-in MUI Components

All standard MUI components exported by this library have been restyled automatically. You don't need to do any extra work!

```tsx
import { Button, TextField, Stack } from '@nighttt/ui';

function MyForm() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 300 }}>
      <TextField label="Username" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </Stack>
  );
}
```

### 3. Using Custom Components

We also provide ready-made complex components that utilize the glass theme out of the box.

#### `UserCard`

```tsx
import { UserCard } from '@nighttt/ui';

function Profile() {
  return (
    <UserCard 
      name="Night Developer" 
      role="Senior Software Engineer" 
      avatarUrl="https://example.com/avatar.jpg" 
    />
  );
}
```

#### `ExampleForm`

A complex form that showcases multiple restyled MUI components (Inputs, Selects, Checkboxes, Switches, Buttons) working together.

```tsx
import { ExampleForm } from '@nighttt/ui';

function RegistrationPage() {
  return <ExampleForm />;
}
```

## Themes

The library provides both `lightTheme` and `darkTheme` based on the Liquid Glass Design system. You can switch between them using the `mode` prop on `LibThemeProvider`.

## Publishing to npm

1. Change the name in `package.json` to your desired npm package name.
2. Build the library: `npm run build`
3. Publish: `npm publish --access public`
