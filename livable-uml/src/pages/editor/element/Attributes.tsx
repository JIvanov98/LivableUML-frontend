import React from "react";
import { Grid } from "@material-ui/core";
import { AttributeData, Visibility, Variable, PrimitiveTypes } from "../EditorTypes";
import Attribute from "./Attribute";


type Props = {
  attributes: AttributeData[],
  userTypes: Set<string>,
  elementId: number
};

export default function Attributes(props: Props) {
  const mockVariable: Variable = {
    name: "TestAttribute",
    type: PrimitiveTypes.Int
  };

  const mockAttribute: AttributeData = {
    visibility: Visibility.Public,
    variable: mockVariable
  };


  const attributes = props.attributes.map((a) => 
  <Attribute attributeData={a} userTypes={props.userTypes} elementId={props.elementId}/>);

  return (
    <Grid direction="column">
      <Attribute 
      attributeData={mockAttribute} 
      userTypes={props.userTypes} 
      elementId={props.elementId}/>
      { attributes }
      {/* add attribute button here */}
    </Grid>
  );
}
