import * as React from 'react';
import * as cssStyles from './header.css';

const styles: any = cssStyles;

export const Header = () => (
    <div className={styles.header}>
        <span className={styles.text}>Gaby's Closet</span>
    </div>
);