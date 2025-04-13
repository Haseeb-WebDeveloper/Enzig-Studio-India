import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { secondSectionLogoQuery } from './queries';

export const client = createClient({
    projectId: "6odvfcqu",
    dataset: "enzig-production",
  apiVersion: '2024-03-21',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
} 

export async function fetchSecondSectionLogo() {
  try {
    const data = await client.fetch(secondSectionLogoQuery);
    return data;
  } catch (error) {
    console.error('Error fetching second section logo:', error);
    return [];
  }
}
