import { routeList } from "../../../utils/routeList/routeList";
import { NavigationLink } from "../../atoms/NavigationLink/NavigationLink";
import styles from "./navigationMenu.module.scss";

export const NavigationMenu: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navigationMenu}>
        {routeList.map((route) => (
          <li key={route.title}>
            <NavigationLink href={route.to} title={route.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
