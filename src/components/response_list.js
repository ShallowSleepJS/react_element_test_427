import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const useStyles = makeStyles((theme) => ({
  responses: {
    marginTop: 40,
    marginLeft: 20,
  },
  lineThrough: {
    textDecoration: 'line-through',
  },
}));

export default function ResponseList(props){
  const classes = useStyles();
  const {response} = props;
  return(
    <List
      component="nav"
      aria-label="main mailbox folders"
      className={classes.responses}
      style = {{fontSize: 10}}
      >
       {response.map(item => (
         <ListItem key={response.indexOf(item)}>
          <ListItemIcon>
            {!item.type ?
              <QueryBuilderIcon /> :
              (item.type === 'yes' ?
                <CheckCircleIcon color='primary'/> :
                <CancelIcon color='secondary'/>
              )
            }
          </ListItemIcon>
          {item.type === 'no' ?
            <ListItemText primary={`${item.name}  (${item.email})`} className={classes.lineThrough}/> :
            <ListItemText primary={`${item.name}  (${item.email})`} />
          }
        </ListItem>
       ))}
    </List>
  );
}
