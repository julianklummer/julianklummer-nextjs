"server-only";

import { graphql, GraphQLArgs } from "graphql";
import { getGraphQLSchema } from "./utils/getGraphQLSchema";
import { z, ZodSchema } from "zod";

type getDataArgs<T extends ZodSchema> = {
  query: string;
  schema: T;
  variableValues?: GraphQLArgs["variableValues"];
};

export const getData = async <T extends ZodSchema>({
  query,
  schema,
  variableValues,
}: getDataArgs<T>): Promise<z.infer<T>> => {
  try {
    const { data } = await graphql({
      schema: await getGraphQLSchema(),
      source: query,
      variableValues,
    });
    schema.parse(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
