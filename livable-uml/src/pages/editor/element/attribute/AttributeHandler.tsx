import React from 'react';
import { Box } from "@material-ui/core";
import { AttributeData } from '../../EditorTypes';
import EditAttribute from './EditAttribute';
import DisplayAttribute from './DisplayAttribute';

export type AttributeProps = {
  attributeData: AttributeData, 
  userTypes: Set<string>,
  elementId: number
};

export default function AttributeHandler(props: AttributeProps) {
  const [isEditing, setEditing] = React.useState(false);
  const showEditing = () => setEditing(!isEditing);

  const body = isEditing ? 
                <EditAttribute 
                attributeData={props.attributeData}
                userTypes={props.userTypes}
                elementId={props.elementId}
                />
              : <DisplayAttribute 
                attributeData={props.attributeData}
                userTypes={props.userTypes}
                elementId={props.elementId}
                />

  return (
    <Box onClick={showEditing}>
      {body}
    </Box>
  );
}