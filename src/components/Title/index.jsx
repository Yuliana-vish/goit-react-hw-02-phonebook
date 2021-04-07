import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  title: {
    textTransform: 'capitalize',
    fontSize: 30,
    marginLeft: 30,
    marginBottom: 10,
  },
});

const Title = ({ title }) => {
    const classes = useStyles();
    return <h2 className={classes.title}>{title}</h2>;
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Title;