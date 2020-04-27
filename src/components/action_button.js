import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  signOff: {
    backgroundColor: 'green',
    color: 'white',
    marginLeft: 30,
    width: 150,
    height: 50,
  },
  reject: {
    color: 'red',
    backgroundColor: 'white',
    border: '1px solid red',
    marginLeft: 30,
    width: 150,
    height: 50,
  },
  medium: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    position: 'relative',
    left: 50,
    top: 10,
    color: 'grey',
  },
  btnGroup: {
    position: 'relative',
    top: 20,
  }
}));

export default function ActionButton(props){
  const classes = useStyles();
  return(
    <div className={classes.btnGroup}>
      <Button variant="contained" className={classes.signOff} >SIGN-OFF</Button>
      <Button variant="contained" className={classes.reject}>REJECT</Button>
      <ShareIcon className={classes.medium} />
    </div>
  );
}
