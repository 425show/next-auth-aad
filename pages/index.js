import Layout from '../components/layout'
import Image from 'next/image'

export default function Page () {
  return (
    <Layout className="block">
      <h1 className="text-3xl">NextAuth.js + Azure AD Example</h1>
      <Image
        src='/images/aad.svg'
        height={100}
        width={100}
        alt="Azure AD Logo"
      />
      <p>
        This is an example site to demonstrate how to use <a href={`https://next-auth.js.org`}>NextAuth.js</a> 
        with Azure AD for authentication.
      </p>
    </Layout>
  )
}