
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    cursor: 'pointer',
    width: 100,
    borderRadius: 3,
    backgroundColor: 'rgb(253, 252, 252)',
    outline: 'none',
    
    '&:hover': {
        backgroundColor: 'blue',
        color: 'white',
    },
  },
});

const ButtonForm = () => {
  const classes = useStyles();
  return (
    <button className={classes.button} value="Add contact" type="submit">
      Add contact
    </button>
  );
};

export default ButtonForm;
