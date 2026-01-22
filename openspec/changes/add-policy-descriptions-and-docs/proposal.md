# Change: Add Policy Descriptions and Documentation Links

## Why
Policy results in the results page currently only show the policy name (e.g., "Credential Validation", "Age Verification") without any context about what the policy does or where to learn more. Users need descriptions and documentation links to understand what each policy checks and how it works.

## What Changes
- Create a policy definitions system that maps policy names to descriptions and documentation URLs
- Update the PolicyResults component to display policy descriptions and clickable documentation links
- Store all policy metadata (name, description, docs URL) in a centralized definitions file

## Impact
- Affected specs: `policy-display` (new capability)
- Affected code:
  - `src/components/stages/ResultStage/PolicyResults.tsx` - display policy descriptions and links
  - `src/config/policyDefinitions.ts` (new) - centralized policy metadata definitions
  - `src/types/app.ts` - may need PolicyDefinition interface
