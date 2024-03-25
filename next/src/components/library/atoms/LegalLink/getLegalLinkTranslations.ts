import { GetTranslationsFunction } from "@/components/types/GetTranslationsFunction";
import { LegalLink } from "./LegalLink";

export const getLegalLinkTranslations: GetTranslationsFunction<
  typeof LegalLink
> = (t) => {
  return {
    label: t("legal.label" as never),
    alert: t("legal.alert" as never),
  };
};
