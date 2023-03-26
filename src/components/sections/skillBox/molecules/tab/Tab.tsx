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
  const renderTabContent = () => {
    return (
      <ul>
        {tabCategory.skillList.map((skill, index) => (
          <li key={`${index}-${skill.title}`}>{skill.title}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.tab} id={getTabId(tabCategory)}>
      {active ? renderTabContent() : null}
    </div>
  );
};
