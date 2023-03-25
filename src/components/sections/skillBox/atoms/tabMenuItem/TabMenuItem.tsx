import styles from "./tabMenuItem.module.scss";

interface Props {
  title: string;
  active?: boolean;
  onClick: Function;
}

export const TabMenuItem: React.FC<Props> = ({ title, active, onClick }) => {
  const classList = [styles.tabMenuItem];
  active && classList.push(styles._active);

  return (
    <button className={classList.join(" ")} onClick={() => onClick()}>
      {title}
    </button>
  );
};
