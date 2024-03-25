"use client";
import { Translation } from "@/translations/types";
import { useRef, useState } from "react";
import { flip } from "src/utils/animation/flip";
import { Tab } from "../../molecules/tab/Tab";
import { TabMenu } from "../../molecules/tabMenu/TabMenu";
import styles from "./skillBox.module.scss";

interface Props {
  translations: Translation["components"]["skillBox"];
}

export const SkillBox: React.FC<Props> = ({ translations }) => {
  if (!translations.skillTabCategoryList.length)
    throw new Error("missing items in data");
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
        const relatedElements: HTMLElement[] = [];
        if (elementRef.current.nextElementSibling) {
          relatedElements.push(
            elementRef.current.nextElementSibling as HTMLElement
          );
        }
        flip(updateActiveTabCategory, [elementRef.current, ...relatedElements]);
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
          <h2 className={styles.sidebarHeadline}>
            {translations.navigationHeadline}
          </h2>
          <TabMenu
            label={translations.navigationHeadline}
            tabCategoryList={translations.skillTabCategoryList}
            activeTabCategory={
              translations.skillTabCategoryList[activeTabCategoryIndex]
            }
            setActiveTabCategory={changeActiveCategory}
          />
        </div>
        {translations.skillTabCategoryList.map((tabCategory, index) => {
          const isActive = index === activeTabCategoryIndex;
          const isPrevActive = index === prevActiveTabCategoryIndex;

          return (
            <Tab
              key={`${index}-tab-${tabCategory.title}`}
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
