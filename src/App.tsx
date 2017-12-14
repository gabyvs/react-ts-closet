import * as React    from 'react';
import { Header }    from './components/header/Header';
import { Dashboard } from './components/dashboard/Dashboard';

export const App = () => (
    <div>
        <Header />
        <Dashboard />
    </div>
);