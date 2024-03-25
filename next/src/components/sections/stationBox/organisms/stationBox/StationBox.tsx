"use client";
import { Translation } from "@/translations/types";
import { useRef, useState } from "react";
import { Accordion } from "../../molecules/accordion/Accordion";
import styles from "./stationBox.module.scss";

interface Props {
  translations: Translation["components"]["stationBox"];
}

export const StationBox: React.FC<Props> = ({ translations }) => {
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
      <h2 className={styles.stationBoxHeadline}>{translations.headline}</h2>
      {translations.stationList.map((station, index) => {
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
