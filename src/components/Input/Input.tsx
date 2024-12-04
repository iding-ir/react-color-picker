import styles from "./Input.module.scss";

export const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={styles.container}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};
