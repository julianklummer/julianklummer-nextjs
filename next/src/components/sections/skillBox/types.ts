import { z } from "zod";

export const SkillSchema = z.object({
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

export const SkillTabCategorySchema = z.object({
  title: z.string(),
  skillList: z.array(SkillSchema),
});

export const SkillTabCategoryListSchema = z.array(SkillTabCategorySchema);

export const SkillListSchema = z.array(SkillSchema);

export type Skill = z.infer<typeof SkillSchema>;

export type SkillList = z.infer<typeof SkillListSchema>;

export type SkillTabCategory = z.infer<typeof SkillTabCategorySchema>;

export type SkillTabCategoryList = z.infer<typeof SkillTabCategoryListSchema>;
