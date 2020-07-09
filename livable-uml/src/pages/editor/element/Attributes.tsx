import React from "react";
import { Grid } from "@material-ui/core";
import { AttributeData } from "../types";
import Attribute from "./Attribute";


type Props = {
    attributes: AttributeData[],
    userTypes: string[],
    elementId: number
};

export default function Attributes(props: Props) {

    const attributes = props.attributes.map((a) => 
    <Attribute attributeData={a} userTypes={props.userTypes} elementId={props.elementId}/>);

    return (
        <Grid direction="column">
            { attributes }
            {/* add attribute button here */}
        </Grid>
    );
}
