import React from "react";
import { Grid } from "@material-ui/core";
import { AttributeProps } from './AttributeHandler';

export default function DisplayAttribute(props: AttributeProps) {
  const attribute = props.attributeData;

  return (
    <Grid 
    container 
    spacing={1} 
    direction="row">
      <Grid item xs={2}>{attribute.visibility}</Grid>
      <Grid item xs={6}>{attribute.variable.name}:</Grid>
      <Grid item xs={4}>{attribute.variable.type}</Grid>
    </Grid>
  );
}
