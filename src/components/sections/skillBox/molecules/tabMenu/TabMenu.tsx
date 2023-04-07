import { TabMenuItem } from "../../atoms/tabMenuItem/TabMenuItem";
import { TabCategory } from "../../types";
import styles from "./tabMenu.module.scss";
interface Props {
  tabCategoryList: TabCategory[];
  activeTabCategory: TabCategory;
  setActiveTabCategory: (index: number) => void;
}

export const TabMenu: React.FC<Props> = ({
  tabCategoryList,
  activeTabCategory,
  setActiveTabCategory,
}) => {
  const renderMenuItems = () => {
    return (
      <>
        {tabCategoryList.map((tabCategory, index) => (
          <li key={`${index}-tabmenu-${tabCategory.id}`}>
            <TabMenuItem
              tabCategory={tabCategory}
              active={tabCategory === activeTabCategory}
              onClick={() => setActiveTabCategory(index)}
            />
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <ul className={styles.tabMenuMobile}>{renderMenuItems()}</ul>
      <ul className={styles.tabMenuDesktop}>{renderMenuItems()}</ul>
    </>
  );
};
