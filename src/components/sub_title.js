import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const useStyles = makeStyles((theme) => ({
  pos: {
    marginTop: 18,
    fontSize: 15,
    position: 'absolute',
    left: 30,
    display: 'inline-block',
  },
  arrowUpIcon: {
    display: 'inline',
    position: 'absolute',
    right: 30,
    marginTop:20,
  },
  voteCount: {
    display: 'inline',
    position: 'absolute',
    left: 175,
    marginTop: 22,
    fontSize: 11,
  },
}));

//take 2 props: title, detail
 export default function SubTitle(props){
    const classes = useStyles();
    const {title,detail} = props;

    return(
      <div>
        <Typography className={classes.pos} color="textSecondary">
          {title}
        </Typography>
        {detail ? (
          <Typography variant="body2" className={classes.voteCount} >
            {detail}
          </Typography>
        ) : null}
        <KeyboardArrowUpIcon className={classes.arrowUpIcon}/>

      </div>
    );
}
