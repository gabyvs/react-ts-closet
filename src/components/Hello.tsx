import * as React from "react";
import './hello.css';
const logo = require('./icon.png');

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => (
    <div>
        <h1 className="hello">Hello from {props.compiler} and {props.framework}!</h1>
        <img src={String(logo)}/>
    </div>
);