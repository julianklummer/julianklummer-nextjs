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
  const [activeTabCategoryIndex, setActiveTabCategoryKeyIndex] =
    useState<number>(0);

  return (
    <div className={styles.skillBox}>
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarHeadline}>Skills</h2>
        <TabMenu
          tabCategoryList={tabCategoryList}
          activeTabCategory={tabCategoryList[activeTabCategoryIndex]}
          setActiveTabCategory={(index: number) =>
            setActiveTabCategoryKeyIndex(index)
          }
        />
      </div>
      {tabCategoryList.map((tabCategory, index) => (
        <Tab
          key={`${index}-tab-${tabCategory.id}`}
          tabCategory={tabCategory}
          active={index === activeTabCategoryIndex}
        />
      ))}
    </div>
  );
};
