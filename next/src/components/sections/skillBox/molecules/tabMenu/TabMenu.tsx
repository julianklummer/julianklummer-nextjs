"use client";
import ArrowDown from "@/icons/utils/arrow-down.svg";
import { useEffect, useState } from "react";
import { TabMenuItem } from "../../atoms/tabMenuItem/TabMenuItem";
import { SkillTabCategory } from "../../types";

import styles from "./tabMenu.module.scss";
interface Props {
  tabCategoryList: SkillTabCategory[];
  activeTabCategory: SkillTabCategory;
  setActiveTabCategory: (index: number) => void;
}

export const TabMenu: React.FC<Props> = ({
  tabCategoryList,
  activeTabCategory,
  setActiveTabCategory,
}) => {
  const [comboboxOpen, setComboboxOpen] = useState(false);

  useEffect(() => {
    setComboboxOpen(false);
  }, [activeTabCategory]);

  return (
    <>
      <div className={styles.tabMenuMobile}>
        <label
          id="tab-menu-combobox-label"
          className={styles.tabMenuMobileLabel}
        >
          // TODO: Add translation 'test'
          {/* {languageContext.language === "de"
            ? "Kategorie ändern"
            : "Change category"} */}
        </label>
        <div
          aria-controls="tab-menu-listbox"
          aria-expanded={comboboxOpen}
          aria-haspopup="listbox"
          aria-labelledby="tab-menu-combobox-label"
          role="combobox"
          tabIndex={0}
          className={styles.tabMenuMobileCombobox}
          onClick={() => setComboboxOpen(!comboboxOpen)}
        >
          {activeTabCategory.title}
          <span className={styles.comboboxIcon}>
            <ArrowDown />
          </span>
        </div>
        <ul
          role="tablist"
          id="tab-menu-listbox"
          aria-labelledby="tab-menu-combobox-label"
          tabIndex={-1}
          aria-hidden={!comboboxOpen}
          className={styles.tabMenuMobileListBox}
        >
          {comboboxOpen
            ? tabCategoryList.map((tabCategory, index) => (
                <li
                  key={`${index}-tabmenu-${tabCategory.title}`}
                  role="option"
                  aria-selected={tabCategory === activeTabCategory}
                  className={styles.tabMenuMobileListBoxItem}
                >
                  <TabMenuItem
                    tabCategory={tabCategory}
                    active={tabCategory === activeTabCategory}
                    onClick={() => setActiveTabCategory(index)}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
      <div className={styles.tabMenuDesktop} role="tablist">
        {tabCategoryList.map((tabCategory, index) => (
          <TabMenuItem
            key={`${index}-tabmenu-${tabCategory.title}`}
            tabCategory={tabCategory}
            active={tabCategory === activeTabCategory}
            onClick={() => setActiveTabCategory(index)}
          />
        ))}
      </div>
    </>
  );
};
