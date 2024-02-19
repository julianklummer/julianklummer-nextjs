import { z } from "zod";

export const stationSchema = z.object({
  id: z.string(),
  title: z.string(),
  institution: z.string().optional(),
  duration: z.string().optional(),
  location: z.string().optional(),
  icon: z.string().optional(),
  link: z.string().optional(),
  linkTitle: z.string().optional(),
  infos: z.array(z.string()),
});

export const stationListSchema = z.array(stationSchema);
