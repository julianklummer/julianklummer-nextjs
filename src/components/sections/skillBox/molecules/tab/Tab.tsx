import { SkillIcon } from "../../atoms/skillIcon/SkillIcon";
import { TabCategory } from "../../types";
import styles from "./tab.module.scss";

export const getTabId = (tabCategory: TabCategory) => {
  return tabCategory.id + "-tab";
};
interface Props {
  tabCategory: TabCategory;
  active?: boolean;
}

export const Tab: React.FC<Props> = ({ tabCategory, active }) => {
  const classList = [styles.tab];
  active && classList.push(styles._active);

  const renderTabContent = () => {
    return (
      <ul className={styles.iconList}>
        {tabCategory.skillList.map((skill, index) => (
          <li
            key={`${index}-icon-list-${skill.title}`}
            className={styles.iconListItem}
          >
            <div className={styles.skill}>
              <span className={styles.skillIcon}>
                <SkillIcon name={skill.icon} />
              </span>
              <span className={styles.skillTitle}>{skill.title}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={classList.join(" ")} id={getTabId(tabCategory)}>
      {active ? renderTabContent() : null}
    </div>
  );
};
