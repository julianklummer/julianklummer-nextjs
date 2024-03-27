import { z } from "zod";

export const TeaserSchema = z.object({
  headline: z.string(),
  url: z.string(),
  image: z.object({
    srcId: z.string(),
    alt: z.string(),
  }),
});

export const TeaserListSchema = z.array(TeaserSchema);

export type Teaser = z.infer<typeof TeaserSchema>;

export type TeaserList = z.infer<typeof TeaserListSchema>;
