import React from "react";
import { Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

type Props = {
  x: number,
  y: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      flexWrap: 'wrap',
      flexDirection: 'column',
      background: theme.palette.secondary.dark,
    }
  })
);

// adapted from https://www.kirupa.com/html5/drag.htm

export default function Element(props: Props) {
  const [active, setActive] = React.useState(false);
  const [currentCoords, setCurrentCoords] = React.useState({x: props.x, y: props.y});
  const [initialCoords, setInitialCoords] = React.useState({x: 0, y: 0});
  const [offsetCoords, setOffsetCoords] = React.useState({x: 0, y: 0});
  const classes = useStyles();


  // the event is actually of type React.TouchEvent | React.MouseEvent 
  // but specifying both results in error (?)
  let dragStart = (e: any) => {
    e.type === "touchstart" ? 
        setInitialCoords({
          x: e.touches[0].clientX - offsetCoords.x,
          y: e.touches[0].clientY - offsetCoords.y
        })
      :
        setInitialCoords({
          x: e.clientX - offsetCoords.x,
          y: e.clientY - offsetCoords.y
        });
    
    setActive(true);
  }

  let dragEnd = (e: any) => {
    setInitialCoords(
    {
      x: currentCoords.x,
      y: currentCoords.y
    });


    setActive(false);
  }

  let drag = (e: any) => {
    if (active) {
    
      e.preventDefault();

      e.type === "touchmove" ?
          setCurrentCoords({
            x: e.touches[0].clientX -  initialCoords.x,
            y: e.touches[0].clientY -  initialCoords.y
          })
        :
          setCurrentCoords({
            x: e.clientX -  initialCoords.x,
            y: e.clientY -  initialCoords.y
          })

      setOffsetCoords(
      {
        x: currentCoords.x,
        y: currentCoords.y
      });
    }
  }


  return (
    <Box
    draggable
    className={classes.root}
    onMouseDown = {dragStart}
    onTouchStart = {dragStart}
    onTouchEnd = {dragEnd}
    onMouseUp = {dragEnd}
    onTouchMove = {drag}
    onMouseMove = {drag}

    p={2}

    left={currentCoords.x}
    top={currentCoords.y}
    >
      draggable element test
    </Box>
  );
}