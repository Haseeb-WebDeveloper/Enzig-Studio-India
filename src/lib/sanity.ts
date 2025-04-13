import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { brandForLandingQuery, secondSectionLogoQuery } from './queries';

export const client = createClient({
    projectId: "6odvfcqu",
    dataset: "enzig-production",
  apiVersion: '2024-03-21',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
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

export async function fetchBrandingForLanding() {
  try {
    const data = await client.fetch(brandForLandingQuery);
    console.dir(data, { depth: null });
    return data;
  } catch (error) {
    console.error('Error fetching branding:', error);
    return [];
  }
}
