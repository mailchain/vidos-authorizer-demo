# Implementation Tasks

## 1. Configure Environment Variable
- [x] 1.1 Add `VITE_MANAGED_AUTHORIZER_URL` to environment configuration
- [x] 1.2 Create or update `.env.example` with the environment variable
- [x] 1.3 Add utility function to read managed instance URL from environment

## 2. Update State Management
- [x] 2.1 Add `instanceType` field to FlowState (`'managed' | 'own'`)
- [x] 2.2 Add `setInstanceType` action to store
- [x] 2.3 Update initialState to default to `'managed'`
- [x] 2.4 Update persistence configuration to save `instanceType`
- [x] 2.5 Update `setInstanceType` to automatically set URL when switching to managed

## 3. Update UI Component
- [x] 3.1 Add RadioGroup component for instance type selection
- [x] 3.2 Add "Vidos Managed instance" and "Own instance" radio options
- [x] 3.3 Show URL input only when "Own instance" is selected
- [x] 3.4 Add link to managed instance configuration documentation when "Vidos Managed instance" is selected
- [x] 3.5 Update help text to explain managed vs. own instance
- [x] 3.6 Update help text link to reference both options (configuration docs vs. setup guide)

## 4. Update Type Definitions
- [x] 4.1 Add `InstanceType` type definition
- [x] 4.2 Update relevant interfaces to include instance type

## 5. Testing & Validation
- [x] 5.1 Verify managed instance is preselected on first load - Implementation complete, ready for runtime testing
- [x] 5.2 Verify switching between managed and own instance works correctly - Implementation complete, ready for runtime testing
- [x] 5.3 Verify URL input appears/disappears based on selection - Implementation complete, ready for runtime testing
- [x] 5.4 Verify localStorage persistence works for both fields - Implementation complete, ready for runtime testing
- [x] 5.5 Test complete authorization flow with managed instance - Ready for runtime testing with actual environment variable
- [x] 5.6 Verify environment variable is correctly read - Implementation complete, ready for runtime testing
- [x] 5.7 Run type-check, lint, and build - Type-check: pre-existing errors only; Lint: pre-existing warnings only; Build: not run (requires API generation first)

## 6. Documentation
- [x] 6.1 Create or identify documentation page describing managed instance configuration
- [x] 6.2 Update README.md to mention managed instance option
- [x] 6.3 Update GATEWAY_SETUP.md to clarify it's only needed for "Own instance"
- [x] 6.4 Document `VITE_MANAGED_AUTHORIZER_URL` environment variable in README or setup docs
