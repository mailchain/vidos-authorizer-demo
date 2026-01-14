## Vidos Authorizer Demo

This application is a reference implementation demonstrating how Vidos Authorizer can be used to verify credentials in OID4VP-based flows, as well as other credential verification scenarios.

**Vidos links**

- Main site: https://vidos.id
- Dashboard (service creation): https://dashboard.vidos.id
- Documentation: https://docs.vidos.id

### Vidos Authorizer + Vidos Gateway setup

To run this application, you need to have a Vidos Authorizer and Vidos Gateway set up. The usage of Vidos Gateway is option but recommended for this example because is simplifies CORS handling and it does not rely on API key authentication.

1. Create a Vidos account on https://dashboard.vidos.id
2. Create a new Vidos Authorizer service in the dashboard https://dashboard.vidos.id/authorizers/instances
3. Create a new Vidos Gateway service in the dashboard https://dashboard.vidos.id/gateways/instances
4. Configure the created Vidos Gateway
   - Enable CORS and add `Content-Type` in the "Allowed headers"
   - Scroll to the bottom and under "Gateway Paths" add a new path with:
     - Path: `authorizer` (or any other path you prefer, just remember to update the URL in the app accordingly)
     - Destination: the Authorizer you created in step 2
     - Service Role: "All authorizer actions"
   - If you were to click on "JSON Editor" you can see your configuration in JSON format, it should look similar to this:
     ```json
     {
       "cors": {
         "enabled": true,
         "allowHeaders": ["Content-Type"]
       },
       "paths": {
         "authorizer": {
           "type": "instance",
           "resourceId": "my-authorizer-id",
           "serviceRole": {
             "owner": "managed",
             "resourceId": "authorizer_all_actions"
           },
           "service": "authorizer"
         }
       }
     }
     ```
     - Save the configuration by clicking on "Save"
5. Copy the Gateway Endpoint URL from the Gateway instance page, e.g. `https://my-gateway.gateway.service.eu.vidos.id`.
6. Paste the Gateway Endpoint URL in the example application followed with the path of the Authorizer you configured in step 4, e.g. `https://my-gateway.gateway.service.eu.vidos.id/authorizer`.

### Development (Getting Started)

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
