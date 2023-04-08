import { ForwardedRef, forwardRef } from "react";
import { SkillIcon } from "../../atoms/skillIcon/SkillIcon";
import { iconColorList } from "../../atoms/skillIcon/iconColorList";
import { TabCategory } from "../../types";
import styles from "./tab.module.scss";

export const getTabId = (tabCategory: TabCategory) => {
  return tabCategory.id + "-tab";
};
interface Props {
  tabCategory: TabCategory;
  active?: boolean;
  prevActive?: boolean;
}

export const Tab = forwardRef(function Tab(
  props: Props,
  ref: ForwardedRef<HTMLLIElement>
) {
  const { tabCategory, active, prevActive } = props;
  const classList = [styles.tab];
  if (active) classList.push(styles._active);
  if (prevActive) classList.push(styles._prevActive);

  const renderTabContent = () => {
    return (
      <ul className={styles.iconList}>
        {tabCategory.skillList.map((skill, index) => {
          const iconEntry = iconColorList.filter(
            (entry) => entry.id === skill.icon
          );
          let colorList = iconEntry.length
            ? iconEntry[0]?.colorList
            : [{ r: 63, g: 204, b: 222 }];
          return (
            <li
              key={`${index}-icon-list-${skill.title}`}
              className={styles.iconListItem}
              ref={ref}
            >
              <div
                className={styles.skill}
                style={{
                  "--index": index,
                  "--color-r": colorList[0].r,
                  "--color-g": colorList[0].g,
                  "--color-b": colorList[0].b,
                }}
              >
                <span className={styles.skillIcon}>
                  <SkillIcon name={skill.icon} />
                </span>
                <span className={styles.skillTitle}>{skill.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div
      className={classList.join(" ")}
      id={getTabId(tabCategory)}
      aria-hidden={!active}
    >
      {active || prevActive ? renderTabContent() : null}
    </div>
  );
});
