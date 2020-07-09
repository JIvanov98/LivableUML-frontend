import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

import createIconAction from './IconActions/CreateIconAction';
import zoomInIconAction from './IconActions/ZoomInIconAction';
import zoomOutIconAction from './IconActions/ZoomOutIconAction';
import undoIconAction from './IconActions/UndoIconAction';
import redoIconAction from './IconActions/RedoIconAction';
import deleteIconAction from './IconActions/DeleteIconAction';
import exportIconAction from './IconActions/ExportIconAction';
import saveIconAction from './IconActions/SaveIconAction';
import { Box, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    underline: {
      fontSize: "40px",
      "&&&:before": {
        borderBottom: "none"
      },
    }
  })
);

export default function EditorToolbar() {
  const classes = useStyles();

  const iconButtonGenerator = (icon: JSX.Element, action: () => void) => {
    return (
      <IconButton onClick={action}>
        {icon}
      </IconButton>
    );
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <TextField
            defaultValue="Project Name"
            margin="dense"
            InputProps={{ classes }}
          />
          <Grid container direction="row">
            {iconButtonGenerator(<CreateIcon/>, createIconAction)}
            <Divider orientation="vertical" flexItem/>
            {iconButtonGenerator(<ZoomInIcon/>, zoomInIconAction)}
            {iconButtonGenerator(<ZoomOutIcon/>, zoomOutIconAction)}
            <Divider orientation="vertical" flexItem/>
            {iconButtonGenerator(<UndoIcon/>, undoIconAction)}
            {iconButtonGenerator(<RedoIcon/>, redoIconAction)}
            <Divider orientation="vertical" flexItem/>
            {iconButtonGenerator(<DeleteIcon/>, deleteIconAction)}
            <Divider orientation="vertical" flexItem/>
            {iconButtonGenerator(<ImportExportIcon/>, exportIconAction)}
            {iconButtonGenerator(<SaveIcon/>, saveIconAction)}
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
