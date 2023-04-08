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
          <TabMenuItem
            key={`${index}-tabmenu-${tabCategory.id}`}
            tabCategory={tabCategory}
            active={tabCategory === activeTabCategory}
            onClick={() => setActiveTabCategory(index)}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <div className={styles.tabMenuMobile} role="tablist">
        {renderMenuItems()}
      </div>
      <div className={styles.tabMenuDesktop} role="tablist">
        {renderMenuItems()}
      </div>
    </>
  );
};
