import { useState } from "react";
import { Tab } from "../../molecules/tab/Tab";
import { TabMenu } from "../../molecules/tabMenu/TabMenu";
import { TabCategory } from "../../types";
import styles from "./skillBox.module.scss";

interface Props {
  tabCategoryList: TabCategory[];
}

export const SkillBox: React.FC<Props> = ({ tabCategoryList }) => {
  if (!tabCategoryList.length) throw new Error("missing items in data");
  const [activeTabCategory, setActiveTabCategory] = useState<TabCategory>(
    tabCategoryList[0]
  );

  return (
    <div className={styles.skillBox}>
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarHeadline}>Skills</h2>
        <TabMenu
          tabCategoryList={tabCategoryList}
          activeTabCategory={activeTabCategory}
          setActiveTabCategory={(data: TabCategory) =>
            setActiveTabCategory(data)
          }
        />
      </div>
      {tabCategoryList.map((tabCategory, index) => (
        <Tab
          key={`${index}-tab-${tabCategory.id}`}
          tabCategory={tabCategory}
          active={tabCategory === activeTabCategory}
        />
      ))}
    </div>
  );
};
