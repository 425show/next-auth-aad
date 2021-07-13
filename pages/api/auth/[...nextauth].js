import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"

export default NextAuth({
  providers: [
      AzureADProvider({
          clientId: process.env.AZURE_CLIENT_ID,
          clientSecret: process.env.AZURE_CLIENT_SECRET,
          scope: 'offline_access User.Read',
          tenantId: process.env.AZURE_TENANT_ID,
      }),
      ]
  });
