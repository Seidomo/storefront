import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( {
  footer: {
    background: "lightBlue",
    textAlign: "center",
    marginTop: 100,
  }
})


function Footer() {

  const classes = useStyles();
    return (
      <footer className={classes.footer}>
        <Typography>  2021 Code Fellows</Typography>
      </footer>
    )
  }



export default Footer;