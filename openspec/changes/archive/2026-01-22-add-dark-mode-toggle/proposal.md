# Change: Add Dark Mode Toggle

## Why
Users need to switch between light/dark themes based on preference or to reduce eye strain. System automatic detection provides seamless experience for users who already have OS-level theme preferences.

## What Changes
- Add theme toggle button to header
- Detect and respect system `prefers-color-scheme` preference
- Allow manual override (light/dark/system modes)
- Persist user preference in localStorage

## Impact
- Affected specs: New `theme-toggle` capability
- Affected code: `App.tsx` (header), new `useTheme` hook, new `ThemeToggle` component
