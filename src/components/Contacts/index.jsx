import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ onSearchContact, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
            {onSearchContact.map(({ id, name, number }) => {
                return (
                    <li className={styles.item} key={id}>
                        <p className={styles.contact}>
                            {' '}
              - {name}: {number}
                        </p>
                        <button
                            type="button"
                            className={styles.btn}
                            onClick={() => onDeleteContact(id)}
                        >
                            Delete
            </button>
                    </li>
                );
            })}
        </ul>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
};
export default Contacts;