import React from "react";
import { Paper, Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Element from "../element/Element";
import { store } from '../../../redux/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      height: '100%',
      width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.primary.light,
    },
    paper: {
      padding: theme.spacing(1),
      height: '90%',
      width: '90%',
    }
  }),
);

export default function Grid() {
  
  const [coords, setCords] = React.useState({x: 0, y: 0});
  const classes = useStyles();

  let mouseMoved = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setCords({x: e.screenX, y: e.screenY});
  };

  const data = store.getState().editor;
  const elements = data.elements.map((e) => <Element x={e.x} y={e.y}></Element>);

  return (
    <Box onMouseMove={mouseMoved} className={classes.root}>
      <Paper 
      elevation={9}
      className={classes.paper}>
        <p>paper test</p>
        <h3>Mouse Coords - x={coords.x} y={coords.y}</h3>
        <svg>
          <path stroke="black" d="M 0 0 L 200 100" />
        </svg>
        { elements }
      </Paper>
    </Box>
  );
}
