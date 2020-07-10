import React from "react";
import { Grid } from "@material-ui/core";
import { AttributeData, Visibility, Variable, PrimitiveTypes } from "../../EditorTypes";
import AttributeHandler from "./AttributeHandler";


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
    <AttributeHandler 
      attributeData={a} 
      userTypes={props.userTypes} 
      elementId={props.elementId}/>
  );

  return (
    <Grid direction="column">
      <AttributeHandler
        attributeData={mockAttribute}
        userTypes={props.userTypes}
        elementId={0}
      />
      { attributes }
      {/* add attribute button here */}
    </Grid>
  );
}
