import fetchQuery from 'actions/contentful/fetch-query';

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

export default async (): Promise<Certification[]> => {
  const response = await fetchQuery<'certification', CertificationContentful>({
    query,
    nextHeaders: { revalidate: 3600 },
  });

  if (!response) {
    return [];
  }

  return response.certificationCollection.items.map<Certification>(
    ({ issued, certificationIssuer, ...certification }) => ({
      ...certification,
      issued: new Date(issued),
      issuedBy: certificationIssuer.name as Tech,
    })
  );
};
