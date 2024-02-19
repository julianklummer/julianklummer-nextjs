import { z } from "zod";

export const skillSchema = z.object({
  title: z.string(),
  icon: z.string(),
  iconColorRGB: z
    .object({
      r: z.string(),
      g: z.string(),
      b: z.string(),
    })
    .optional(),
});
export const tabCategorylSchema = z.object({
  title: z.string(),
  skillList: z.array(skillSchema),
});
