# Implementation Tasks

## 1. Configure Environment Variable
- [ ] 1.1 Add `VITE_MANAGED_AUTHORIZER_URL` to environment configuration
- [ ] 1.2 Create or update `.env.example` with the environment variable
- [ ] 1.3 Add utility function to read managed instance URL from environment

## 2. Update State Management
- [ ] 2.1 Add `instanceType` field to FlowState (`'managed' | 'own'`)
- [ ] 2.2 Add `setInstanceType` action to store
- [ ] 2.3 Update initialState to default to `'managed'`
- [ ] 2.4 Update persistence configuration to save `instanceType`
- [ ] 2.5 Update `setInstanceType` to automatically set URL when switching to managed

## 3. Update UI Component
- [ ] 3.1 Add RadioGroup component for instance type selection
- [ ] 3.2 Add "Vidos Managed instance" and "Own instance" radio options
- [ ] 3.3 Show URL input only when "Own instance" is selected
- [ ] 3.4 Add link to managed instance configuration documentation when "Vidos Managed instance" is selected
- [ ] 3.5 Update help text to explain managed vs. own instance
- [ ] 3.6 Update help text link to reference both options (configuration docs vs. setup guide)

## 4. Update Type Definitions
- [ ] 4.1 Add `InstanceType` type definition
- [ ] 4.2 Update relevant interfaces to include instance type

## 5. Testing & Validation
- [ ] 5.1 Verify managed instance is preselected on first load
- [ ] 5.2 Verify switching between managed and own instance works correctly
- [ ] 5.3 Verify URL input appears/disappears based on selection
- [ ] 5.4 Verify localStorage persistence works for both fields
- [ ] 5.5 Test complete authorization flow with managed instance
- [ ] 5.6 Verify environment variable is correctly read
- [ ] 5.7 Run type-check, lint, and build

## 6. Documentation
- [ ] 6.1 Create or identify documentation page describing managed instance configuration
- [ ] 6.2 Update README.md to mention managed instance option
- [ ] 6.3 Update GATEWAY_SETUP.md to clarify it's only needed for "Own instance"
- [ ] 6.4 Document `VITE_MANAGED_AUTHORIZER_URL` environment variable in README or setup docs
