import Link from "next/link";
import styles from "./navigationLink.module.scss";

interface Props {
  title: string;
  href: string;
}

export const NavigationLink: React.FC<Props> = ({ href, title }) => {
  return (
    <Link href={href} className={styles.navigationLink} title={title}>
      {title}
    </Link>
  );
};
