import * as React       from 'react';
import * as jsonData    from '../../domain/data.json';
import { Data }         from '../../domain/domain';
import { EditableItem } from '../editableItem/editableItem';

const data: Data = jsonData as any;

export const Dashboard = () => {
    const items = data.closet.map((item) => (<EditableItem item={item} key={item.id}/>));
    return (
        <div>
            {items}
        </div>
    );
};