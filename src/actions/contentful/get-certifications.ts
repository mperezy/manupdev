import fetchQuery from 'actions/contentful/fetch-query';
import isProd from 'utils/is-prod';

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
    nextHeaders: {
      revalidate: isProd() ? 3600 : 0,
    },
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
