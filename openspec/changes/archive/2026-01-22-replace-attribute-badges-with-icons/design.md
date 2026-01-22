# Design: Icon-Based Attribute Badges

## Overview
Replace text badges with compact icon indicators for attribute metadata (required for issuance, always disclosed) in the credential request builder's attribute selector.

## Visual Design

### Current State
```
[Checkbox] Attribute Name    [Badge: "Required"]
[Checkbox] Attribute Name    [Badge: "Always disclosed"]
```

### Proposed State
```
[Checkbox] Attribute Name    [Icon: *]
[Checkbox] Attribute Name    [Icon: 🔒]

Legend:
[Icon: *]  Required for issuance
[Icon: 🔒] Always disclosed
```

## Icon Selection

### Recommended Icons (from lucide-react)
1. **Required for Issuance**: `Asterisk`
   - Rationale: Universal symbol for required fields
   - Fallback: `AlertCircle` (if asterisk feels too generic)

2. **Always Disclosed**: `Lock` 
   - Rationale: Represents non-selectable/locked state
   - Fallback: `LockKeyhole` or `Eye` (if lock implies security rather than state)

### Icon Styling
- Size: 16px (matches typical icon size in UI)
- Color: 
  - Required: `text-orange-600` or `text-amber-600` (stands out, not error-red)
  - Always disclosed: `text-muted-foreground` (de-emphasized, informational)
- Alignment: Right side of attribute row, aligned with checkbox baseline

## Legend Component

### Placement
Below the attributes grid, above any action buttons

### Layout
```
┌─────────────────────────────────────┐
│ Attributes Grid                     │
│ [Checkbox] Attr 1  [*]             │
│ [Checkbox] Attr 2  [🔒]            │
└─────────────────────────────────────┘

Legend:
  [*]  Required for issuance
  [🔒] Always disclosed
```

### Styling
- Use muted text color (`text-muted-foreground`)
- Small font size (`text-xs`)
- Subtle visual separation from attributes list (e.g., border-top or margin-top)
- Compact horizontal layout on desktop, stacked on mobile if needed

## Accessibility Considerations
1. Icons must have `aria-label` attributes describing their meaning
2. Legend must be programmatically associated with the icons (not just visually)
3. Consider adding `title` attribute to icons for tooltip on hover
4. Icons should be decorative (`aria-hidden="true"`) if adjacent text provides context

## Responsive Behavior
- **Desktop/Tablet**: Legend displays horizontally (icons side-by-side)
- **Mobile**: Legend may stack if horizontal space is constrained
- Icon size remains consistent across breakpoints

## Implementation Notes
- Legend should only render icons that are currently visible in the attributes list
- If no attributes have either indicator, legend should not render
- Legend text should be clearly worded and concise
