import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    Button: {
width: 70,
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="outlined-basic" label="Name" variant="outlined" />

        <TextField id="outlined-basic" label="Email" variant="outlined" />

        <TextField
          id="outlined-multiline-static"
          label="Comment Here"
          multiline
          rows={4}
          variant="outlined"
        />
        <div className={classes.Button}>
          COMMENT
        </div>
      </div>
    </form>
  );
}
