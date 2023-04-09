import styles from "./copyright.module.scss";

export const Copyright: React.FC = () => {
  return (
    <span className={styles.copyright}>
      <p>© {new Date().getFullYear()} Julian Klummer</p>
    </span>
  );
};
