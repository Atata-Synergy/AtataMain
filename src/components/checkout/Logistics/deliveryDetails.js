import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    '& .MuiInputBase-input': {
        width: 350,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Delivery Address" variant="outlined" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Contact Phone number" variant="outlined" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
       
      <TextField
          id="outlined-multiline-static"
          label="Other Informations"
          multiline
          rows={4}
          variant="outlined"
        />
      </form>
    </>
  );
}
