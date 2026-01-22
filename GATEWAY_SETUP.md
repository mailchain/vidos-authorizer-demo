# Vidos Authorizer + Vidos Gateway Setup

> **Note:** This setup guide is only required if you want to use your **own instance** of Vidos Authorizer and Gateway. If you're using the **Vidos Managed instance** (the default option), no setup is required - you can start using the application immediately. [Learn more about the managed instance](MANAGED_INSTANCE.md).

## When Do You Need This Guide?

Use this guide if you want to:
- Have full control over your authorizer configuration
- Integrate with your own instances
- Customize configuration or policies

For quick demos and testing, the managed instance is recommended.

## Setup Steps

To run this application with your own instance, you need to have a Vidos Authorizer and Vidos Gateway set up. The usage of Vidos Gateway is option but recommended for this example because is simplifies CORS handling and it does not rely on API key authentication.

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

## Using Your Own Instance

After completing this setup:

1. Launch the application
2. Select "Own instance" in the Instance Type options
3. Enter your Gateway authorizer URL from step 6 above
4. Start creating authorization requests

## Learn More

- [Main Application README](README.md) - Getting started and configuration options
- [Managed Instance](MANAGED_INSTANCE.md) - Information about the default managed instance option
- [Vidos Documentation](https://docs.vidos.id) - Complete Vidos documentation
- [Vidos Dashboard](https://dashboard.vidos.id) - Manage your Vidos services

