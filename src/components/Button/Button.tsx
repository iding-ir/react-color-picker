import styles from "./Button.module.scss";

export const Button = ({
  label,
  disabled = false,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <button disabled={disabled} className={styles.container} onClick={onClick}>
      {label}
    </button>
  );
};
