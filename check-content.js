const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5ywyt4ng',
  dataset: 'production',
  apiVersion: '2024-09-24',
  token: 'skNZnSxrQKQUp5HH3lfyB01Bjbd5wP1MSebfKai9j6J85ZfOHseCn4Ts7fo4WbMyWEno8Utyd5jKEtVEQnCRa4SZnt8Tx0ULarOGO5zCvaIsbZRdxDSIi9MfKMY29qvEdsq4K8FQNg8i7oILxOd4Sb35WzYzCmq0IEjPkqK6EbnoUhxVLyRZ',
  useCdn: false
});

async function checkProjectsPage() {
  try {
    const projectsPage = await client.fetch('*[_type == "projectsPage"][0]');
    console.log('Projects page found:', !!projectsPage);
    if (projectsPage) {
      console.log('Projects page data:', {
        _id: projectsPage._id,
        _type: projectsPage._type,
        title: projectsPage.title,
        slug: projectsPage.slug
      });
    }

    // Check what types exist
    const types = await client.fetch('array::unique(*._type)');
    console.log('Available types:', types);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkProjectsPage();