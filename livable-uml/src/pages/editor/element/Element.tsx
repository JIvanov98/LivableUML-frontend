import React from "react";
import { Box, TextField, Divider, styled } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { updatePosition } from "../actions";
import { ElementData } from "../EditorTypes";
import Attributes from "./attribute/Attributes";
import Methods from "./Methods";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      flexWrap: 'wrap',
      flexDirection: 'column',
      background: theme.palette.secondary.dark,
      border: '3px solid rgba(0, 0, 0, 1)',
      cursor: 'grab',
      '&.hover': {
        background: theme.palette.secondary.light,
        border: '20px solid rgba(0, 0, 0, 1)',
      },
      '&.active': {
        background: theme.palette.secondary.main,
      },

    },
  })
);

type Props = {
  elementData: ElementData,
  userTypes: Set<string>
}

export default function Element(props: Props) {
  const classes = useStyles();
  const element = props.elementData;

  const updateElementPosition = (_: DraggableEvent, data: DraggableData) => {
    updatePosition(element.id, data.x, data.y);
  };

  return (
    <Draggable
      defaultPosition={{x: element.x, y: element.y}}
      grid={[20, 20]}
      bounds="parent"
      onStop={updateElementPosition}>
      <Box className={classes.root}>
        <TitleTextField defaultValue={element.name} multiline rowsMax={3}/>
        <Divider />
        <Attributes attributes={element.attributes} userTypes={props.userTypes} elementId={element.id}/>
        <Divider />
        <Methods />
      </Box>
    </Draggable>
  );
}

const TitleTextField = styled(TextField)({
  margin: "1em",
  fontSize: "16px",
  textAlign: "center",
});
