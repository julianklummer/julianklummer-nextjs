"server-only";

import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import type { GraphQLSchema } from "graphql";

export const getGraphQLSchema = async (): Promise<GraphQLSchema> => {
  return await loadSchema(
    `https://graphql.contentful.com/content/v1/spaces/` +
      `${process.env.SPACE}/environments/${process.env.ENVIRONMENT}?access_token=${process.env.ACCESS_TOKEN}`,
    { loaders: [new UrlLoader()] }
  );
};
