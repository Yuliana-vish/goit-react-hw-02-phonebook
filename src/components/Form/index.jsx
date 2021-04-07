import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import FormButton from './FormButton';
import FormName from './FormName';
import FormNumber from './FormNumber';
import styles from './Form.module.css';

class Form extends Component {
    static propTypes = {
       onAddContact: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { onAddContact } = this.props;
        const contact = {
            id: uuidv4(),
            name: this.state.name,
            number: this.state.number,
        };
        onAddContact(contact);
        this.setState({
            name: '',
            number: '',
        });
    };
    render() {
        const { name, number } = this.state;
        return (
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <FormName handleChange={this.handleChange} name={name} />
            <FormNumber handleChange={this.handleChange} number={number} />
            <FormButton />
          </form>
        );
    }
}

export default Form;