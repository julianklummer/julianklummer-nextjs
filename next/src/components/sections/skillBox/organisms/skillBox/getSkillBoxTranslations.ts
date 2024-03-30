import { GetTranslationsFunction } from "@/components/types/GetTranslationsFunction";
import { SkillBox } from "./SkillBox";

export const getSkillBoxTranslations: GetTranslationsFunction<
  typeof SkillBox
> = (t) => ({
  navigationHeadline: t("skillBox.navigationHeadline" as never),
  navigationChangeCategory: t("skillBox.navigationChangeCategory" as never),
  // TODO: Move to contentful instead of translationfile
  ...JSON.parse(
    `{"skillTabCategoryList": ${JSON.stringify(
      t.raw("skillBox.skillTabCategoryList" as never)
    )}}`
  ),
});
