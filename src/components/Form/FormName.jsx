import styles from './Form.module.css';

const FormName = ({name, handleChange}) => {
    return (
        
        <label className={styles.label}>
            Name
            <input
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
                placeholder="Enter your full name"
                className={styles.input}
                required
            />
        </label>
    )
};

 export default FormName;