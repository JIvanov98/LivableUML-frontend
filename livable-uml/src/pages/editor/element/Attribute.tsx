import React from "react";
import { Grid, Select, MenuItem, TextField, FormControl, InputLabel } from "@material-ui/core";
import { Visibility, PrimitiveTypes, AttributeData } from '../EditorTypes';

type Props = {
  attributeData: AttributeData, 
  userTypes: Set<string>,
  elementId: number
};


export default function Attribute(props: Props) {
  const [isEditing, setEditing] = React.useState(false);
  const [visibility, setVisibility] = React.useState(props.attributeData.visibility);
  const [varType, setType] = React.useState(props.attributeData.variable.type);

  const showEditing = () => setEditing(!isEditing);

  const handleVisibilityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // needs a reducer that sets visibility on attributes 
    setVisibility(event.target.value as Visibility);
  };

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // needs a reducer that sets type on attributes 
    setType(event.target.value as PrimitiveTypes);
  };

  const editAttribute = () => {
    const userTypeMenus: JSX.Element[] = [];
    props.userTypes.forEach((userType) => {
      userTypeMenus.push(<MenuItem value={userType}>{userType}</MenuItem>)
    })
  
    // temporary onPointerLeave : need to implement onBlur effect
    return (
      <Grid 
      container 
      spacing={1} 
      direction="row" 
      tabIndex={0} 
      onPointerLeave={showEditing}>
        <Grid item xs={2}>
          <FormControl>
            <InputLabel shrink>
              Visibility
            </InputLabel>
            <Select 
            value={visibility} 
            onChange={handleVisibilityChange}>
              <MenuItem value={Visibility.Private}>-</MenuItem>
              <MenuItem value={Visibility.Public}>+</MenuItem>
              <MenuItem value={Visibility.Protected}>#</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField 
          label="Attibute Name" 
          defaultValue={props.attributeData.variable.name}/>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel shrink>
                Type
            </InputLabel>
            <Select 
            value={varType}
            onChange={handleTypeChange}>
              <MenuItem value={PrimitiveTypes.Int}>int</MenuItem>
              <MenuItem value={PrimitiveTypes.Byte}>byte</MenuItem>
              <MenuItem value={PrimitiveTypes.Short}>short</MenuItem>
              <MenuItem value={PrimitiveTypes.Long}>long</MenuItem>
              <MenuItem value={PrimitiveTypes.Float}>float</MenuItem>
              <MenuItem value={PrimitiveTypes.Double}>double</MenuItem>
              <MenuItem value={PrimitiveTypes.String}>String</MenuItem>
              <MenuItem value={PrimitiveTypes.Boolean}>boolean</MenuItem>
              <MenuItem value={PrimitiveTypes.Char}>char</MenuItem>
              { userTypeMenus }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  };

  const displayAttribute = () => {
    const attribute = props.attributeData;
    return (
      <Grid 
      container 
      spacing={1} 
      direction="row" 
      onClick={showEditing}>
        <Grid item xs={2}>{attribute.visibility}</Grid>
        <Grid item xs={6}>{attribute.variable.name}:</Grid>
        <Grid item xs={4}>{attribute.variable.type}</Grid>
      </Grid>
    );
  };

  return isEditing ? 
                editAttribute() 
              : displayAttribute();
}
