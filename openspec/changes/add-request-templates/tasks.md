## 1. Types and Data Structures

- [ ] 1.1 Define `RequestTemplate` interface in `src/types/app.ts`
- [ ] 1.2 Define `TemplateCategory` type
- [ ] 1.3 Update config export schema types to include `customRequestTemplates`

## 2. Built-in Templates

- [ ] 2.1 Create `src/config/request-templates/` directory structure
- [ ] 2.2 Create `types.ts` with template type definitions
- [ ] 2.3 Create template definitions for Age Verification category (3 templates)
- [ ] 2.4 Create template definitions for Identity category (3 templates)
- [ ] 2.5 Create template definitions for Address category (2 templates)
- [ ] 2.6 Create template definitions for KYC category (3 templates)
- [ ] 2.7 Create template definitions for Driving category (3 templates)
- [ ] 2.8 Create template definitions for Flexible category (1 template)
- [ ] 2.9 Create `request-templates.ts` registry combining all built-in templates

## 3. State Management

- [ ] 3.1 Create `customTemplatesSlice.ts` for custom template CRUD operations
- [ ] 3.2 Add `customRequestTemplates` to persisted state fields
- [ ] 3.3 Add `selectedTemplateId` state field (not persisted)
- [ ] 3.4 Add selectors for templates (all templates = built-in + custom)
- [ ] 3.5 Add `applyTemplate` action that replaces credential requests/sets and sets selectedTemplateId
- [ ] 3.6 Clear `selectedTemplateId` when credential requests or sets are modified in Builder

## 4. Templates Tab UI

- [ ] 4.1 Create `TemplatesTab.tsx` component
- [ ] 4.2 Implement category grouping with headers
- [ ] 4.3 Create `TemplateCard.tsx` component with name, description, credential count badge
- [ ] 4.4 Implement "Use Template" button (apply + stay on tab + mark selected)
- [ ] 4.5 Implement "Load to Builder" button (apply + switch tab + mark selected)
- [ ] 4.6 Add Templates tab to CreateStage tab navigation (as default tab)
- [ ] 4.7 Implement selected template visual indicator (highlight/checkmark)
- [ ] 4.8 Add "Create Authorization" and "Preview" buttons to Templates tab
- [ ] 4.9 Disable action buttons when no template selected

## 5. Custom Template Management

- [ ] 5.1 Create "Save as Template" button and dialog
- [ ] 5.2 Add validation: name required (max 50 chars), description optional (max 200 chars), at least one credential request
- [ ] 5.3 Implement save template action (captures current requests + sets)
- [ ] 5.4 Create Custom Templates section in Templates tab with "Custom" badge
- [ ] 5.5 Implement delete template with confirmation dialog

## 6. Export/Import Integration

- [ ] 6.1 Update export schema version to "1.1"
- [ ] 6.2 Add `customRequestTemplates` to export payload
- [ ] 6.3 Update import to handle `customRequestTemplates` field
- [ ] 6.4 Add backward compatibility for schema "1.0" imports (missing templates = empty array)
- [ ] 6.5 Update Zod validation schema for config import

## 7. Template Validation

- [ ] 7.1 Add validation function to check template references valid credential cases
- [ ] 7.2 Add startup validation for built-in templates, log errors and exclude invalid
- [ ] 7.3 Show error toast when applying invalid custom/imported template

## 8. Testing and Polish

- [ ] 8.1 Run type-check, fix any type errors
- [ ] 8.2 Run lint, fix any lint errors
- [ ] 8.3 Manual testing: apply each built-in template, verify requests/sets correct
- [ ] 8.4 Manual testing: save/delete custom template, verify persistence
- [ ] 8.5 Manual testing: export with templates, import on fresh browser
- [ ] 8.6 Run format
