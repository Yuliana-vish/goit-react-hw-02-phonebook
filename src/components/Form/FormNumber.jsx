import styles from './Form.module.css';

const FormNumber = ({ number, handleChange }) => {
  return (
    <label className={styles.label}>
      Number
      <input
        type="text"
        value={number}
        name="number"
        onChange={handleChange}
        placeholder="xxx-xx-xx"
        className={styles.input}
        required
      />
    </label>
  );
};

export default FormNumber;
