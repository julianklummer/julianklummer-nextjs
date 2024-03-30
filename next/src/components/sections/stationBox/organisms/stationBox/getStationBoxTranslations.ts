import { GetTranslationsFunction } from "@/components/types/GetTranslationsFunction";
import { StationBox } from "./StationBox";

export const getStationBoxTranslations: GetTranslationsFunction<
  typeof StationBox
> = (t) => ({
  headline: t("stationBox.headline" as never),
  openCloseAccordion: t("stationBox.openCloseAccordion" as never),
  // TODO: Move to contentful source instead of translationfile
  ...JSON.parse(
    `{"stationList": ${JSON.stringify(
      t.raw("stationBox.stationList" as never)
    )}}`
  ),
});
