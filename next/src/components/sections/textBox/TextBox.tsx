import ReactMarkdown from "react-markdown";
import styles from "./textBox.module.scss";

interface Props {
  text: string;
}

export const TextBox: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.textBox}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};
