import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( {
  mainHeader: {
    background: "lightBlue",
    
    
  },
  header: {
   
    textAlign: "center",

  }
})
;

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.mainHeader}>
      <Typography variant="h3" component="h3" className={classes.header}> OUR STORE </Typography>
    </header>
  )
}



