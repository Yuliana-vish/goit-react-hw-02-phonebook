import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onSearchContact }) => {
    return (
        <label className={styles.label}>
            {' '}
      Find contacts by name
            <input
                className={styles.input}
                onChange={event => onSearchContact(event.target.value)}
                value={filter}
            />
        </label>
    );
};

Filter.propTypes = {
    onSearchContact: PropTypes.func.isRequired,
};

export default Filter;