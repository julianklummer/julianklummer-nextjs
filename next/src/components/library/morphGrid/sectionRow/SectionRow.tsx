import styles from "./sectionRow.module.scss";

type Props = {
  children: React.ReactNode;
};

export const SectionRow: React.FC<Props> = ({ children }) => {
  return (
    <section className={styles.sectionRow}>
      <div className={styles.row}>{children}</div>
    </section>
  );
};
