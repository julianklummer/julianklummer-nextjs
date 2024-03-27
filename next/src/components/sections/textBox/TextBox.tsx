import styles from "./textBox.module.scss";

type Props = {
  text: string;
};

export const TextBox: React.FC<Props> = ({ text }) => {
  return (
    <p className={styles.textBox} dangerouslySetInnerHTML={{ __html: text }} />
  );
};
