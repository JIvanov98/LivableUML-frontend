import React from "react";
import { Paper, Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Element from "../element/Element";
import { EditorData } from "../types";
import grid from '../../../common/images/grid.jpg';


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
      position: 'relative',
      height: '800px',
      width: '1800px',
    },
    image: {      
      backgroundImage: `url(${grid})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
      opacity: '0.7',
      position: 'absolute',
      height: '800px',
      width: '1800px',
    },
    elements: {
      height: '800px',
      width: '1800px',
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

  const elements = props.data.elements.map((e) => <Element id={e.id} x={e.x} y={e.y}></Element>);

  return (
    <Box onMouseMove={mouseMoved} className={classes.root}>
      <Paper className={classes.paper}
      elevation={9}>
        <Box className={classes.image}/>
        <Box className={classes.elements}>
          <h3>Mouse Coords - x={coords.x} y={coords.y}</h3>
          { elements }
        </Box>
      </Paper>
    </Box>
  );
}
