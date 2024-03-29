import { useContext, useRef, useState } from "react";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
import { Accordion } from "../../molecules/accordion/Accordion";
import { stationList } from "../../types";
import styles from "./stationBox.module.scss";

interface Props {
  stationList: stationList;
}

export const StationBox: React.FC<Props> = ({ stationList }) => {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error("LanguageContext not found.");
  if (!stationList.length) throw new Error("missing items in data");

  const elementRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const [activeAccordionItemIndex, setActiveAccordionItemKeyIndex] = useState<
    number | null
  >(null);

  const handleAccordionClick = (index: number | null) => {
    setActiveAccordionItemKeyIndex(index);
  };

  return (
    <div className={styles.stationBox} ref={elementRef}>
      <h2 className={styles.stationBoxHeadline}>
        {languageContext.language === "de" ? "Stationen" : "Stations"}
      </h2>
      {stationList.map((station, index) => {
        const isActive = index === activeAccordionItemIndex;

        return (
          <Accordion
            key={`${index}-tab-${station.id}`}
            station={station}
            active={isActive}
            open={() => handleAccordionClick(index)}
            close={() => handleAccordionClick(null)}
            index={index}
            ref={(ref) => {
              ref && itemRef.current.push(ref);
            }}
          />
        );
      })}
    </div>
  );
};
