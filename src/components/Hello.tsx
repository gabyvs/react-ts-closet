import * as React from "react";
import {Test} from "./Test";
const logo = require('./icon.png');
import * as jsonData from "./data.json";
import { Data } from "../domain/domain";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
    console.log((jsonData as any).data);

    const data: Data = (jsonData as any);
    console.log(data.closet);
    return (
        <div className="hello">
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
            <img src={String(logo)}/>
            <Test />
        </div>
    );
};