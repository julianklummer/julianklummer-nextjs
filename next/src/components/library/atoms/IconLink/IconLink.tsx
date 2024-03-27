import Link from "next/link";
import styles from "./iconLink.module.scss";

type Props = {
  title: string;
  href: string;
  target?: string;
  icon: React.ReactNode;
};

export const IconLink: React.FC<Props> = ({ href, title, target, icon }) => {
  return (
    <Link
      href={href}
      target={target ? target : "_self"}
      className={styles.iconLink}
      title={title}
    >
      {icon}
    </Link>
  );
};
