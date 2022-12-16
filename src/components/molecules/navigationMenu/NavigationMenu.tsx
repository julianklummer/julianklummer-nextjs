import { routeList } from "../../../utils/routeList/routeList";
import { StyledNavLink } from "../../atoms/StyledNavLink/StyledNavLink";

interface NavigationMenuProps {}

export const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  return (
    <nav>
      <ul className="navigation-menu">
        {routeList.map((route) => (
          <li key={route.title}>
            <StyledNavLink href={route.to} title={route.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
