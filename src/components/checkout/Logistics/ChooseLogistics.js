import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    '& .MuiSelect-select': {
      width: 350,
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Preffered means of Transport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>Air</MenuItem>
          <MenuItem value={2}>Land</MenuItem>
          <MenuItem value={3}>Sea</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Preffered Courier</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>DHL</MenuItem>
          <MenuItem value={11}>Transex</MenuItem>
          <MenuItem value={12}>GIG</MenuItem>
          <MenuItem value={13}>O-Pay</MenuItem>
          <MenuItem value={14}>Fedex</MenuItem>
          <MenuItem value={15}>Emirates</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
