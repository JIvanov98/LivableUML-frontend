import React from "react";
import { Paper, Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { EditorData } from "../EditorTypes";
import { connect } from "react-redux";
import { StoreType } from "../../../redux";
import Element from "../element/Element";
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
    }
  }),
);

type Props = {
  data: EditorData,
  userTypes: Set<string>
}

function Grid(props: Props) {
  const classes = useStyles();

  const elements = props.data.elements.map(
    (e) => <Element elementData={e} userTypes={props.userTypes}></Element>
  );

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}
      elevation={9}>
        <Box className={classes.image}/>
        { elements }
      </Paper>
    </Box>
  );
}

const mapStateToProps = (state: StoreType) => {
  return {
    data: state.editor,
    userTypes: state.userTypes
  };
};

export default connect(mapStateToProps)(Grid);
