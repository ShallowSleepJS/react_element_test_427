import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  msgAuthor: {
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 18,
  },
  msg: {
    textAlign: 'left',
    marginTop: 60,
    marginLeft: 15,
  },
}));

const Message = (props) => {
  const classes = useStyles();
  const {message,author} = props;
  return(
    <div>
      <Typography variant="body2" className = {classes.msg} >
          {message}
      </Typography>
      <Typography variant="body2" className = {classes.msgAuthor} >
        - {author}
      </Typography>
    </div>
  );
}

export default Message;
