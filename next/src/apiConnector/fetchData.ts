"server-only";
import { z, ZodSchema } from "zod";

type getDataArgs<T extends ZodSchema> = {
  query: string;
  schema: T;
  variables?: {
    readonly [variable: string]: unknown;
  };
};

export const fetchData = async <T extends ZodSchema>({
  query,
  schema,
  variables,
}: getDataArgs<T>): Promise<z.infer<T>> => {
  try {
    const url =
      `https://graphql.contentful.com/content/v1/spaces/` +
      `${process.env.SPACE}/environments/${process.env.ENVIRONMENT}?access_token=${process.env.ACCESS_TOKEN}`;

    const { data } = await (
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
    ).json();

    schema.parse(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
