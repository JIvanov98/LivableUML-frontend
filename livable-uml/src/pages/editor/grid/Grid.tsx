import React from "react";
import { Paper, Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Element from "../element/Element";
import { EditorData } from "../types";
import grid from '../../../common/images/grid.png';


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
      backgroundImage: `url(${grid})`,
      height: '90%',
      width: '90%',
    },
    draggableElementsBox: {
      height: '1000px', 
      width: '1000px', 
      padding: '10px', 
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }
  }),
);

type Props = {
  data: EditorData;
}


export default function Grid(props: Props) {
  
  const [coords, setCords] = React.useState({x: 0, y: 0});
  const classes = useStyles();

  let mouseMoved = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setCords({x: e.screenX, y: e.screenY});
  };

  const elements = props.data.elements.map((e) => <Element x={e.x} y={e.y}></Element>);

  return (
    <Box onMouseMove={mouseMoved} className={classes.root}>
      <Paper 
      elevation={9}
      className={classes.paper}>
        <h3>Mouse Coords - x={coords.x} y={coords.y}</h3>
        { elements }
      </Paper>
    </Box>
  );
}
