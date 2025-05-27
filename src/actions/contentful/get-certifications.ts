const query = `
query GetAllCertificationsQuery {
  certificationCollection (
    order: issued_DESC,
  ) {
    items {
      id
      title
      issued
      certificationIssuer {
        ... on CertificationIssuer {
          name
        }
      }
      certificateLink
      courseLink
      description
    }
  }
}`;

const SPACE_ID = process.env.API_CONTENTFUL_SPACE_ID ?? '';
const ACCESS_TOKEN = process.env.API_CONTENTFUL_ACCESS_TOKEN ?? '';
// eslint-disable-next-line max-len
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;

export default async (): Promise<Certification[]> => {
  const fetchResponse = await fetch(URL, {
    next: { revalidate: 3600 },
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!fetchResponse.ok) {
    return [];
  }

  const jsonResponse =
    (await fetchResponse.json()) as ContentfulGraphQLResponse<
      'certification',
      CertificationContentful
    >;

  return jsonResponse.data.certificationCollection.items.map<Certification>(
    ({ issued, certificationIssuer, ...certification }) => ({
      ...certification,
      issued: new Date(issued),
      issuedBy: certificationIssuer.name as Tech,
    })
  );
};
