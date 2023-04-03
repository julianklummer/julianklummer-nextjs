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
  const panelClassList = [styles.accordionPanel];
  active && panelClassList.push(styles._active);

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
    <div className={styles.accordion}>
      <div className={styles.accordionHeader}>
        <div className={styles.row}>
          <span className={styles.stationIcon}>
            {station.icon ? <StationIcon name={station.icon} /> : null}
          </span>
          <span>{station.duration}</span>
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
          <span>{station.location}</span>
          <span>{active ? "close" : "open"}</span>
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
};
