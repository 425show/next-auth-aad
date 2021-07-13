import Layout from '../components/layout'
import {useSession} from 'next-auth/react'

import { getBlobsFromAzureStorage} from '../lib/azstorage'

export default function Page ({blobs}) {
  const { status } = useSession({
    required: true,
  })

  return (
    <Layout>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Content Length</th>
            <th>Content Type</th>
            <th>Last Modified</th>
            <th>eTag</th>
          </tr>
        </thead>
        <tbody>
            {blobs.map(({ name, contentLength, contentType,lastModified,etag }) => (
              <tr key={etag} className="bg-blue-200">
                <td>{name}</td>
                <td>{contentLength}</td>
                <td>{contentType}</td>
                <td>{lastModified}</td>
                <td>{etag}</td>
              </tr>
            ))}
        </tbody>  
      </table>
    </Layout>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const blobs = await getBlobsFromAzureStorage();
  return {
    props: {
      blobs: blobs
    }
  }
}
