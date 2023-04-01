import { useState } from "react";
import { stationList } from "../../types";
import styles from "./stationBox.module.scss";

interface Props {
  stationList: stationList[];
}

export const StationBox: React.FC<Props> = ({ stationList }) => {
  if (!stationList.length) throw new Error("missing items in data");
  const [activeTabCategoryIndex, setActiveTabCategoryKeyIndex] =
    useState<number>(0);

  return <div className={styles.stationBox}></div>;
};
