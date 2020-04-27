import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


const useStyles = makeStyles((theme) => ({
  files: {
    marginTop: 75,
    marginLeft: 20,
  },
  fileBlock: {
    width: 140,
    height:40,
    backgroundColor: 'Gainsboro ',
    display:'inline-block',
    marginRight: 15,
    padding:10,
  }

}));

export default function Files(props){
  const classes = useStyles();
  const {files} = props;
  return(
    <div className = {classes.files}>
    {files.map((item) => (
      <div
        className = {classes.fileBlock}
        key = {files.indexOf(item)}
      >
        {item.type === 'pdf' ? <PictureAsPdfIcon color='primary' /> : <PhotoLibraryIcon color='secondary'/>}
        <span>{item.file}</span>
      </div>
    ))}
    </div>
  );
}
