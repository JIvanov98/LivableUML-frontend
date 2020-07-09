import React from "react";
import { Grid, Select, MenuItem, TextField } from "@material-ui/core";
import { Visibility, PrimitiveTypes, AttributeData } from '../types';

type Props = {
    attributeData: AttributeData, 
    userTypes: string[],
    elementId: number
};

export default function Attribute(props: Props) {

    const userTypes = props.userTypes.map((type) => <MenuItem value={type}>{type}</MenuItem>);

    return (
        <Grid direction="row">
            <Select value="Visibility">
                <MenuItem value={Visibility.Private}>-</MenuItem>
                <MenuItem value={Visibility.Public}>+</MenuItem>
                <MenuItem value={Visibility.Protected}>#</MenuItem>
            </Select>
            <TextField>Name</TextField>
            <Select value="Type">
                <MenuItem value={PrimitiveTypes.Int}>Integer</MenuItem>
                <MenuItem value={PrimitiveTypes.Float}>Float</MenuItem>
                <MenuItem value={PrimitiveTypes.Double}>Double</MenuItem>
                <MenuItem value={PrimitiveTypes.String}>String</MenuItem>
                <MenuItem value={PrimitiveTypes.Boolean}>Boolean</MenuItem>
                <MenuItem value={PrimitiveTypes.Char}>Char</MenuItem>
                { userTypes }
            </Select>
        </Grid>
    );
}
