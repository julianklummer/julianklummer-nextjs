"use client";
import { ForwardedRef, forwardRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SkillIcon } from "../../atoms/skillIcon/SkillIcon";
import { iconColorList } from "../../atoms/skillIcon/iconColorList";
import { SkillTabCategory } from "../../types";
import styles from "./tab.module.scss";

export const getTabId = (tabCategory: SkillTabCategory) => {
  return tabCategory.title + "-tab";
};
type Props = {
  tabCategory: SkillTabCategory;
  active?: boolean;
  prevActive?: boolean;
};

export const Tab = forwardRef(function Tab(
  props: Props,
  ref: ForwardedRef<HTMLLIElement>
) {
  const { tabCategory, active, prevActive } = props;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { ref: internalRef, inView } = useInView({ threshold: 0.6 });

  const classList = [styles.tab];
  if (active) classList.push(styles._active);
  if (prevActive) classList.push(styles._prevActive);
  if (inView) classList.push(styles._animated);

  const renderTabContent = () => {
    return (
      <ul className={styles.iconList}>
        {tabCategory.skillList.map((skill, index) => {
          const iconEntry = iconColorList.filter(
            (entry) => entry.id === skill.icon
          );
          let colorList = iconEntry.length
            ? iconEntry[0]?.colorList
            : { r: 63, g: 204, b: 222 };
          return (
            <li
              key={`${index}-icon-list-${skill.title}`}
              className={styles.iconListItem}
              ref={ref}
            >
              <div
                className={styles.skill}
                style={
                  {
                    "--index": index,
                    "--color-r": colorList.r,
                    "--color-g": colorList.g,
                    "--color-b": colorList.b,
                  } as React.CSSProperties
                }
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
      ref={internalRef}
    >
      {active || prevActive ? renderTabContent() : null}
    </div>
  );
});
