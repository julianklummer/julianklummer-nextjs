import { getTabId } from "../../molecules/tab/Tab";
import { TabCategory } from "../../types";
import styles from "./tabMenuItem.module.scss";

interface Props {
  tabCategory: TabCategory;
  active: boolean;
  onClick: Function;
}

export const TabMenuItem: React.FC<Props> = ({
  tabCategory,
  active,
  onClick,
}) => {
  const classList = [styles.tabMenuItem];
  active && classList.push(styles._active);

  return (
    <button
      className={classList.join(" ")}
      onClick={() => onClick()}
      role="tab"
      aria-selected={active}
      aria-controls={getTabId(tabCategory)}
    >
      <span>{tabCategory.title}</span>
    </button>
  );
};
