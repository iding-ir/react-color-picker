import styles from "./Button.module.scss";

export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {label}
    </button>
  );
};
