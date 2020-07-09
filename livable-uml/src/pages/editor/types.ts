export interface EditorData {
    elements: ElementData[]
}

export interface ElementData {
    name: string,
    id: number,
    x: number,
    y: number,
    attributes: AttributeData[]
}

export interface AttributeData {
    visibility: Visibility,
    variable: Variable
}

export interface Variable {
    name: string,
    type: PrimitiveTypes | string
}

export interface Method {
    visibility: Visibility,
    name: string,
    paramters: Variable[],
    returnType: PrimitiveTypes | string
}

export const ADD_ELEMENT = 'ADD_ELEMENT';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';
export const UPDATE_POSITION = 'UPDATE_POSITION';

interface AddAction {
    type: typeof ADD_ELEMENT,
    payload: ElementData
}

interface UpdatePositionAction {
    type: typeof UPDATE_POSITION,
    id: number,
    newX: number,
    newY: number
}

export type UserActionTypes =
| AddAction
| UpdatePositionAction;


export enum Visibility {
    Public = "+",
    Private = "-",
    Protected = "#"
}

export enum PrimitiveTypes {
    Int,
    Float,
    Double,
    String,
    Boolean,
    Char
}



export const ADD_NAME = 'ADD_NAME';
export const DELETE_NAME = 'DELETE_NAME';
export const UPDATE_NAME = 'UPDATE_NAME';

interface AddNameAction {
    type: typeof ADD_NAME,
    name: string
}

interface DeleteNameAction {
    type: typeof DELETE_NAME,
    name: string
}

interface UpdateNameAction {
    type: typeof UPDATE_NAME,
    oldName: string,
    newName: string
}

export type NameActions =
| AddNameAction
| DeleteNameAction
| UpdateNameAction;
