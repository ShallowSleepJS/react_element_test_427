import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CardHeader,Avatar,IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const TopHeader = (props) => {
  const classes = useStyles();
  const {title,strTime} = props;
  const getTimeAmount = (t1) => {
    let startTime = new Date(t1);
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    return days + ' day,' + hours + ' hr,' + minutes + 'minutes ago';
  }
  const timeAmount = getTimeAmount(strTime);
  return(
    <div>
      <CardHeader
      avatar = {
        <Avatar variant="square" className={classes.large}>
        </Avatar>
      }
      action = {
        <IconButton aria-label="settings">
          <CloseIcon />
        </IconButton>
      }
        title = {title}
        subheader = {`${strTime} (${timeAmount})`}
      />
    </div>
  );
}

export default TopHeader;
