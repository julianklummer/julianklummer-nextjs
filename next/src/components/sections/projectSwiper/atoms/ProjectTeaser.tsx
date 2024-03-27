import { StaticImageData } from "next/image";

type Props = {
  headline: string;
  url: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const ProjectTeaser: React.FC<Props> = ({ headline, url, image }) => {
  return (
    <div>
      <a title={headline} aria-label={headline} href={url} target="_blank">
        link
      </a>
    </div>
  );
};
