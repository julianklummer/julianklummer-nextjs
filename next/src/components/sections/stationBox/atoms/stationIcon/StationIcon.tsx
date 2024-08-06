import SourceCode from "@/icons/skillList/source-code.svg";
import Burda from "@/icons/stationList/logos/burda.svg";
import HdM from "@/icons/stationList/logos/hdm.svg";
import ReadyForTechno from "@/icons/stationList/logos/readyfortechno.svg";
import Sirup from "@/icons/stationList/logos/sirup.svg";
import Vinos from "@/icons/stationList/logos/vinos.svg";
type Props = {
  name: string;
};

export const StationIcon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case "burda":
      return <Burda />;
    case "sirup":
      return <Sirup />;
    case "vinos":
      return <Vinos />;
    case "readyfortechno":
      return <ReadyForTechno />;
    case "hdm":
      return <HdM />;
    default:
      return <SourceCode />;
  }
};
