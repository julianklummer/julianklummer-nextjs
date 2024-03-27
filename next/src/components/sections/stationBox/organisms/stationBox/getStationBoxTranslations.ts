import { GetTranslationsFunction } from "@/components/types/GetTranslationsFunction";
import { StationBox } from "./StationBox";

export const getStationBoxTranslations: GetTranslationsFunction<
  typeof StationBox
> = (t) => ({
  headline: t("stationBox.headline" as never),
  // TODO: Move to content source instead of translationfile
  ...JSON.parse(
    `{"stationList": ${JSON.stringify(
      t.raw("stationBox.stationList" as never)
    )}}`
  ),
});
