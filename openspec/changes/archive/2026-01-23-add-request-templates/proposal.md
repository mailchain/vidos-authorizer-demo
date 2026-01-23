# Change: Add Request Templates

## Why

Users currently must manually build credential requests from scratch using the builder or JSON editor. This is tedious for common verification scenarios. Pre-built request templates allow users to quickly start with complete, real-world verification configurations and optionally customize them.

## What Changes

- New "Templates" tab in Create Stage alongside Builder and JSON tabs
- ~15 built-in templates organized by use case domain (Age Verification, Identity, Address, KYC, Driving, Flexible)
- Templates pre-fill credential requests + credential sets with all required attributes
- Users can select template and proceed directly to authorization, or load into builder for customization
- Custom templates: users can save their own templates from current builder state
- Templates included in existing config export/import (extends current schema)

## Impact

- New spec: `request-templates`
- Modified spec: `config-export-import` (extend schema to include templates)
- Affected code:
  - `src/components/stages/CreateStage/` - new TemplatesTab component
  - `src/config/` - new request-templates definitions
  - `src/stores/appStore/` - custom templates slice, template application logic
  - `src/types/` - template types
  - Export/import utilities - extend to handle templates
