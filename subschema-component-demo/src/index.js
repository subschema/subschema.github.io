import React from "react";
import _Example from "./Example.jsx";
import _DynamicSchema from "./DynamicSchema";
import _UpdateValue from "./UpdateValue.jsx";
import _Submit from "./Submit.jsx";
import _NewProject from "./NewProject";
import _Doc from './Doc';

export const DynamicSchema = _DynamicSchema;
export const Example = _Example;
export const UpdateValue = _UpdateValue;
export const Submit = _Submit;
export const NewProject = _NewProject;
export const Doc = _Doc;

export const types = {
    Example,
    Doc,
    UpdateValue, Submit, DynamicSchema, NewProject
};
export const templates = {

    H3(props){
        return <h3>{props.legend || props.children}</h3>
    }
};


export default ({types, templates});
