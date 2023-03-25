import { useState } from "react";
import { Tab } from "../../molecules/tab/Tab";
import { TabMenu } from "../../molecules/tabMenu/TabMenu";
import { TabCategory } from "../../types";
import styles from "./skillBox.module.scss";

interface Props {
  data: TabCategory[];
}

export const SkillBox: React.FC<Props> = ({ data }) => {
  if (!data.length) throw new Error("missing items in data");
  const [activeTabCategory, setActiveTabCategory] = useState<TabCategory>(
    data[0]
  );

  return (
    <div className={styles.skillBox}>
      <TabMenu
        data={data}
        activeTabCategory={activeTabCategory}
        setActiveTabCategory={(data: TabCategory) => setActiveTabCategory(data)}
      />
      {data.map((tab, index) => (
        <Tab
          key={`${index}-${tab.title}`}
          data={tab}
          active={tab === activeTabCategory}
        />
      ))}
    </div>
  );
};
