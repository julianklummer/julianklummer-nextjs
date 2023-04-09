import { useEffect, useRef, useState } from "react";
import { flip } from "src/utils/animation/flip";
import Region from "../../../../../../public/icons/stationList/region.svg";
import ArrowDown from "../../../../../../public/icons/utils/arrow-down.svg";
import { StationIcon } from "../../atoms/stationIcon/StationIcon";
import { station } from "../../types";
import styles from "./accordion.module.scss";

export const getTabId = (station: station) => {
  return station.id + "-accordion";
};
interface Props {
  station: station;
  active?: boolean;
  open: Function;
  close: Function;
}

export const Accordion: React.FC<Props> = ({
  station,
  active,
  open,
  close,
}) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const headerClassList = [styles.accordionHeader];
  const panelClassList = [styles.accordionPanel];
  if (active) {
    headerClassList.push(styles._active);
    panelClassList.push(styles._active);
  }

  useEffect(() => {
    if (elementRef.current) {
      const relatedElements: HTMLElement[] = [];

      const addNextSibling = (element: HTMLElement) => {
        const nextSibling = element.nextElementSibling;
        if (nextSibling) {
          relatedElements.push(nextSibling as HTMLElement);
          addNextSibling(nextSibling as HTMLElement);
        }
      };
      addNextSibling(elementRef.current);

      flip(() => setPanelOpen(active ? active : false), [...relatedElements]);
    } else {
      throw new Error("skillbox ref or skillbox sidebar ref not found");
    }
  }, [active]);

  const renderAccordionContent = () => {
    return (
      <>
        <ul>
          {station.infos?.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className={styles.accordion} ref={elementRef}>
      <div className={headerClassList.join(" ")}>
        <div className={styles.row}>
          <span className={styles.stationIcon}>
            {station.icon ? <StationIcon name={station.icon} /> : null}
          </span>
          <span className={styles.durationLocation}>
            <span>{station.duration}</span>
            <span>
              <Region />
              {station.location}
            </span>
          </span>
        </div>
        <h3>
          <button
            id={getTabId(station) + "-header"}
            aria-expanded={active}
            aria-controls={getTabId(station) + "-panel"}
            onClick={() => (active ? close() : open())}
          >
            {station.title}
          </button>
        </h3>
        <div className={styles.row}>
          <span>{station.institution}</span>
          <span className={styles.accordionToggleIcon}>
            <ArrowDown />
          </span>
        </div>
      </div>
      <div
        className={panelClassList.join(" ")}
        id={getTabId(station) + "-panel"}
        aria-labelledby={getTabId(station) + "-header"}
      >
        {panelOpen ? renderAccordionContent() : null}
      </div>
    </div>
  );
};
