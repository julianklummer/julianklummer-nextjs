import Link from "next/link";
import styles from "./iconLink.module.scss";

interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export const IconLink: React.FC<Props> = ({ href, title, icon }) => {
  return (
    <Link href={href} className={styles.iconLink} title={title}>
      {icon}
    </Link>
  );
};
