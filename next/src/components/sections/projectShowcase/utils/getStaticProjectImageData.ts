import { StaticImageData } from "next/image";
import csbw from "public/assets/images/projects/csbw.png";
import aufbau from "public/assets/images/projects/aufbau.png";
import burgtheater from "public/assets/images/projects/burgtheater.png";
import bfn from "public/assets/images/projects/bfn.png";
import scienceolympiaden from "public/assets/images/projects/scienceolympiaden.png";
import berlinerensemble from "public/assets/images/projects/berlinerensemble.png";
import wienersymphoniker from "public/assets/images/projects/wienersymphoniker.png";

export const getStaticProjectImageData = (srcId: string): StaticImageData => {
  switch (srcId) {
    case "csbw":
      return csbw;
    case "aufbau":
      return aufbau;
    case "burgtheater":
      return burgtheater;
    case "bfn":
      return bfn;
    case "scienceolympiaden":
      return scienceolympiaden;
    case "berlinerensemble":
      return berlinerensemble;
    case "wienersymphoniker":
      return wienersymphoniker;
    default:
      return csbw;
  }
};
