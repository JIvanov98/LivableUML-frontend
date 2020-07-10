export interface EditorData {
    elements: ElementData[]
}

export interface ElementData {
    id: number,
    name: string,
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

export enum Visibility {
    Public = "+",
    Private = "-",
    Protected = "#"
}

export enum PrimitiveTypes {
    Int = "int",
    Byte = "byte",
    Short = "short",
    Long = "long",
    Float = "float",
    Double = "double",
    String = "String",
    Boolean = "boolean",
    Char = "char"
}
