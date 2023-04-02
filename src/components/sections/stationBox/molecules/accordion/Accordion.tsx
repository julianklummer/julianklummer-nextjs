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
    return <div>{JSON.stringify(station)}</div>;
  };

  return (
    <div className={styles.accordion}>
      <h3 className={styles.accordionHeader}>
        <button
          id={getTabId(station) + "-header"}
          aria-expanded={active}
          aria-controls={getTabId(station) + "-panel"}
          onClick={() => (active ? close() : open())}
        >
          {station.title}
        </button>
      </h3>
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
