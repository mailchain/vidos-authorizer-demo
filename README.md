## Vidos Authorizer Demo

This application is a reference implementation demonstrating how Vidos Authorizer can be used to verify credentials in OID4VP-based flows, as well as other credential verification scenarios.

**Vidos links**

- Main site: https://vidos.id
- Dashboard (service creation): https://dashboard.vidos.id
- Documentation: https://docs.vidos.id

### Getting Started

The application offers two ways to connect to a Vidos Authorizer instance:

1. **Vidos Managed instance** (Default) - Pre-configured instance ready for immediate use with no setup required. Perfect for demos and testing. [Learn more](MANAGED_INSTANCE.md)

2. **Own instance** - Use your own Vidos Authorizer and Gateway instances for production use or custom configurations. [Setup guide](GATEWAY_SETUP.md)

**Setup:**

- [Managed Instance](MANAGED_INSTANCE.md) - Using the pre-configured Vidos Managed instance (recommended for first-time users)
- [Vidos Gateway Setup](GATEWAY_SETUP.md) - Creating your own Vidos Authorizer + Vidos Gateway configuration
- [Credential Cases](docs/CREDENTIAL_CASES.md) - Credential type definitions
- [Custom Credential Cases](CUSTOM_CREDENTIAL_CASE.md) - Adding custom credential types
- [References](docs/REFERENCES.md) - External references and resources

### Configuration

**Environment Variables**

Copy the `.env.example` file to `.env` in the project root:

```bash
cp .env.example .env
```

- `VITE_MANAGED_AUTHORIZER_URL` - The URL for the Vidos managed authorizer instance (used when "Vidos Managed instance" is selected)

Example:
```bash
VITE_MANAGED_AUTHORIZER_URL=https://your-gateway.gateway.service.eu.vidos.dev/your-authorizer
```

The selected instance type (managed vs. own) and authorizer URL are persisted in your browser's localStorage, so your preferences are saved between sessions.

### Development

**Prerequisites**

- Bun (https://bun.sh)

**Install dependencies**

- `bun install`

**Run the app in dev mode**

- `bun run dev`

**Format**

- `bun run format`

**Build**

- `bun run build`
