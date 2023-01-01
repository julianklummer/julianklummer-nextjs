import Link from "next/link";
import styles from "./iconLink.module.scss";

interface Props {
  title: string;
  iconPath: string;
  href: string;
}

export const IconLink: React.FC<Props> = ({ href, title, iconPath }) => {
  return (
    <Link href={href} className={styles.iconLink} title={title}>
      <img src={iconPath} alt="" />
    </Link>
  );
};
