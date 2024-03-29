import styles from "./textBox.module.scss";

type Props = {
  text?: string;
  children?: React.ReactNode;
};

export const TextBox: React.FC<Props> = ({ text, children }) => {
  return (
    <span className={styles.textBox}>
      {text}
      {children}
    </span>
  );
};
