# Tasks: Replace Attribute Badges with Icons

## Implementation Tasks

### 1. Update AttributeSelector to use icon indicators
**Priority**: High  
**Dependencies**: None  
**Validation**: Visual inspection, type checking

- Remove `Badge` imports for attribute indicators
- Add `Asterisk` and `Lock` icon imports from lucide-react
- Replace "Required" badge with `Asterisk` icon component
- Replace "Always disclosed" badge with `Lock` icon component
- Apply appropriate colors: orange/amber for required, muted for always disclosed
- Add `aria-label` attributes to icons
- Set icon size to 16px (className: `size-4`)
- Ensure icons align properly with attribute names

### 2. Create AttributeLegend component
**Priority**: High  
**Dependencies**: Task 1 (uses same icons)  
**Validation**: Visual inspection, accessibility audit

- Create new `AttributeLegend.tsx` component in `src/components/stages/CreateStage/`
- Component accepts props: `showRequired: boolean`, `showAlwaysDisclosed: boolean`
- Render legend only when at least one prop is true
- Display asterisk icon + "Required for issuance" text when `showRequired` is true
- Display lock icon + "Always disclosed" text when `showAlwaysDisclosed` is true
- Use `text-xs` and `text-muted-foreground` for styling
- Implement responsive layout (horizontal on desktop, stacked on mobile if needed)
- Add visual separation from attributes list (border-top or spacing)

### 3. Integrate AttributeLegend into AttributeSelector
**Priority**: High  
**Dependencies**: Tasks 1, 2  
**Validation**: Type checking, visual inspection across different attribute configurations

- Import `AttributeLegend` component
- Calculate `hasRequiredAttrs` boolean from `formatDef.attributes`
- Calculate `hasAlwaysDisclosedAttrs` boolean from `formatDef.attributes`
- Render `AttributeLegend` below the attributes grid with calculated props
- Verify legend appears/disappears correctly based on attribute configurations
- Test with PID, MDL, and Photo ID credential types

### 4. Update mutual exclusivity logic
**Priority**: Medium  
**Dependencies**: Task 1  
**Validation**: Test with attributes that have both flags set

- Add logic to prioritize "Always disclosed" icon over "Required" icon
- Verify that when `nonSelectivelyDisclosable: true`, the "Required" icon is not shown even if `requiredForIssuance: true`
- Document this behavior in code comments

### 5. Accessibility review
**Priority**: High  
**Dependencies**: Tasks 1, 2, 3  
**Validation**: Screen reader testing, ARIA validation

- Verify all icons have proper `aria-label` attributes
- Test with screen reader to ensure legend is announced
- Verify keyboard navigation still works as expected
- Check color contrast for icon colors

### 6. Visual QA across screen sizes
**Priority**: Medium  
**Dependencies**: Tasks 1, 2, 3  
**Validation**: Manual testing at different viewports

- Test on mobile (< 640px width)
- Test on tablet (640px - 1024px width)
- Test on desktop (> 1024px width)
- Verify legend layout adapts appropriately
- Ensure icons don't cause layout shifts or wrapping issues

### 7. Documentation update (optional)
**Priority**: Low  
**Dependencies**: All implementation tasks  
**Validation**: Documentation review

- If user-facing documentation exists, update screenshots/descriptions
- Update inline code comments if attribute badge behavior has changed significantly

## Validation Checklist

After all tasks:
- [x] `bun run type-check` passes
- [x] `bun run lint` passes
- [x] Visual inspection: icons display correctly for all attribute types
- [x] Visual inspection: legend displays/hides correctly
- [x] Accessibility: screen reader announces icons and legend appropriately
- [x] Responsive: layout works on mobile, tablet, and desktop
- [x] Cross-browser: tested in Chrome, Firefox, Safari (if available)
