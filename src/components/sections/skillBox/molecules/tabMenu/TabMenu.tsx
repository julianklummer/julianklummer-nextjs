import { TabMenuItem } from "../../atoms/tabMenuItem/TabMenuItem";
import { TabCategory } from "../../types";
import styles from "./tabMenu.module.scss";

interface Props {
  tabCategoryList: TabCategory[];
  activeTabCategory: TabCategory;
  setActiveTabCategory: (data: TabCategory) => void;
}

export const TabMenu: React.FC<Props> = ({
  tabCategoryList,
  activeTabCategory,
  setActiveTabCategory,
}) => {
  return (
    <ul className={styles.tabMenu}>
      {tabCategoryList.map((tabCategory, index) => (
        <li key={`${index}-tabmenu-${tabCategory.id}`}>
          <TabMenuItem
            tabCategory={tabCategory}
            active={tabCategory === activeTabCategory}
            onClick={() => setActiveTabCategory(tabCategory)}
          />
        </li>
      ))}
    </ul>
  );
};
