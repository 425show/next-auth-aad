<p align="center">
   <br/>
   <a href="https://next-auth.js.org" target="_blank"><img width="130px" src="https://next-auth.js.org/img/logo/logo-sm.png" /></a>
   <img width="50px" style="margin-bottom:40px; margin-left:30px; margin-right:30px" src="public/images/plus.png" />
   <a href="https://azure.microsoft.com/en-us/services/active-directory/" target="_blank"><img width="150px" src="public/images/aad.svg" /></a>
   <h3 align="center">NextAuth.js authentication with Azure AD</h3>

## Overview

NextAuth.js is a complete open source authentication solution for [Next.js](http://nextjs.org/) applications.

This is an example application which shows how `next-auth` can be used with Azure AD to implement user authentication.

You can find more about the Azure AD provider for Next Auth [here](https://github.com/nextauthjs/next-auth/blob/next/src/providers/azure-ad.js)

### About NextAuth.js

NextAuth.js is an easy to implement, full-stack (client/server) open source authentication library designed for [Next.js](https://nextjs.org) and [Serverless](https://vercel.com).

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation.

> *NextAuth.js is not officially associated with Vercel or Next.js.*

## Getting Started

### 1. Clone the repository and install dependancies

```
git clone https://github.com/425Show/next-auth-aad.git
cd next-auth-aad
npm install
```

### 2. Create an Azure AD App registration
Open the `app-registrations.ipynb` and run through the Notebook to set up your Azure AD App registration. The Next.js app will
use this App Registration to authenticate. 

> Note: You'll need to install the .NET Interactive Notebook extension in VS Code to run this Notebook

### 3. Configure your local environment

Create an `.env.local` file and add the following information. This information can be found on your Notebook from step #2

```
NEXTAUTH_URL=http://localhost:3000
AZURE_CLIENT_ID=<your Azure AD Client ID>
AZURE_TENANT_ID=<your Azure AD Tenant ID>
```

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it it production mode, use:

```
npm build
npm start
```

### 5. Preparing for Production

You must set the `NEXTAUTH_URL` environment variable with the URL of your site, before deploying to production.

e.g. in your `.env.local` file - `NEXTAUTH_URL=https://example.com`

To do this with Vercel, you can use the [Vercel project dashboard](https://vercel.com/dashboard) or their cli via the `vc env` command:

```
vc env add NEXTAUTH_URL production
```

Do not forget to set the environment variables for the Client ID and Tenant ID values for all your configured authentication providers in your hosting providers dashboard, i.e. with Vercel as described above.

## License

MIT

