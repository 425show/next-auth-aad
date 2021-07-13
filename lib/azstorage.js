import { ChainedTokenCredential, AzureCliCredential, ManagedIdentityCredential } from '@azure/identity'
import { BlobServiceClient } from '@azure/storage-blob'

const storageName = "cmdemo20210224";
const storageConnectionString = `https://${storageName}.blob.core.windows.net`;
const containerName = "sample-data";

const credentials = new ChainedTokenCredential(new AzureCliCredential(), new ManagedIdentityCredential());

export async function getBlobsFromAzureStorage() {
    const blobService = new BlobServiceClient(storageConnectionString, credentials);
    const containerClient = blobService.getContainerClient(containerName);

    let blobs = containerClient.listBlobsFlat();

    let blobdata = [];
    for await (const blob of blobs) {
        const blobItem = {
            name : blob.name,
            contentLength: blob.properties.contentLength,
            contentType: blob.properties.contentType,
            lastModified: blob.properties.lastModified.getUTCDate(),
            etag: blob.properties.etag
        }
        blobdata.push(blobItem);
    }

    return blobdata;
}