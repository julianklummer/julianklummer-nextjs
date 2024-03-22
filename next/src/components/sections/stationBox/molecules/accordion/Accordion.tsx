import Region from "@/icons/stationList/region.svg";
import ArrowDown from "@/icons/utils/arrow-down.svg";
import { ForwardedRef, forwardRef } from "react";
import { StationIcon } from "../../atoms/stationIcon/StationIcon";
import { Station } from "../../types";
import styles from "./accordion.module.scss";

export const getTabId = (station: Station) => {
  return station.id + "-accordion";
};
interface Props {
  station: Station;
  active: boolean;
  open: Function;
  close: Function;
  index: number;
}

export const Accordion = forwardRef(function Accordion(
  props: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { station, active, open, close, index } = props;
  const headerClassList = [styles.accordionHeader];
  const panelClassList = [styles.accordionPanel];
  if (active) {
    headerClassList.push(styles._active);
    panelClassList.push(styles._active);
  }

  const renderAccordionContent = () => {
    return (
      <>
        <ul role="list" className={styles.panelList}>
          {station.infos?.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div
      className={styles.accordion}
      style={{ "--index": index } as React.CSSProperties}
      ref={ref}
    >
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
            aria-label={
              "test"
              // Todo Add translation
              // languageContext.language === "de"
              //   ? "Details öffnen/schließen"
              //   : "Toggle details"
            }
            title={
              // Todo Add translation
              "test"
              // languageContext.language === "de"
              //   ? "Details öffnen/schließen"
              //   : "Toggle details"
            }
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
        {active ? renderAccordionContent() : null}
      </div>
    </div>
  );
});
