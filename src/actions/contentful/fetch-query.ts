type ContentfulCollection<T extends string> = `${T}Collection`;

type ContentfulGraphQLResponse<T extends string, U> = {
  data: Record<ContentfulCollection<T>, { items: U[] }>;
};

type ResponseResult<T extends string, U> = ContentfulGraphQLResponse<T, U>;

const SPACE_ID = process.env.API_CONTENTFUL_SPACE_ID ?? '';
const ACCESS_TOKEN = process.env.API_CONTENTFUL_ACCESS_TOKEN ?? '';
// eslint-disable-next-line max-len
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;

type Props = {
  query: string;
  nextHeaders?: NextFetchRequestConfig;
};

/**
 * Function to fetch data from Contentful using a GraphQL query
 * - Input Types:
 *    - 1st type argument **<ContentfulCollectionName>**: A `string` value for the Contentful collection name
 *    - 2nd type argument **<ContentfulCollection>**: A `CustomType` that matches the exact content returned by Contentful
 * - **query**: A GraphQL Query (`string`)
 * - **nextHeaders**: An object to handle Next.js fetch headers (`NextFetchRequestConfig`)
 */
export default async <
  ContentfulCollectionName extends string,
  ContentfulCollection,
>({
  query,
  nextHeaders,
}: Props): Promise<
  | ResponseResult<ContentfulCollectionName, ContentfulCollection>['data']
  | undefined
> => {
  const fetchResponse = await fetch(URL, {
    next: { ...nextHeaders },
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!fetchResponse.ok) {
    return undefined;
  }

  const jsonResponse = (await fetchResponse.json()) as ResponseResult<
    ContentfulCollectionName,
    ContentfulCollection
  >;

  return jsonResponse.data;
};
