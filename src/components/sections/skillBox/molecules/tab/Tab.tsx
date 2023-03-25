import { TabCategory } from "../../types";
import styles from "./tab.module.scss";

interface Props {
  data: TabCategory;
  active?: boolean;
}

export const Tab: React.FC<Props> = ({ data, active }) => {
  const renderTabContent = () => {
    return (
      <ul>
        {data.skillList.map((skill, index) => (
          <li key={`${index}-${skill.title}`}>{skill.title}</li>
        ))}
      </ul>
    );
  };

  return <div className={styles.tab}>{active ? renderTabContent() : null}</div>;
};
