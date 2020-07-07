import React from "react";
import Grid from "./grid/Grid";

import Toolbar from "./toolbar/Toolbar";
import { connect } from "react-redux";
import { EditorData } from "./types";
import { StoreType } from "../../redux";


type EditorProps = {
  data: EditorData
};

function Editor(props: EditorProps) {
  return (
    <div>
      <Toolbar/>
      <Grid data={props.data}/>
    </div>
  );
}

const mapStateToProps = (state: StoreType) => {
  return {
    data: state.editor
  };
};

export default connect(mapStateToProps)(Editor);
