import * as React from 'react';
import * as styles from "./test.css";

const st: any = styles;

export const Test = () => <div className={st.hello}><h1>Should be black!</h1></div>;