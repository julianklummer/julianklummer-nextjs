import { useRef, useState } from "react";
import { flip } from "src/utils/animation/flip";
import { Tab } from "../../molecules/tab/Tab";
import { TabMenu } from "../../molecules/tabMenu/TabMenu";
import { TabCategory } from "../../types";
import styles from "./skillBox.module.scss";

interface Props {
  tabCategoryList: TabCategory[];
}

export const SkillBox: React.FC<Props> = ({ tabCategoryList }) => {
  if (!tabCategoryList.length) throw new Error("missing items in data");
  const activeLastItemRef = useRef<HTMLLIElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const [activeTabCategoryIndex, setActiveTabCategoryKeyIndex] =
    useState<number>(0);
  const [prevActiveTabCategoryIndex, setprevActiveTabCategoryKeyIndex] =
    useState<number | null>(null);

  const changeActiveCategory = (index: number) => {
    const updateActiveTabCategory = () => {
      setprevActiveTabCategoryKeyIndex(null);
      setActiveTabCategoryKeyIndex(index);
    };
    const handleTransitionEnd = () => {
      if (elementRef.current) {
        flip(updateActiveTabCategory, [elementRef.current]);
      } else {
        throw new Error("skillbox ref or skillbox sidebar ref not found");
      }
    };

    setprevActiveTabCategoryKeyIndex(activeTabCategoryIndex);
    activeLastItemRef.current?.addEventListener(
      "animationend",
      handleTransitionEnd
    );
  };

  return (
    <div className={styles.skillBoxSection} ref={elementRef}>
      <div className={styles.skillBox}>
        <div className={styles.sidebar}>
          <h2 className={styles.sidebarHeadline}>Skills</h2>
          <TabMenu
            tabCategoryList={tabCategoryList}
            activeTabCategory={tabCategoryList[activeTabCategoryIndex]}
            setActiveTabCategory={changeActiveCategory}
          />
        </div>
        {tabCategoryList.map((tabCategory, index) => {
          const isActive = index === activeTabCategoryIndex;
          const isPrevActive = index === prevActiveTabCategoryIndex;

          return (
            <Tab
              key={`${index}-tab-${tabCategory.id}`}
              tabCategory={tabCategory}
              active={!isPrevActive && isActive}
              prevActive={isPrevActive}
              ref={activeLastItemRef}
            />
          );
        })}
      </div>
    </div>
  );
};
