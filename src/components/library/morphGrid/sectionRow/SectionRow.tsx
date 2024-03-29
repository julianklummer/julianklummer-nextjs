import styles from "./sectionRow.module.scss";

interface Props {
  children: React.ReactNode;
}

export const SectionRow: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.sectionRow}>
      <div className={styles.row}>{children}</div>
    </div>
  );
};
