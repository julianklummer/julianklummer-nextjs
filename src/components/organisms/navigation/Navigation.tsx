import { NavigationButtonGroup } from "src/components/molecules/navigationButtonGroup/NavigationButtonGroup";
import { NavigationMenu } from "../../molecules/navigationMenu/NavigationMenu";
import styles from "./navigation.module.scss";

export const Navigation: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <NavigationMenu />
      <NavigationButtonGroup />
    </div>
  );
};
