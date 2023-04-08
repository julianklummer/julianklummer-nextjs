import styles from "./copyright.module.scss";

export const Copyright: React.FC = () => {
  return (
    <p className={styles.copyright}>
      © {new Date().getFullYear()} Julian Klummer
    </p>
  );
};
