import styles from "./Input.module.scss";

export const Input = ({
  type,
  onChange,
}: {
  type: string;
  onChange: () => void;
}) => {
  return <input className={styles.container} type={type} onChange={onChange} />;
};
