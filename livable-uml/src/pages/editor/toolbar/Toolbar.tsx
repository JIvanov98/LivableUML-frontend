import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';
import ImportExportIcon from '@material-ui/icons/ImportExport';

import createIconAction from './CreateIconAction';
import addIconAction from './AddIconAction';
import removeIconAction from './RemoveIconAction';
import undoIconAction from './UndoIconAction';
import redoIconAction from './RedoIconAction';
import deleteIconAction from './DeleteIconAction';
import exportIconAction from './ExportIconAction';
import saveIconAction from './SaveIconAction';

export default function EditorToolbar() {

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
        <Typography variant="h6">
          UML Editor
        </Typography>
        
        {iconButtonGenerator(<CreateIcon/>, createIconAction)}
        {iconButtonGenerator(<AddIcon/>, addIconAction)}
        {iconButtonGenerator(<RemoveIcon/>, removeIconAction)}
        {iconButtonGenerator(<UndoIcon/>, undoIconAction)}
        {iconButtonGenerator(<RedoIcon/>, redoIconAction)}
        {iconButtonGenerator(<DeleteIcon/>, deleteIconAction)}
        {iconButtonGenerator(<ImportExportIcon/>, exportIconAction)}
        {iconButtonGenerator(<SaveIcon/>, saveIconAction)}

      </Toolbar>
    </AppBar>
  );
}
