import { getTranslations } from "next-intl/server";
import { ComponentProps } from "react";

export type GetTranslationsFunction<T extends React.FC<any>> = (
  t: Awaited<ReturnType<typeof getTranslations<"components">>>
) => ComponentProps<T>["translations"];
