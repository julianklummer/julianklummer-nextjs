import { useRef, useState } from "react";
import { flip } from "src/utils/animation/flip";
import { Accordion } from "../../molecules/accordion/Accordion";
import { stationList } from "../../types";
import styles from "./stationBox.module.scss";

interface Props {
  stationList: stationList;
}

export const StationBox: React.FC<Props> = ({ stationList }) => {
  if (!stationList.length) throw new Error("missing items in data");

  const elementRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const [prevActiveItemIndex, setPrevActiveItemIndex] = useState<number | null>(
    null
  );
  const [activeAccordionItemIndex, setActiveAccordionItemKeyIndex] = useState<
    number | null
  >(null);

  const handleAccordionClick = (index: number | null) => {
    setPrevActiveItemIndex(index);

    const updateActiveItem = () => {
      setPrevActiveItemIndex(null);
      setActiveAccordionItemKeyIndex(index);
    };
    if (elementRef.current) {
      flip(updateActiveItem, [elementRef.current, ...itemRef.current]);
    } else {
      throw new Error("skillbox ref or skillbox sidebar ref not found");
    }
  };

  return (
    <div className={styles.stationBox} ref={elementRef}>
      {stationList.map((station, index) => {
        const isActive = index === activeAccordionItemIndex;
        const isPrevActive = index === prevActiveItemIndex;

        return (
          <Accordion
            key={`${index}-tab-${station.id}`}
            station={station}
            active={!isPrevActive && isActive}
            prevActive={isPrevActive}
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
