# Change Proposal: Replace Attribute Badges with Icons

## Metadata
- **Change ID**: replace-attribute-badges-with-icons
- **Author**: AI Assistant
- **Created**: 2026-01-21
- **Status**: Draft

## Summary
Replace the current text-based badges ("Required" and "Always disclosed") in the credential request builder's attribute selector with icon-based indicators and add a legend below the attributes list to explain what each icon represents.

## Context
Currently, the `AttributeSelector` component displays:
- A "Required" badge (secondary variant) for attributes marked with `requiredForIssuance`
- An "Always disclosed" badge (outline variant) for attributes marked with `nonSelectivelyDisclosable`

These text badges take up horizontal space and can make the attribute list feel cluttered, especially on smaller screens or when many attributes are displayed.

## Motivation
1. **Visual density**: Icons are more compact than text badges, allowing better use of horizontal space
2. **Scalability**: Icon-based indicators scale better when displaying many attributes
3. **Modern UX**: Icon indicators with a legend is a common pattern in modern UIs
4. **Accessibility**: A legend provides clear explanations without requiring tooltip interactions

## Proposed Changes
1. Replace the "Required" text badge with an icon (recommended: `AlertCircle` or `Asterisk` from lucide-react)
2. Replace the "Always disclosed" text badge with an icon (recommended: `Lock` or `LockKeyhole` from lucide-react)
3. Add a legend component below the attributes list grid that shows each icon with its meaning
4. Ensure icons maintain proper color/styling to differentiate from regular UI elements

## Impact
- **User-facing**: Attribute selection UI becomes more compact; users need to reference legend initially
- **Developer**: Minor component updates to `AttributeSelector.tsx`
- **Breaking**: None (purely visual change)

## Alternatives Considered
1. **Tooltips instead of legend**: Rejected because it requires hover/focus interaction
2. **Keep badges, add icons**: Redundant and doesn't solve space concerns
3. **Icons only on mobile**: Inconsistent experience across breakpoints

## Success Criteria
- Icons are visually clear and appropriately sized
- Legend is visible and easy to understand
- No regression in accessibility (proper ARIA labels on icons)
- Responsive design maintains usability across screen sizes
