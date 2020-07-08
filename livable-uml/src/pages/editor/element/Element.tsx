import React from "react";
import { Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { updatePosition } from "../actions";
import { ElementData } from "../types";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      flexWrap: 'wrap',
      flexDirection: 'column',
      padding: '0.5em 1em',
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

export default function Element(props: ElementData) {
  const classes = useStyles();

  const updateElementPosition = (_: DraggableEvent, data: DraggableData) => {
    updatePosition(props.id, data.x, data.y);
  };

  return (
    <Draggable
      defaultPosition={{x: props.x, y: props.y}}
      grid={[25, 25]}
      onStop={updateElementPosition}>
      <Box className={classes.root}>
        <p>Drag from here</p>
      </Box>
    </Draggable>
  );
}
