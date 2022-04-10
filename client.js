import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_DATASET,
    apiVersion: '2022-10-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
