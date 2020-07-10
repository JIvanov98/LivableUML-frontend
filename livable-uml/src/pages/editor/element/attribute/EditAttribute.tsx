import React from "react";
import { Grid, Select, MenuItem, TextField, FormControl, InputLabel } from "@material-ui/core";
import { Visibility, PrimitiveTypes } from '../../EditorTypes';
import { AttributeProps } from './AttributeHandler';

export default function EditAttribute(props: AttributeProps) {
  const [visibility, setVisibility] = React.useState(props.attributeData.visibility);
  const [varType, setType] = React.useState(props.attributeData.variable.type);

  const handleVisibilityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // needs a reducer that sets visibility on attributes 
    setVisibility(event.target.value as Visibility);
  };

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // needs a reducer that sets type on attributes 
    setType(event.target.value as PrimitiveTypes);
  };

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
    tabIndex={0}>
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
}