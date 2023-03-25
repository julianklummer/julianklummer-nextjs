import { z } from "zod";

export const skillSchema = z.object({
  title: z.string(),
  icon: z.string(),
});

export const tabCategorylSchema = z.object({
  title: z.string(),
  skillList: z.array(skillSchema),
});
