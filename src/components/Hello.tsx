import * as React from "react";
import {Test} from "./Test";
const logo = require('./icon.png');

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
    return (
        <div className="hello">
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
            <img src={String(logo)}/>
            <Test />
        </div>
    );
};