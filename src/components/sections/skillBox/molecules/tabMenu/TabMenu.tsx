import { TabMenuItem } from "../../atoms/tabMenuItem/tabMenuItem";
import { TabCategory } from "../../types";
import styles from "./tabMenu.module.scss";

interface Props {
  data: TabCategory[];
  activeTabCategory: TabCategory;
  setActiveTabCategory: (data: TabCategory) => void;
}

export const TabMenu: React.FC<Props> = ({
  data,
  activeTabCategory,
  setActiveTabCategory,
}) => {
  return (
    <ul className={styles.tabMenu}>
      {data.map((tabCategory, index) => (
        <li key={`${index}-${tabCategory.title}`}>
          <TabMenuItem
            title={tabCategory.title}
            active={tabCategory === activeTabCategory}
            onClick={() => setActiveTabCategory(tabCategory)}
          />
        </li>
      ))}
    </ul>
  );
};
