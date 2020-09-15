import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiOutlinedInput-root':{
      width: 350,
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
      <Container>
    <form className={classes.root} noValidate autoComplete="off">
     
      <div>
       
        <TextField
          id="outlined-password-input"
          label="Product Name"
          type="text"
          variant="outlined"
        />
         <TextField
          id="outlined-password-input"
          label="Product ID"
          type="text"
          variant="outlined"
        />
         <TextField
          id="outlined-password-input"
          label="Enter Product KG"
          type="text"
          variant="outlined"
        />
        </div>
    </form>
    </Container>
  );
}


const Container = styled.div`
width: 60%;
margin: auto;
margin-top: 2rem;


`