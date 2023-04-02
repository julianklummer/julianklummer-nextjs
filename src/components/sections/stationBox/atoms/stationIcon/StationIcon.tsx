import SourceCode from "../../../../../../public/icons/skillList/source-code.svg";
import Sirup from "../../../../../../public/icons/stationList/logos/sirup.svg";
import Vinos from "../../../../../../public/icons/stationList/logos/vinos.svg";

interface Props {
  name: string;
}

export const StationIcon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case "sirup":
      return <Sirup />;
    case "vinos":
      return <Vinos />;
    default:
      return <SourceCode />;
  }
};
