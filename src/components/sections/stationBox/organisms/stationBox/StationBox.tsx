import { useState } from "react";
import { Accordion } from "../../molecules/accordion/Accordion";
import { stationList } from "../../types";
import styles from "./stationBox.module.scss";

interface Props {
  stationList: stationList;
}

export const StationBox: React.FC<Props> = ({ stationList }) => {
  if (!stationList.length) throw new Error("missing items in data");
  const [activeAccordionItemIndex, setActiveAccordionItemKeyIndex] = useState<
    number | null
  >(null);

  return (
    <div className={styles.stationBox}>
      {stationList.map((station, index) => (
        <Accordion
          key={`${index}-tab-${station.id}`}
          station={station}
          active={index === activeAccordionItemIndex}
          open={() => setActiveAccordionItemKeyIndex(index)}
          close={() => setActiveAccordionItemKeyIndex(null)}
        />
      ))}
    </div>
  );
};
